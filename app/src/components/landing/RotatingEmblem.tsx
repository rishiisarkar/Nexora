"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import emblemData from "./emblemModelData.json";

export default function RotatingEmblem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    // Perspective camera with product-photo focal length (FOV 40°)
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 15.6);
    camera.lookAt(0, 0, 0);

    // High performance WebGL renderer with alpha transparency
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Physical studio environment for realistic metallic reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = pmremGenerator.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = roomEnv.texture;

    // --- Lighting Rig ---
    // Ambient light: Soft warm studio baseline
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2);
    scene.add(ambientLight);

    // Warm Key Light (amber/copper tone matching hero studio glow)
    const keyLight = new THREE.DirectionalLight(0xff9440, 3.2);
    keyLight.position.set(6, 4, 6);
    scene.add(keyLight);

    // Cool subtle fill light
    const fillLight = new THREE.DirectionalLight(0xcfdcff, 1.1);
    fillLight.position.set(-6, 2, 4);
    scene.add(fillLight);

    // Rear warm rim light (glints off beveled edges as the emblem rotates)
    const rimLight1 = new THREE.DirectionalLight(0xffaa50, 2.4);
    rimLight1.position.set(0, 4, -6);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0xff6f22, 1.8);
    rimLight2.position.set(5, -3, -4);
    scene.add(rimLight2);

    // Front specular point light
    const pointLight = new THREE.PointLight(0xff8833, 1.8, 30);
    pointLight.position.set(3, 1, 6);
    scene.add(pointLight);

    // --- Extruded 3D Emblem Geometry ---
    const shape = new THREE.Shape();
    (emblemData.vertices2D as [number, number][]).forEach((pt, i) => {
      if (i === 0) shape.moveTo(pt[0], pt[1]);
      else shape.lineTo(pt[0], pt[1]);
    });
    shape.closePath();

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.55,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    });

    geometry.center();
    geometry.computeVertexNormals();

    // Custom UV Mapping for Front & Back Faces
    const pos = geometry.attributes.position;
    const uv = geometry.attributes.uv;
    const scale = 10;
    const aspect = emblemData.aspect;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      let u = x / (aspect * scale) + 0.5;
      const v = y / scale + 0.5;

      // When viewed from behind, mirror U so the insignia reads correctly on both sides
      if (z < -0.05) {
        u = 1 - u;
      }

      uv.setXY(i, Math.max(0, Math.min(1, u)), Math.max(0, Math.min(1, v)));
    }
    uv.needsUpdate = true;

    // --- Texture & Materials ---
    const textureLoader = new THREE.TextureLoader();
    let mesh: THREE.Mesh | null = null;
    let animId: number;

    textureLoader.load(
      "/stitch/Nexora-emblem-cropped.png",
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.generateMipmaps = true;

        // Front & Back face material
        const faceMaterial = new THREE.MeshPhysicalMaterial({
          map: texture,
          metalness: 0.85,
          roughness: 0.28,
          clearcoat: 0.45,
          clearcoatRoughness: 0.2,
          envMapIntensity: 1.15,
          transparent: true,
          alphaTest: 0.02,
        });

        // Precision-machined titanium/copper alloy side rim
        const sideMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x1b1613,
          metalness: 0.95,
          roughness: 0.36,
          clearcoat: 0.35,
          clearcoatRoughness: 0.25,
          envMapIntensity: 1.25,
        });

        mesh = new THREE.Mesh(geometry, [faceMaterial, sideMaterial]);
        // Perfect horizontal alignment (no tilts)
        mesh.rotation.set(0, 0, 0);
        scene.add(mesh);

        setIsLoaded(true);

        // --- Continuous Smooth 360° Horizontal Rotation Loop ---
        // ~18 seconds per full revolution (smooth, slow, stately)
        const ROTATION_SPEED = 0.35;
        let lastTime = performance.now();

        const animate = (currentTime: number) => {
          const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
          lastTime = currentTime;

          if (mesh) {
            // Constant linear angular velocity around horizontal Y-axis
            mesh.rotation.y = (mesh.rotation.y + delta * ROTATION_SPEED) % (Math.PI * 2);
          }

          renderer.render(scene, camera);
          animId = requestAnimationFrame(animate);
        };

        animId = requestAnimationFrame(animate);
      },
      undefined,
      (err) => {
        console.error("Error loading emblem texture:", err);
      }
    );

    // --- Resize Handling ---
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      // Maintain natural emblem aspect ratio (635 / 688 ≈ 0.923 or hero ratio)
      const height = container.clientHeight || width * (688 / 635);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- Cleanup ---
    return () => {
      if (animId) cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      pmremGenerator.dispose();
      roomEnv.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[635/688] max-h-[580px] flex items-center justify-center select-none"
    >
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain block drop-shadow-[0_30px_60px_rgba(45,22,10,0.34)] transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
