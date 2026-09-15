import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#FF9900"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.5}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

export function Hero3DObject() {
  return (
    <div className="w-full h-80 lg:h-96 relative z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full pointer-events-auto">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#FF9900" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#38BDF8" />
        
        <AnimatedBlob />
        
        {/* Environment for reflections */}
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
}
