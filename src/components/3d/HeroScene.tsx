'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import PackagingBox from './PackagingBox';
import PaperBag from './PaperBag';
import CupSleeve from './CupSleeve';
import StickerRoll from './StickerRoll';
import FoodBox from './FoodBox';
import CutlerySleeve from './CutlerySleeve';
import FloatingObject from './FloatingObject';

function SceneContent() {
  return (
    <>
      {/* Studio Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 4, 2]} intensity={0.3} />
      <pointLight position={[0, 3, -5]} intensity={0.2} />

      {/* Environment for subtle reflections */}
      <Environment preset="studio" />

      {/* Floating packaging objects */}
      <FloatingObject speed={0.8} amplitude={0.12} delay={0}>
        <PackagingBox material="kraft" scale={0.9} />
      </FloatingObject>

      <FloatingObject speed={0.6} amplitude={0.15} delay={1.5}>
        <group position={[2.8, 0, 0.5]}>
          <PaperBag material="kraft" scale={0.8} />
        </group>
      </FloatingObject>

      <FloatingObject speed={0.7} amplitude={0.1} delay={0.8}>
        <group position={[-2.8, 0.5, -0.5]}>
          <CupSleeve material="kraft" scale={1} />
        </group>
      </FloatingObject>

      <FloatingObject speed={0.5} amplitude={0.18} delay={2.2}>
        <group position={[0.5, 1.2, -1.5]}>
          <StickerRoll material="whiteCardboard" scale={0.7} />
        </group>
      </FloatingObject>

      <FloatingObject speed={0.9} amplitude={0.13} delay={3}>
        <group position={[-1.5, -0.8, 1]}>
          <FoodBox material="foodSafe" scale={0.8} />
        </group>
      </FloatingObject>

      <FloatingObject speed={0.65} amplitude={0.14} delay={1}>
        <group position={[1.8, -0.5, -1]}>
          <CutlerySleeve material="kraft" scale={0.9} />
        </group>
      </FloatingObject>

      {/* Contact shadows for grounding */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.3}
        scale={12}
        blur={2.5}
        far={4}
      />

      {/* Camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[400px]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-kraft/30 border-t-kraft rounded-full animate-spin" />
        <p className="text-sm text-muted-text">Loading 3D scene...</p>
      </div>
    </div>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px]">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  );
}
