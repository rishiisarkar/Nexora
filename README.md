<div align="left">

  <h1 align="left">🔐 Nexora</h1>
  <h3>Privacy-First Zero-Knowledge Access Control on Midnight Network</h3>
  <p><i>Prove you're authorized — without revealing who you are.</i></p>

  <br />
  <img src="https://img.shields.io/badge/Midnight_Network-000000?style=for-the-badge" alt="Midnight Network" />
  <img src="https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Lace_Wallet-7B68EE?style=for-the-badge" alt="Lace Wallet" />
  <img src="https://img.shields.io/badge/1AM_Wallet-FF5733?style=for-the-badge" alt="1AM Wallet" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />

<br />
 
<br />

> Confidential, production-grade Zero-Knowledge access control gateway built on the Midnight Network. Nexora lets users prove they are authorized to access a resource — without ever revealing their identity, wallet history, or the underlying credential.
</div>

## 🏆 Level 6 Verification & Submission Deliverables

<div align="left">
  
* 🌐 **Live Web Application:** https://nexora-app-web3.vercel.app/ *(Live Nexora application deployed on Midnight Preprod)*

* 💻 **Public GitHub Repository:** https://github.com/rishiisarkar/Nexora *(Complete open-source Nexora implementation with updated documentation)*

* ⛓️ **Midnight Preprod Contract:** `0xf36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e`

* 🔍 **Preprod Contract Explorer:** [View Nexora on Midnight Preprod Explorer](https://preprod.midnightexplorer.com/contracts/85c6d5ce4fec74c33a17d4307290bf7d05878637b9f2e70bead1d90bdf5353cc) *(Publicly verifiable contract deployment)*

* 🐦 **Official Product X Handle:** [@NexoraWeb3x](https://x.com/NexoraWeb3x/) *(Official Nexora profile for product updates, Midnight development progress, privacy-focused content, and community outreach)*

* 📊 **Mandatory User Feedback Google Sheet:** [View Nexora User Feedback Responses](https://docs.google.com/spreadsheets/d/15vLOWZlfbG9BFbDRfPmD1uYHZlk1dcgLbbNT8eNDcPQ/edit?usp=sharing) *(Mandatory Level 5 & Level 6 feedback format)*

* 📝 **User Feedback Collection Form:** [Open Nexora Feedback Form](https://forms.gle/ShbFDAme1TiP7FRYA) *(Used to collect tester feedback, usability observations, issues, and improvement suggestions)*

* 👥 **70+ Verifiable Preprod Users:** `70+ Midnight Preprod tester wallet addresses` *(Verifiable user participation and on-chain activity)*

* 💬 **Documented Feedback Loop:** `FEEDBACK.md` *(Documents tester feedback, identified friction points, product improvements, and development iterations)*

* 📚 **Updated Project Documentation:** `README.md` *(Complete documentation covering Nexora architecture, privacy model, setup, wallet integration, ZK verification flow, Preprod deployment, and usage instructions)*

* 🎥 **Demo Video Walkthrough:** [Watch the Nexora MVP Demo](https://drive.google.com/file/d/1cAb_dis5CkSjRz4XW3x5RSnGYpUv2BDh/view?usp=sharing) *(Full end-to-end Nexora MVP demonstration)*

* 🔐 **Privacy-Preserving Verification:** Nexora proves authorized membership through a Zero-Knowledge proof without exposing the raw credential, Merkle inclusion path, or private witness values on-chain.

* ♻️ **Nullifier Replay Protection:** Every successful verification uses a unique nullifier, preventing previously used authorization proofs from being replayed.

* 👛 **Multi-Wallet Support:** Lace and 1AM wallet integration for secure Midnight Preprod authentication and transaction signing.

* ⚙️ **CI/CD Pipeline:** ✅ Configured and passing *(Automated build and deployment workflow integrated into the public repository)*

* 💻 **Commit History:** `30+ meaningful commits` *(Exceeds the Level 6 minimum requirement and demonstrates continuous development and iteration)*

* 🧪 **End-to-End MVP Verification:** ✅ Complete *(Admin gate creation → credential enrollment → local ZK proof generation → Midnight verification → nullifier protection → private access unlock)*

### 🟢 Level 6 Status

**All required Level 6 deliverables have been completed and are available for verification through the Nexora repository, live application, Midnight Preprod deployment, user feedback records, and demonstration materials.**
</div>

---

## 📚 Documentation

| Document                                                           | Description                                                                              |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [README.md](./README.md)                                           | Complete project overview, features, setup, architecture, and deployment information     |
| [Architecture.md](./Architecture.md)                               | System architecture, project structure, components, and implementation details           |
| [FEEDBACK.md](./FEEDBACK.md)                                       | User testing feedback, ratings, issues, suggestions, and documented feedback loop        |
| [LAUNCH_USERS.md](./LAUNCH_USERS.md)                               | Launch user information and Midnight Preprod user onboarding evidence                    |
| [PLAN.md](./PLAN.md)                                               | Development roadmap, milestones, and implementation plan                                 |
| [PROPOSAL.md](./PROPOSAL.md)                                       | Product proposal and Zero-Knowledge solution overview                                    |
| [TRUST_MODEL.md](./TRUST_MODEL.md)                                 | Privacy model, trust assumptions, security boundaries, and threat considerations         |
| [USERS.md](./USERS.md)                                             | Midnight Preprod user wallet addresses and verification evidence                         |
| [midnight_level6_Nexora_plan.md](./midnight_level6_Nexora_plan.md) | Level 6 Nexora planning, requirements, implementation progress, and submission checklist |

---

## Level 6 Users
See [`LAUNCH_USERS.md`](./Documents/LAUNCH_USERS.md)

## Level 5 - User Validation & Iteration
- **Target:** 50 Preprod users
- **Current Verified:** 50 / 50
- **User Directory:** See [`USERS.md`](./Documents/USERS.md) for full verified addresses.
- **Feedback & Changes:** See [`Documents/FEEDBACK.md`](./Documents/FEEDBACK.md) for raw feedback logs, feedback themes, and applied code iterations.

## Feedback & Iterations
See [`docs/FEEDBACK.md`](./docs/FEEDBACK.md) for full details.
Summary of top changes made from user feedback:
* **Gas Onboarding:** Added a tDUST faucet banner to prevent zero-gas transaction failures for first-time Preprod testers.
* **Prover Latency & UI Locking:** Implemented a frontend loading spinner and disabled button states during local ZK proof generation to prevent accidental double-clicking.
* **Input Validation & Context:** Added client-side input validation for positive numbers to prevent circuit crashes, along with a visual tier legend (Bronze, Silver, Gold) for scoring context.


## 🌒 Moonshots Level 1 → 6 — Requirements & Submission Checklist
## 🌐 Live Demo
[https://nexora-app-web3.vercel.app/](https://nexora-app-web3.vercel.app/)
## 📱 Nexora in Action
<img width="739" height="1600" alt="WhatsApp Image 2026-09-11 at 2 12 55 AM" src="" />

<table align="center" >
  <tr>
    <td align="center">
      <img
    src="https://github.com/user-attachments/assets/4adc0065-2b17-498d-8832-798b6834fa65" 
        alt="Nexora Demo 1"
        width="220"
        hspace="15"
      />
    </td>
    <td align="center"> 
      <img 
        src="https://github.com/user-attachments/assets/ed33dc2a-6561-47f1-a32d-c20e438be101"
        alt="Nexora Demo 2"
        width="220"
        hspace="15"
      />
    </td>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/26e848fb-3064-4433-b7bf-cc06fed25ca7"
        alt="Nexora Demo 3"
        width="220"
        hspace="15"
      />
    </td>
  </tr>
</table>

## 𝕏 Follow Nexora

Follow **Nexora** on X for product updates, Midnight development progress, privacy insights, and Preprod releases.

👉 **[Follow @NexoraWeb3x on X](https://x.com/NexoraWeb3x/)**

## **Demo Video** [Watch the Nexora Demo Video on Google Drive](https://drive.google.com/file/d/1cAb_dis5CkSjRz4XW3x5RSnGYpUv2BDh/view?usp=sharing)
---

## 📋 Quick Links & CheckList
| Network     | Address                                                              |
| ----------- | -------------------------------------------------------------------- |
| 𝕏 **X / Twitter** | [@NexoraWeb3x](https://x.com/NexoraWeb3x/) |
| **🌐Live Demo** | [https://nexora-app-web3.vercel.app/](https://nexora-app-web3.vercel.app/) |
| **Preprod** | `0xf36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e` |
| **Demo Video** |[Watch the Nexora Demo Video on Google Drive](https://drive.google.com/file/d/1cAb_dis5CkSjRz4XW3x5RSnGYpUv2BDh/view?usp=sharing) |
| CI/CD pipeline running (workflow file + passing runs)                 |               ✅ **Passed**                |

> Preprod deployed. Verify the new address on [Midnight Preprod Explorer](https://preprod.midnightexplorer.com/contracts/85c6d5ce4fec74c33a17d4307290bf7d05878637b9f2e70bead1d90bdf5353cc) 

---
## 🔎 Explorer Verification (Preview NetWork)

| Resource | Link                                                                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Explorer | [Midnight Preprod Explorer](https://preprod.midnightexplorer.com/contracts/85c6d5ce4fec74c33a17d4307290bf7d05878637b9f2e70bead1d90bdf5353cc)                                                                                                        |
| Contract | [0xf36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e](https://preprod.midnightexplorer.com/contracts/f36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e) |

# 🏆 Nexora — Level 6 Requirements & Submission Checklist

## **Requirements to Pass**

| Requirement                         | Nexora Implementation / Evidence                                                                                                                                                                                                        |      Status      |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------: |
| **Same MVP from Level 5, extended** | Nexora's complete privacy-preserving access gateway with Admin Gate Creation, Credential Enrollment, Merkle Membership Verification, ZK Proof Generation, Nullifier Replay Protection, Wallet Integration, and Protected Session Unlock | 🟢 **Completed** |
| **70 Preprod users**                | 70+ verifiable Midnight Preprod user wallet addresses with on-chain activity                                                                                                                                                            | 🟢 **Completed** |
| **Feedback loop documented**        | User feedback collected through the official Nexora feedback form and documented through the linked Google Sheets response tracker                                                                                                      | 🟢 **Completed** |
| **Updated documentation**           | Updated README and project documentation covering setup, architecture, privacy model, wallet integration, ZK verification, Preprod deployment, user flow, and troubleshooting                                                           | 🟢 **Completed** |
| **Live Preprod deployment**         | Nexora deployed and operational on Midnight Preprod with a publicly verifiable contract address                                                                                                                                         | 🟢 **Completed** |
| **Minimum 20 meaningful commits**   | Nexora repository contains continued development history with significantly more than the required commit count                                                                                                                         | 🟢 **Completed** |
| **Complete MVP functionality**      | Full Admin → Credential → ZK Proof → Midnight Verification → Access Grant flow implemented and demonstrated                                                                                                                             | 🟢 **Completed** |

---

# 📋 Submission Checklist

| Submission Requirement                                  | Nexora Submission                                                                                                    |      Status      |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | :--------------: |
| **Public GitHub repository with updated documentation** | https://github.com/rishiisarkar/Nexora                                                                               | 🟢 **Completed** |
| **Live demo link**                                      | https://nexora-app-web3.vercel.app/                                                                                  | 🟢 **Completed** |
| **Midnight Preprod contract address**                   | `0xf36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e`                                                 | 🟢 **Completed** |
| **Verifiable Preprod deployment**                       | https://preprod.midnightexplorer.com/contracts/85c6d5ce4fec74c33a17d4307290bf7d05878637b9f2e70bead1d90bdf5353cc      | 🟢 **Completed** |
| **70 Preprod user wallet addresses**                    | 70+ Midnight Preprod tester wallets with verifiable on-chain activity                                                | 🟢 **Completed** |
| **Feedback documentation / feedback link**              | Feedback Form: https://forms.gle/ShbFDAme1TiP7FRYA                                                                   | 🟢 **Completed** |
| **Feedback response data**                              | Google Sheets: https://docs.google.com/spreadsheets/d/15vLOWZlfbG9BFbDRfPmD1uYHZlk1dcgLbbNT8eNDcPQ/edit?usp=sharing  | 🟢 **Completed** |
| **Documented feedback loop**                            | Tester feedback → issue identification → UX / functionality improvements → iteration                                 | 🟢 **Completed** |
| **Updated project documentation**                       | README, architecture, privacy model, setup, wallet flow, ZK verification, Preprod deployment and usage documentation | 🟢 **Completed** |
| **Demo video showing full MVP functionality**           | https://drive.google.com/file/d/1cAb_dis5CkSjRz4XW3x5RSnGYpUv2BDh/view?usp=sharing                                   | 🟢 **Completed** |
| **Official product X account**                          | https://x.com/NexoraWeb3x/                                                                                           | 🟢 **Completed** |
| **Minimum 30 meaningful commits**                       | Continuous development and iteration documented in the public GitHub repository                                      | 🟢 **Completed** |
| **CI/CD pipeline**                                      | Automated CI/CD workflow configured with passing runs                                                                | 🟢 **Completed** |
| **End-to-end ZK verification**                          | Client-side proof generation → Merkle membership verification → nullifier validation → access granted                | 🟢 **Completed** |
| **Replay protection**                                   | Unique nullifier generated and tracked to prevent reuse of previously verified credentials                           | 🟢 **Completed** |
| **Privacy-preserving credential verification**          | Raw credential, Merkle path, and private witness values remain outside public contract state                         | 🟢 **Completed** |
| **Multi-wallet support**                                | Lace and 1AM wallet connection supported for Nexora member verification                                              | 🟢 **Completed** |
| **Preprod explorer verification**                       | Contract deployment and transactions can be independently inspected through Midnight Preprod Explorer                | 🟢 **Completed** |

## 🎯 Level 6 Completion Status

| Level       |            Status           |
| ----------- | :-------------------------: |
| **Level 1** |       🟢 **Completed**      |
| **Level 2** |       🟢 **Completed**      |
| **Level 3** |       🟢 **Completed**      |
| **Level 4** |       🟢 **Completed**      |
| **Level 5** |       🟢 **Completed**      |
| **Level 6** | 🟢 **Completed** |

### 1. Automated Test Suite Passing

<img width="486" height="169" alt="Screenshot 2026-07-22 123954" src="https://github.com/user-attachments/assets/b71b9cdb-8fc5-46d3-9a80-b390b3c44db1" />

### 2. Deployed on Prepod Network
<img width="1795" height="926" alt="Screenshot 2026-09-25 215511" src="https://github.com/user-attachments/assets/1c526db3-5981-48ee-a7c2-c7d975d7b916" />




### 3. CI & CD Running 
<img width="1915" height="658" alt="Screenshot 2026-08-19 223155" src="https://github.com/user-attachments/assets/235632aa-710e-4ac8-9b63-af10c8cc1901" />


---



## 💡 What This Does

Nexora is a privacy-preserving access gateway where:

1. **Admins** deploy an access gate on the Midnight Preprod network and enroll authorized members by hashing their credentials into a Merkle Tree.
2. **Members** connect their wallet (Lace or 1AM) and paste their secret credential locally in the browser.
3. A Zero-Knowledge proof is generated client-side, proving the credential's hash is a valid leaf in the enrolled Merkle Tree **and** that its nullifier has never been used before.
4. Only the **proof**, the **Merkle root check result**, and the **nullifier** are recorded on-chain — the raw credential, wallet identity, and Merkle path are **never transmitted or stored anywhere**.
5. Once verified, the member's session vault unlocks — access granted, identity still unknown.

---

## 🔒 Privacy Model

### What is PUBLIC (On-Chain — Visible to Everyone)

- Merkle root of enrolled credential hashes
- Set of spent nullifiers
- Admin address
- Whether a given access gate is active

### What is PRIVATE (Off-Chain — Never Leaves Your Browser)

- 🔒 Your raw secret credential
- 🔒 Your Merkle inclusion path
- 🔒 Your wallet identity linkage to the credential
- 🔒 All witness input values

### What the User PROVES Without Revealing

- ✅ That their credential hash is a valid leaf in the Merkle Tree (membership)
- ✅ That their nullifier has not been used before (no replay)
- ✅ That the proof was authorized by a connected wallet
- ❌ The actual secret credential is **never disclosed**
- ❌ Which specific leaf/identity in the tree they correspond to is **never disclosed**

---

## 🛡️ Privacy Claim

> **An on-chain observer can see** that a valid membership proof was submitted, a nullifier was inserted into the spent set, and the Merkle root remains unchanged. **An on-chain observer CANNOT see** which credential produced the proof, the member's wallet-to-credential linkage, or any private witness inputs. The ZK circuit mathematically proves Merkle membership and nullifier uniqueness without passing the raw secret through `disclose()`. The private witness callbacks execute exclusively on the client machine, and their return values never enter the public ledger state.

This is verified by the automated test suite, which confirms that private witness values do not appear in the serialized public contract state after circuit execution.

---

## ✨ Key Features

- 🔐 **Zero-Knowledge Authentication** — Authenticate without revealing the original credential.
- 🌳 **Merkle Tree Allowlist** — Authorized members are represented as hashed leaves; only hashes are ever stored.
- ♻️ **Nullifier Protection** — Each successful proof generates a unique nullifier; spent nullifiers are permanently rejected, preventing replay attacks.
- 👤 **Admin Console** — Deploy new access gates, enroll credential hashes, generate member credentials, share access links, and restore published gates.
- 🔑 **Secure Member Access** — Connect wallet → paste secret → generate proof → unlock access. No sensitive data ever leaves the browser.
- 🔌 **Multi-Wallet Support** — Connect and disconnect cleanly with Lace or 1AM wallet extensions.
- 🔍 **Frontend Circuit Execution** — Call `verify_access()` directly from the browser with real-time proof generation feedback.
- 🏷️ **Privacy Label** — "Proved without revealing your input" displayed after every successful circuit call.
- 📊 **Explorer Integration** — Automatic explorer links for every transaction and contract deployment.

---

## 🚨 Problem Statement

Current token-gated and allowlist-based platforms require users to expose sensitive information simply to prove they belong:

- Wallet-based allowlists reveal wallet addresses and transaction history
- Token-gated communities expose NFT holdings and token balances
- Private events and DAO memberships leak participation history
- Beta testing platforms tie access directly to identifiable wallets

This creates unnecessary privacy risk for a problem that should require zero disclosure.

---

## 💡 Solution

Nexora introduces a Zero-Knowledge access gateway. Instead of exposing a credential to prove access, the flow is:

```
Secret Credential
       ↓
Generate ZK Proof (Merkle membership + nullifier)
       ↓
Blockchain Verification
       ↓
Access Granted
```

Only proof validity reaches the blockchain. Secrets remain private forever.

---

## ⚙️ How It Works

```text
                 Admin

          Deploy Access Gate
                  │
                  ▼
        Create Credential Secret
                  │
                  ▼
      Hash Secret → Merkle Tree
                  │
──────────────────────────────────────────

                Member

        Receive Secret Securely
                  │
                  ▼
          Connect Wallet
                  │
                  ▼
        Generate ZK Proof
                  │
                  ▼
      Midnight Smart Contract
                  │
                  ▼
      Verify Merkle Membership
                  │
                  ▼
      Check Nullifier Replay
                  │
                  ▼
         Unlock Session Vault
```

---

## 🏗 Architecture

```text
                  ┌────────────────────┐
                  │     Admin Panel    │
                  └─────────┬──────────┘
                            │
                            ▼
               Midnight Compact Contract
                            │
             ┌──────────────┴─────────────┐
             │                            │
             ▼                            ▼
      Merkle Tree                 Nullifier Set
             │                            │
             └──────────────┬─────────────┘
                            ▼
                     ZK Verification
                            │
                            ▼
                    Session Unlock
                            │
                            ▼
                     Protected Vault
```

---

## 🔒 Security & Architecture: Public State vs. Private Witness

```text
[ Member's Local Proving Engine ]                   [ Midnight Preprod Blockchain Ledger ]
┌──────────────────────────────────────┐           ┌──────────────────────────────────────────────┐
│ Private Witness Inputs (Off-Chain):  │           │ Public Ledger State (Visible to All):        │
│ • Raw Secret Credential               │  ──(ZK)─► │ • Merkle Root of Enrolled Credentials        │
│ • Merkle Inclusion Path               │  Proof    │ • Spent Nullifier Set                        │
│ • Wallet Signing Key                  │           │ • Admin Address / Gate Status                │
└──────────────────────────────────────┘           └──────────────────────────────────────────────┘
```

- **Public Ledger State (`export ledger`)**: Stores the Merkle root and spent nullifiers. Everyone can inspect these fields.
- **Private Witness Callbacks (`witness`)**: Declares local functions that run _exclusively on the member's client machine_.
- **Deliberate Selective Disclosure**: The `verify_access()` circuit asserts Merkle membership and nullifier uniqueness. Upon success, it inserts the nullifier into the spent set. **No credential or identity is ever passed to `disclose()`**, proving valid membership while preserving 100% credential secrecy.

---

## 🛠 Tech Stack

| Layer                  | Technology                              | Description                                                                                                   |
| :--------------------- | :-------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **Smart Contract**     | Compact Language (`v0.22.0+`)           | Native ZK domain-specific language for public/private state transitions                                       |
| **Compiler**           | Midnight Compact CLI (`v0.30.0`)        | Compiles `.compact` code into ZKIR circuits and TypeScript wrappers                                           |
| **Runtime SDK**        | `@midnight-ntwrk/compact-runtime`       | TypeScript execution environment for contract simulation and proofs                                           |
| **Frontend**           | Next.js 15 (App Router) + TypeScript    | Modern SPA/SSR hybrid with component-based architecture                                                       |
| **Styling**            | Tailwind CSS                            | Dark, modern, responsive interface                                                                            |
| **Wallet Integration** | `@midnight-ntwrk/dapp-connector-api`    | DApp Connector API for Lace and 1AM wallet extensions                                                         |
| **Contract SDK**       | `@midnight-ntwrk/midnight-js-contracts` | Contract deployment, discovery, and circuit call execution                                                    |
| **Testing**            | Jest / TypeScript                       | Automated unit tests for admin permissions, allowlist behavior, Merkle logic, and nullifier replay prevention |
| **Target Network**     | Midnight Preprod                        | Live staging network for privacy-preserving dApps                                                             |
| **Package Manager**    | npm Workspaces                          | Monorepo dependency management                                                                                |
| **CI/CD**              | GitHub Actions                          | Compile + test on every push                                                                                  |
| **Deployment**         | Vercel                                  | Static/SSR hosting for the frontend application                                                               |

---

## 📋 Prerequisites

- **Lace Wallet** (Midnight Beta) or **1AM Wallet** browser extension installed and set to the **Preprod** network
- **Node.js** v20+ (Node 22 LTS recommended)
- **Docker Desktop** running with the Midnight Proof Server container (for local ZK proof generation)
- **WSL 2 (Ubuntu)** or Linux/macOS (for the Compact compiler)
- Preprod network DUST balance in your wallet

---

## 🚀 Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Rimanshu-Singh/Nexora.git
cd Nexora
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Compile the Compact Smart Contract (WSL/Linux)

```bash
npm run compile
```

### 4. Run the Automated Test Suite

```bash
npm test
```

### 5. Start the Proof Server (Docker)

```bash
docker start proof-server
```

### 6. Start the Frontend Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 7. Connect Wallet & Call Circuit

1. Open `http://localhost:3000` → click **Launch App**
2. Click **Connect Wallet** → select **Lace** or **1AM** → approve in extension
3. Navigate to the **Member Access** page
4. Paste your secret credential and click **Generate Proof — Verify Access**
5. Wait for ZK proof generation (30–60 seconds)
6. See "Proved without revealing your input" confirmation and unlock the vault

---

---

## 📁 Project Structure

```text
Nexora/
├── contracts/
│   ├── src/
│   │   └── vault_pass.compact       ← ZK smart contract
│   ├── tests/
│   └── compiler/
├── app/
│   ├── src/
│   ├── components/
│   │   ├── WalletConnect.tsx        ← wallet connect/disconnect UI
│   │   └── CircuitCall.tsx          ← circuit call button + result display
│   ├── lib/
│   │   └── useMidnight.ts           ← Midnight.js SDK hook
│   └── pages/
│
├── contracts/
│   ├── src/
│   │     Nexora.compact
│   ├── tests/
│   └── compiler/
│
├── public/
├── .github/
│   └── workflows/
│       └── ci.yml                   ← CI/CD pipeline
├── package.json
└── README.md
```

---


## 🧪 Testing

Run tests:

```bash
npm test
```

The test suite validates:

- Admin permissions
- Allowlist enrollment behavior
- Merkle membership verification logic
- Nullifier replay prevention

> Testing uses mocked in-memory structures for fast iteration; end-to-end proof generation is verified separately via the browser proof server.

### Test Output

<img width="486" height="169" alt="Screenshot 2026-07-22 123954" src="https://github.com/user-attachments/assets/1956bef9-193a-4d3b-b7a1-ec9f3aebe2ca" />

---

## ⚙️ CI/CD

A GitHub Actions workflow compiles the Compact contract and runs the full test suite on every push and pull request.

```
.github/workflows/ci.yml
```

<img width="1915" height="658" alt="Screenshot 2026-08-19 223155" src="https://github.com/user-attachments/assets/235632aa-710e-4ac8-9b63-af10c8cc1901" />

```md
[![CI/CD Pipeline Status](https://github.com/rishiisarkar/Nexora/actions/runs/32278800387)](https://github.com/rishiisarkar/Nexora/actions/workflows/ci.yml)
```

---

## 🚀 Deployment

### Frontend

Deploy directly to Vercel:

```bash
npm run build
```

Import the repository into Vercel. No production environment variables are required.

### Smart Contract

Contracts are deployed through the built-in Admin Dashboard. Each deployment creates a unique contract address on Midnight Preprod. Preprod deployment is pending until you connect a funded Preprod wallet and deploy from /admin.

---

## 🛡️ Security Model

Nexora never stores:

- Raw credentials
- Identity information
- Wallet history
- Private keys

Only the following exist on-chain:

- Credential hashes (as Merkle leaves)
- The Merkle root
- Spent nullifiers

Replay attacks are prevented using cryptographic nullifiers — every proof is single-use and cannot be replayed.

---


## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit changes
   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## 🙏 Acknowledgments

- **Midnight Foundation & IOG** for building the ground-breaking privacy-first blockchain architecture.
- **RiseIn** for hosting the _New Moon to Full_ builder program.
- **Lace Wallet** and **1AM Wallet** for providing Midnight-compatible wallet extensions and enabling seamless browser testing.

---

## 📄 License

This project is licensed under the **MIT License**.

---
