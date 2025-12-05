"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
} from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import { vertexShader, fragmentShader } from "./Shaders";

// --- Configuration ---
const config = {
  lerpFactor: 0.035,
  parallaxStrength: 0.1,
  distortionMultiplier: 10,
  glassStrength: 2.0,
  glassSmoothness: 0.0001,
  stripesFrequency: 35.0,
  edgePadding: 0.1,
};

// --- Define Material ---
const FractalGlassMaterial = shaderMaterial(
  {
    uTexture: new THREE.Texture(),
    uResolution: new THREE.Vector2(0, 0),
    uTextureSize: new THREE.Vector2(0, 0),
    uMouse: new THREE.Vector2(0.5, 0.5),
    uParallaxStrength: config.parallaxStrength,
    uDistortionMultiplier: config.distortionMultiplier,
    uGlassStrength: config.glassStrength,
    uStripesFrequency: config.stripesFrequency,
    uGlassSmoothness: config.glassSmoothness,
    uEdgePadding: config.edgePadding,
  },
  vertexShader,
  fragmentShader
);

extend({ FractalGlassMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    fractalGlassMaterial: {
      ref?: React.Ref<THREE.ShaderMaterial>;
      uTexture?: THREE.Texture;
      uResolution?: THREE.Vector2;
      uTextureSize?: THREE.Vector2;
      uMouse?: THREE.Vector2;
      transparent?: boolean;
    };
  }
}

interface SceneProps {
  imageSrc: string;
}

const Scene: React.FC<SceneProps> = ({ imageSrc }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const texture = useTexture(imageSrc);
  // Get viewport dimensions from R3F hook to handle resize automatically
  const { viewport } = useThree();

  const textureSize = useMemo(() => {
    if (!texture.image) return new THREE.Vector2(0, 0);
    return new THREE.Vector2((texture.image as HTMLImageElement).width, (texture.image as HTMLImageElement).height);
  }, [texture]);

  useFrame(({ mouse, size }) => {
    if (materialRef.current) {
      // 1. Update Resolution
      materialRef.current.uniforms.uResolution.value.set(
        size.width,
        size.height
      );

      // 2. Update Texture Size
      materialRef.current.uniforms.uTextureSize.value.copy(textureSize);

      // 3. Smooth Mouse
      const targetX = (mouse.x + 1) / 2;
      const targetY = (mouse.y + 1) / 2;
      const currentMouse = materialRef.current.uniforms.uMouse.value;

      currentMouse.x += (targetX - currentMouse.x) * config.lerpFactor;
      currentMouse.y += (targetY - currentMouse.y) * config.lerpFactor;
    }
  });

  return (
    // Scale mesh to viewport width/height.
    // This works perfectly with Orthographic camera to fill screen.
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <fractalGlassMaterial
        ref={materialRef}
        uTexture={texture}
        transparent={true}
      />
    </mesh>
  );
};

export default function FractalGlassCanvas({ src }: { src: string }) {
  return (
    <div className="w-full h-full block">
      <Canvas
        className="block"
        style={{ width: "100%", height: "100%" }}
        // Orthographic MUST be enabled for 2D fullscreen effects
        orthographic
        camera={{ zoom: 1, position: [0, 0, 1] }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene imageSrc={src} />
      </Canvas>
    </div>
  );
}
