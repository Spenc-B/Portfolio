/* ============================================
   COMPLEX COMPONENT #2: 3D LIGHTING
   
   EXPLANATION FOR ADVANCED LEARNERS:
   - Lighting is crucial for 3D graphics
   - Multiple light types create realistic scenes
   - AmbientLight: general illumination
   - DirectionalLight: like sunlight
   - PointLight: like a light bulb
   ============================================ */

import React from 'react';

function SceneLights() {
  return (
    <>
      {/* Ambient light provides overall lighting */}
      <ambientLight intensity={0.4} />

      {/* Hemisphere light gives global sky/ground color balance */}
      <hemisphereLight
        intensity={0.42}
        color="#dbeafe"
        groundColor="#1e293b"
      />

      {/* Key light from upper front-right for shape definition */}
      <directionalLight
        position={[6, 9, 7]}
        intensity={1.08}
        color="#e2e8f0"
        castShadow
      />

      {/* Cool rim light adds edge separation */}
      <pointLight
        position={[-5, 1.5, -3]}
        intensity={0.72}
        color="#0ea5e9"
      />

      {/* Warm accent creates depth contrast */}
      <pointLight
        position={[3, -2.5, 2]}
        intensity={0.5}
        color="#f59e0b"
      />

      {/* Back fill reduces harsh shadows and adds global depth */}
      <pointLight
        position={[0, 4, -8]}
        intensity={0.36}
        color="#93c5fd"
      />
    </>
  );
}

export default SceneLights;
