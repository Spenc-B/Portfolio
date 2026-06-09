/* ============================================
   COMPLEX COMPONENT #3: 3D SCENE CANVAS
   
   EXPLANATION FOR ADVANCED LEARNERS:
   - Canvas is where all 3D rendering happens
   - Canvas component from react-three-fiber
   - It creates a WebGL context for 3D graphics
   - camera, controls, and background are configured here
   ============================================ */

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import RotatingCube from './RotatingCube';
import SceneLights from './SceneLights';

function ThreeDScene() {
  const [interactionEnabled, setInteractionEnabled] = useState(false);

  return (
    <section id="3d-scene">
      <h2 style={{ 
        textAlign: 'center', 
        marginTop: '4rem', 
        marginBottom: '2rem',
        color: '#333'
      }}>
        Interactive 3D Scene
      </h2>
      
      <div className="three-scene-container">
        <button
          className="scene-toggle-btn"
          type="button"
          onClick={() => setInteractionEnabled((prev) => !prev)}
        >
          {interactionEnabled ? 'Disable Interaction' : 'Enable Interaction'}
        </button>

        <Canvas
          style={{ 
            width: '100%', 
            height: '100%',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          }}
          camera={{ position: [0, 0, 5], fov: 75 }}
        >
          {/* Camera setup */}
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          
          {/* Lighting for the scene */}
          <SceneLights />
          
          {/* Our 3D object */}
          <RotatingCube interactionEnabled={interactionEnabled} />
          
          {/* Orbit controls - allows user to rotate/zoom the scene */}
          <OrbitControls 
            enableZoom={interactionEnabled}
            enablePan={interactionEnabled}
            enableRotate={interactionEnabled}
            autoRotate={!interactionEnabled}
            autoRotateSpeed={0.8}
          />
        </Canvas>
      </div>

      <div style={{ 
        textAlign: 'center', 
        padding: '2rem',
        background: '#e2e8f0',
        margin: '2rem 0'
      }}>
        <p style={{ fontSize: '1.1rem', color: '#475569' }}>
          💡 <strong>Figure showcase mode:</strong> Interaction starts off so the model slowly auto-rotates by default. Enable interaction when you want to drag, zoom, and click the figure. To use your model, place it at <code>public/models/web_dev_desk.glb</code>.
        </p>
      </div>
    </section>
  );
}

export default ThreeDScene;
