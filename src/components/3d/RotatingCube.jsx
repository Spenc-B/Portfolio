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

  return <primitive object={clonedScene} scale={1.36} position={[0, -0.16, 0]} />;
}

// Displays only the GLB desk model for a consistent portfolio showcase.
function RotatingCube({ interactionEnabled = true }) {
  const objectRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const { viewport } = useThree();

  const responsiveScale = viewport.width < 4.5 ? 0.78 : viewport.width < 7 ? 0.92 : 1.02;

  // This hook runs every frame (60 times per second)
  useFrame((state) => {
    if (objectRef.current) {
      objectRef.current.rotation.y = 0.610865 + Math.sin(state.clock.elapsedTime * 0.7) * 0.4363;
      objectRef.current.rotation.x = 0;
      objectRef.current.rotation.z = 0;

      // The whole object gently floats for a showcase effect.
      objectRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.05) * 0.08;

      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.012;
      const baseScale = active ? 1.08 : 1;
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
      <DeskModel active={active} hovered={hovered} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);

export default RotatingCube;
