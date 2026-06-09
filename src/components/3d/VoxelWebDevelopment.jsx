/* ============================================
   VOXEL WEB DEVELOPMENT HERO OBJECT
   ============================================
   - A voxel-style 3D desk setup for the hero background
   - Uses simple box meshes so it feels like a pixel/voxel object
   - Gently floats and rotates behind the hero content
   ============================================ */

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

function VoxelWebDevelopment() {
  const groupRef = useRef();
  const { viewport } = useThree();

  const responsiveScale = viewport.width < 6 ? 0.7 : viewport.width < 9 ? 0.9 : 1.05;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.4363;
      groupRef.current.rotation.x = 0;
      groupRef.current.rotation.z = 0;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.15) * 0.08;
      groupRef.current.scale.setScalar(responsiveScale);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* Desk */}
      <mesh position={[0, -0.9, 0]}>
        <boxGeometry args={[3.6, 0.18, 1.8]} />
        <meshStandardMaterial color="#1e293b" metalness={0.35} roughness={0.4} />
      </mesh>

      {/* Monitor body */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[1.45, 1.05, 0.12]} />
        <meshStandardMaterial color="#0f172a" metalness={0.25} roughness={0.35} />
      </mesh>

      {/* Screen glow */}
      <mesh position={[0, 0.2, 0.08]}>
        <boxGeometry args={[1.22, 0.8, 0.02]} />
        <meshStandardMaterial color="#06b6d4" emissive="#22d3ee" emissiveIntensity={0.45} />
      </mesh>

      {/* Stand */}
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[0.22, 0.65, 0.22]} />
        <meshStandardMaterial color="#334155" metalness={0.35} roughness={0.4} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -0.93, 0]}>
        <boxGeometry args={[1.15, 0.12, 0.45]} />
        <meshStandardMaterial color="#334155" metalness={0.4} roughness={0.38} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.62, 0.62]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[1.6, 0.12, 0.62]} />
        <meshStandardMaterial color="#1f2937" metalness={0.22} roughness={0.45} />
      </mesh>

      {/* Keys as tiny voxels */}
      {Array.from({ length: 10 }).map((_, index) => (
        <mesh key={`key-row-${index}`} position={[-0.65 + index * 0.15, -0.56, 0.74]}>
          <boxGeometry args={[0.08, 0.04, 0.08]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#38bdf8' : '#f59e0b'} />
        </mesh>
      ))}

      {/* Code blocks floating around */}
      <mesh position={[-1.35, 0.75, 0.15]} rotation={[0.15, 0.2, -0.1]}>
        <boxGeometry args={[0.34, 0.34, 0.34]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f97316" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[1.2, 0.55, -0.15]} rotation={[0.2, -0.1, 0.15]}>
        <boxGeometry args={[0.28, 0.28, 0.28]} />
        <meshStandardMaterial color="#38bdf8" emissive="#06b6d4" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[1.5, -0.05, 0.35]} rotation={[-0.1, 0.2, 0.1]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#e2e8f0" emissive="#cbd5e1" emissiveIntensity={0.18} />
      </mesh>
    </group>
  );
}

export default VoxelWebDevelopment;
