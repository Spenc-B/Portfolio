/* ============================================
   COMPLEX COMPONENT #1: ROTATING CUBE
   
   EXPLANATION FOR ADVANCED LEARNERS:
   - This uses React Three Fiber (3D library)
   - @react-three/fiber allows Three.js in React
   - useRef and useFrame are React Three Fiber hooks
   - This demonstrates real-time 3D animation
   ============================================ */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const MODEL_URL = '/models/web_dev_desk.glb';

function DeskModel({ active, hovered }) {
  const { scene } = useGLTF(MODEL_URL);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.transparent = false;
          child.material.needsUpdate = true;

          if ('emissiveIntensity' in child.material) {
            child.material.emissiveIntensity = active ? 0.2 : hovered ? 0.12 : 0.05;
          }
        }
      }
    });
  }, [active, hovered, clonedScene]);

  return <primitive object={clonedScene} scale={1.45} position={[0, 0.1, 0]} />;
}

// Displays a licensed GLB figure model when present, and falls back to a placeholder.
function RotatingCube({ interactionEnabled = true }) {
  const objectRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const [modelExists, setModelExists] = useState(false);
  const { viewport } = useThree();

  const responsiveScale = viewport.width < 4.5 ? 0.8 : viewport.width < 7 ? 0.95 : 1.05;

  useEffect(() => {
    let mounted = true;

    fetch(MODEL_URL, { method: 'HEAD' })
      .then((response) => {
        if (mounted) {
          setModelExists(response.ok);
        }
      })
      .catch(() => {
        if (mounted) {
          setModelExists(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  // This hook runs every frame (60 times per second)
  useFrame((state) => {
    if (objectRef.current) {
      objectRef.current.rotation.y = 0.610865 + Math.sin(state.clock.elapsedTime * 0.7) * 0.4363;
      objectRef.current.rotation.x = 0;
      objectRef.current.rotation.z = 0;

      // The whole object gently floats for a showcase effect.
      objectRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.05) * 0.08;

      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.012;
      const baseScale = active ? 1.12 : 1;
      objectRef.current.scale.setScalar(baseScale * pulse * responsiveScale);
    }
  });

  return (
    <group
      ref={objectRef}
      rotation={[0, 0.610865, 0]}
      onPointerOver={() => interactionEnabled && setHovered(true)}
      onPointerOut={() => interactionEnabled && setHovered(false)}
      onClick={() => interactionEnabled && setActive((prev) => !prev)}
    >
      {modelExists ? (
        <DeskModel active={active} hovered={hovered} />
      ) : (
        <mesh position={[0, 1.2, 0]}>
          <capsuleGeometry args={[0.55, 1.7, 10, 18]} />
          <meshStandardMaterial
            color={active ? '#f59e0b' : hovered ? '#7dd3fc' : '#8b9dcf'}
            emissive={active ? '#7c2d12' : '#111827'}
            emissiveIntensity={active ? 0.25 : 0.12}
            metalness={0.4}
            roughness={0.45}
          />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload(MODEL_URL);

export default RotatingCube;
