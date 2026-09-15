import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Generates glowing abstract objects floating in space
function FloatingNodes() {
  const group = useRef<THREE.Group>(null);
  
  // Create 15 floating AWS-colored glowing nodes
  const nodes = useMemo(() => {
    const colors = ['#FF9900', '#38BDF8', '#A855F7', '#22C55E', '#EC4899'];
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      color: colors[i % colors.length],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 2 + 1,
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      // Very slow rotation for the entire group
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      
      // Slight mouse parallax
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, (state.pointer.x * state.viewport.width) / 15, 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (state.pointer.y * state.viewport.height) / 15, 0.05);
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <Float key={i} speed={node.speed} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={node.position} scale={node.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial 
              color={node.color} 
              emissive={node.color} 
              emissiveIntensity={0.5} 
              wireframe={Math.random() > 0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: false, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Deep background stars */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Floating tech nodes */}
        <FloatingNodes />
      </Canvas>
    </div>
  );
}
