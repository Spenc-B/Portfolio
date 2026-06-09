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
    <section id="3d-scene" className="interactive-scene-section">
      <div className="scene-shell">
        <div className="scene-header">
          <p className="scene-eyebrow">Featured Build</p>
          <h2>Interactive 3D Workspace</h2>
          <p>
            This section highlights the web developer desk model as a live 3D
            product showcase. It starts in cinematic auto-rotate mode, then
            switches to full exploration when interaction is enabled.
          </p>

          <div className="scene-actions">
            <span className="scene-status">
              {interactionEnabled ? 'Interaction On' : 'Auto-Rotate Preview'}
            </span>
            <button
              className="scene-toggle-btn"
              type="button"
              onClick={() => setInteractionEnabled((prev) => !prev)}
            >
              {interactionEnabled ? 'Return to Preview' : 'Enable Interaction'}
            </button>
          </div>

          <ul className="scene-feature-list">
            <li>Single dedicated GLB model: web_dev_desk.glb</li>
            <li>Smooth idle motion with subtle depth lighting</li>
            <li>Interactive orbit, zoom, and pan on demand</li>
          </ul>
        </div>

        <div className="three-scene-container">
          <Canvas
            shadows
            dpr={[1, 1.5]}
            style={{ width: '100%', height: '100%' }}
            camera={{ position: [0, 0, 5.2], rotation: [0, 0, 5.2], fov: 60 }}
          >
            <color attach="background" args={['#020617']} />
            <fog attach="fog" args={['#030712', 7, 15]} />

            {/* Camera setup */}
            <PerspectiveCamera makeDefault position={[0, 2, 4.2]} rotation={[-0.32, -4, -4]} />

            {/* Lighting for the scene */}
            <SceneLights />

            {/* Web developer desk GLB model */}
            <RotatingCube interactionEnabled={interactionEnabled} />

            <group position={[0, -.25, 0]}>
              <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <circleGeometry args={[3.2, 72]} />
                <meshStandardMaterial
                  color="#6b1f2d"
                  roughness={0.96}
                  metalness={0.02}
                />
              </mesh>
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
                <ringGeometry args={[2.32, 2.7, 72]} />
                <meshStandardMaterial
                  color="#c0841a"
                  roughness={0.9}
                  metalness={0.04}
                />
              </mesh>
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.008, 0]}>
                <circleGeometry args={[1.24, 72]} />
                <meshStandardMaterial
                  color="#7f1d1d"
                  roughness={0.93}
                  metalness={0.02}
                />
              </mesh>
            </group>

            {/* Orbit controls - allows user to rotate/zoom the scene */}
            <OrbitControls
              enableZoom={interactionEnabled}
              enablePan={interactionEnabled}
              enableRotate={interactionEnabled}
              autoRotate={!interactionEnabled}
              autoRotateSpeed={0.4}
              minDistance={3.3}
              maxDistance={8.2}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default ThreeDScene;
