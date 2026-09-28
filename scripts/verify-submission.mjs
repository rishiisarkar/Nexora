import fs from 'node:fs';
import path from 'node:path';

const EXPECTED_CONTRACT_ADDRESS = '0xf36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e';
const EXPECTED_TX_HASH = '0xfeda9a704ff1a01a1d9804d01aeed14b64267c2f0cee179e96e295cf927ad20e';
const EXPECTED_BLOCK_HEIGHT = 2705947;
const EXPECTED_COMPILER_VERSION = '0.31.1';
const EXPECTED_CIRCUITS = ['add_valid_credential', 'verify_access'];

function strip0x(hex) {
  return hex.startsWith('0x') ? hex.slice(2) : hex;
}

let passed = true;

function logStep(title) {
  console.log(`\n=== [CHECK] ${title} ===`);
}

function pass(message) {
  console.log(`  [PASS] ${message}`);
}

function fail(message) {
  console.error(`  [FAIL] ${message}`);
  passed = false;
}

async function verifyLevel6Evidence() {
  logStep('Verifying Level 6 Evidence & Documentation Files');

  const requiredFiles = [
    'README.md',
    'Documents/USERS.md',
    'Documents/LAUNCH_USERS.md',
    'Documents/Architecture.md',
    'Documents/TRUST_MODEL.md',
  ];

  for (const relPath of requiredFiles) {
    if (fs.existsSync(relPath)) {
      const stats = fs.statSync(relPath);
      if (stats.size > 0) {
        pass(`Found evidence file: ${relPath} (${stats.size} bytes)`);
      } else {
        fail(`Evidence file is empty: ${relPath}`);
      }
    } else {
      fail(`Required Level 6 file missing: ${relPath}`);
    }
  }

  // Check FEEDBACK.md / Feedback.md
  const feedbackFiles = ['Documents/FEEDBACK.md', 'Documents/Feedback.md'];
  const foundFeedback = feedbackFiles.find((f) => fs.existsSync(f));
  if (foundFeedback && fs.statSync(foundFeedback).size > 0) {
    pass(`Found feedback evidence file: ${foundFeedback} (${fs.statSync(foundFeedback).size} bytes)`);
  } else {
    fail('Required feedback evidence file missing: Documents/FEEDBACK.md');
  }

  // Check plan document
  const planFiles = [
    'Documents/midnight_level6_Nexora_plan.md',
    'Documents/PLAN.md',
  ];
  const foundPlan = planFiles.find((f) => fs.existsSync(f));
  if (foundPlan && fs.statSync(foundPlan).size > 0) {
    pass(`Found Level 6 plan file: ${foundPlan} (${fs.statSync(foundPlan).size} bytes)`);
  } else {
    fail('Required Level 6 plan file missing: Documents/midnight_level6_Nexora_plan.md');
  }
}

function verifyContractSource() {
  logStep('Verifying Compact Contract Source & Circuits');

  const compactPaths = ['contract/midnight.compact', 'contracts/src/midnight.compact'];
  let foundSource = false;

  for (const p of compactPaths) {
    if (fs.existsSync(p)) {
      foundSource = true;
      const src = fs.readFileSync(p, 'utf8');
      pass(`Found Compact contract source: ${p}`);

      for (const circuit of EXPECTED_CIRCUITS) {
        if (src.includes(circuit)) {
          pass(`${p} exports circuit: ${circuit}`);
        } else {
          fail(`${p} missing expected circuit: ${circuit}`);
        }
      }
    }
  }

  if (!foundSource) {
    fail('No Compact contract source found in contract/ or contracts/src/');
  }

  const contractInfoPath = 'contracts/src/managed/compiler/contract-info.json';
  if (fs.existsSync(contractInfoPath)) {
    try {
      const info = JSON.parse(fs.readFileSync(contractInfoPath, 'utf8'));
      if (info['compiler-version'] === EXPECTED_COMPILER_VERSION) {
        pass(`Compiler version matches: ${info['compiler-version']}`);
      } else {
        fail(`Compiler version mismatch: expected ${EXPECTED_COMPILER_VERSION}, got ${info['compiler-version']}`);
      }
    } catch (e) {
      fail(`Malformed contract-info.json: ${e.message}`);
    }
  }
}

function verifyDeploymentManifest() {
  logStep('Verifying Contract Deployment Manifest');

  const manifestPath = 'contract/deployment.preprod.json';
  if (!fs.existsSync(manifestPath)) {
    fail(`Deployment manifest missing: ${manifestPath}`);
    return;
  }

  let data;
  try {
    const raw = fs.readFileSync(manifestPath, 'utf8');
    data = JSON.parse(raw);
    pass(`Valid JSON manifest: ${manifestPath}`);
  } catch (e) {
    fail(`Malformed JSON in ${manifestPath}: ${e.message}`);
    return;
  }

  // Network checks
  if (data.network === 'preprod' && data.networkId === 'preprod') {
    pass(`Network verified: ${data.network}`);
  } else {
    fail(`Invalid network: expected 'preprod', got '${data.network}' / '${data.networkId}'`);
  }

  // Contract address check
  if (strip0x(data.contractAddress).toLowerCase() === strip0x(EXPECTED_CONTRACT_ADDRESS).toLowerCase()) {
    pass(`Contract address verified: ${data.contractAddress}`);
  } else {
    fail(`Contract address mismatch: expected ${EXPECTED_CONTRACT_ADDRESS}, got ${data.contractAddress}`);
  }

  // Deployment transaction check
  if (strip0x(data.deploymentTransaction).toLowerCase() === strip0x(EXPECTED_TX_HASH).toLowerCase()) {
    pass(`Deployment tx hash verified: ${data.deploymentTransaction}`);
  } else {
    fail(`Deployment tx mismatch: expected ${EXPECTED_TX_HASH}, got ${data.deploymentTransaction}`);
  }

  // Block height check
  if (Number(data.blockHeight) === EXPECTED_BLOCK_HEIGHT) {
    pass(`Block height verified: ${data.blockHeight}`);
  } else {
    fail(`Block height mismatch: expected ${EXPECTED_BLOCK_HEIGHT}, got ${data.blockHeight}`);
  }

  // Compiler version check
  if (data.compilerVersion === EXPECTED_COMPILER_VERSION) {
    pass(`Manifest compiler version verified: ${data.compilerVersion}`);
  } else {
    fail(`Manifest compiler version mismatch: expected ${EXPECTED_COMPILER_VERSION}, got ${data.compilerVersion}`);
  }

  // Circuits check
  if (Array.isArray(data.circuits)) {
    for (const c of EXPECTED_CIRCUITS) {
      if (data.circuits.includes(c)) {
        pass(`Circuit entry point confirmed: ${c}`);
      } else {
        fail(`Missing circuit in manifest: ${c}`);
      }
    }
  } else {
    fail('circuits field in manifest must be an array');
  }

  // Verification status
  if (data.verificationStatus === 'VERIFIED_ON_CHAIN') {
    pass(`Verification status: ${data.verificationStatus}`);
  } else {
    fail(`Unexpected verification status: ${data.verificationStatus}`);
  }

  // Endpoints check
  if (
    data.endpoints &&
    typeof data.endpoints.rpcUrl === 'string' &&
    typeof data.endpoints.indexerUrl === 'string' &&
    typeof data.endpoints.explorerUrl === 'string' &&
    data.endpoints.explorerUrl.includes(strip0x(EXPECTED_CONTRACT_ADDRESS))
  ) {
    pass(`Endpoints validated: RPC, Indexer, Explorer`);
  } else {
    fail(`Invalid or missing endpoints configuration`);
  }
}

function verifyAddressConsistency() {
  logStep('Verifying Contract Address Consistency Across Repository');

  const filesToCheck = [
    'README.md',
    'app/src/components/landing/LandingPage.tsx',
    'app/src/components/landing/LandingFooter.tsx',
    'contract/deployment.preprod.json',
  ];

  const rawAddr = strip0x(EXPECTED_CONTRACT_ADDRESS);

  for (const f of filesToCheck) {
    if (fs.existsSync(f)) {
      const content = fs.readFileSync(f, 'utf8');
      if (content.includes(rawAddr) || content.includes(EXPECTED_CONTRACT_ADDRESS)) {
        pass(`Consistent contract address found in ${f}`);
      } else {
        fail(`Contract address missing or inconsistent in ${f}`);
      }
    }
  }
}

async function verifyIndexerConnectivity() {
  logStep('Verifying Midnight GraphQL Indexers & On-Chain Contract State');

  // 1. Midnight Preprod Indexer Contract Verification
  const preprodUrl = 'https://indexer.preprod.midnight.network/api/v4/graphql';
  const query = `{
    contractAction(address: "${strip0x(EXPECTED_CONTRACT_ADDRESS)}") {
      __typename
      ... on ContractDeploy {
        address
        transaction {
          hash
          block {
            height
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch(preprodUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (res.ok) {
      const json = await res.json();
      const action = json?.data?.contractAction;
      if (action && action.__typename === 'ContractDeploy') {
        pass(`Preprod indexer confirmed contract deployment on-chain`);
        if (action.transaction?.hash === strip0x(EXPECTED_TX_HASH)) {
          pass(`Preprod on-chain tx hash verified: ${action.transaction.hash}`);
        } else {
          fail(`Preprod on-chain tx hash mismatch: expected ${strip0x(EXPECTED_TX_HASH)}, got ${action.transaction?.hash}`);
        }
        if (action.transaction?.block?.height === EXPECTED_BLOCK_HEIGHT) {
          pass(`Preprod on-chain block height verified: #${action.transaction.block.height}`);
        } else {
          fail(`Preprod on-chain block height mismatch: expected ${EXPECTED_BLOCK_HEIGHT}, got ${action.transaction?.block?.height}`);
        }
      } else {
        fail(`Contract not found as ContractDeploy on Preprod indexer: ${JSON.stringify(json)}`);
      }
    } else {
      fail(`Preprod indexer returned HTTP ${res.status}`);
    }
  } catch (err) {
    fail(`Preprod indexer connectivity check failed: ${err.message}`);
  }

  // 2. Midnight Preview Indexer Health Check
  const previewUrl = 'https://indexer.preview.midnight.network/api/v4/graphql';
  try {
    const res = await fetch(previewUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ block { height } }' }),
    });

    if (res.ok) {
      const json = await res.json();
      if (json?.data?.block?.height) {
        pass(`Preview indexer connected (current block: #${json.data.block.height})`);
      } else {
        fail(`Preview indexer returned unexpected response: ${JSON.stringify(json)}`);
      }
    } else {
      fail(`Preview indexer returned HTTP ${res.status}`);
    }
  } catch (err) {
    fail(`Preview indexer connectivity check failed: ${err.message}`);
  }
}

async function main() {
  console.log('Starting Level 6 Submission & Contract Verification Suite...');

  await verifyLevel6Evidence();
  verifyContractSource();
  verifyDeploymentManifest();
  verifyAddressConsistency();
  await verifyIndexerConnectivity();

  console.log('\n======================================================');
  if (passed) {
    console.log('  ALL CHECKS PASSED: Level 6 Submission Evidence Verified');
    console.log('======================================================\n');
    process.exitCode = 0;
  } else {
    console.error('  VERIFICATION FAILED: One or more checks failed');
    console.error('======================================================\n');
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error('Unexpected error during verification:', err);
  process.exitCode = 1;
});
