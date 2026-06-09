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
      <ambientLight intensity={0.5} />
      
      {/* Directional light (like sun) */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
      />
      
      {/* Point light for additional highlights */}
      <pointLight 
        position={[-10, -10, 5]} 
        intensity={0.5}
        color="#764ba2"
      />
    </>
  );
}

export default SceneLights;
