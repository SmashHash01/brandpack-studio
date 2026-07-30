'use client';

import { Suspense, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { materials, type MaterialName } from './MaterialPresets';
import PackagingBox from './PackagingBox';
import PaperBag from './PaperBag';
import CupSleeve from './CupSleeve';
import StickerRoll from './StickerRoll';
import FoodBox from './FoodBox';
import CutlerySleeve from './CutlerySleeve';
import { Group } from 'three';

interface ProductViewerProps {
  category: string;
  material: MaterialName;
  customColor: string;
  showDieline: boolean;
  showDimensions: boolean;
  uploadedLogo: string | null;
}

function ProductModel({ category, material, customColor, showDieline, showDimensions, uploadedLogo }: ProductViewerProps) {
  const groupRef = useRef<Group>(null);

  // Slow automatic rotation when not interacted with
  useFrame(({ clock }) => {
    if (groupRef.current && !showDieline) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  // Base materials preset overrides with user custom color
  const customizedMat = useMemo(() => {
    const base = materials[material as keyof typeof materials] || materials.kraft;
    return {
      ...base,
      color: customColor || base.color
    };
  }, [material, customColor]);

  // Dimension helpers
  const dimensions = useMemo(() => {
    switch (category) {
      case 'boxes':
        return { length: 2.2, width: 2.2, height: 1.2 };
      case 'bags':
        return { length: 1.8, width: 1.0, height: 2.4 };
      case 'food-packaging':
        return { length: 1.6, width: 1.6, height: 1.0 };
      case 'cutlery-sleeves':
        return { length: 0.8, width: 2.4, height: 0.1 };
      case 'labels-stickers':
        return { length: 1.5, width: 1.5, height: 0.05 };
      default:
        return { length: 2.0, width: 2.0, height: 2.0 };
    }
  }, [category]);

  const edgeColor = '#1D1D1F';

  return (
    <group ref={groupRef}>
      {/* 3D Geometries matching product categories */}
      {category === 'boxes' && (
        <PackagingBox material={material} scale={1.2} />
      )}
      {category === 'bags' && (
        <PaperBag material={material} scale={1.2} />
      )}
      {category === 'food-packaging' && (
        <FoodBox material={material} scale={1.3} />
      )}
      {category === 'cutlery-sleeves' && (
        <CutlerySleeve material={material} scale={1.3} />
      )}
      {category === 'labels-stickers' && (
        <StickerRoll material={material} scale={1.3} />
      )}

      {/* Basic Cup Sleeve placeholder for unmapped categories */}
      {category !== 'boxes' && category !== 'bags' && category !== 'food-packaging' && category !== 'cutlery-sleeves' && category !== 'labels-stickers' && (
        <CupSleeve material={material} scale={1.2} />
      )}

      {/* Simulated Uploaded Logo preview projection overlay */}
      {uploadedLogo && (
        <mesh position={[0, 0, dimensions.width / 2 + 0.015]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      )}

      {/* Simulated Dieline overlay borders */}
      {showDieline && (
        <group position={[0, 0, 0]}>
          <mesh>
            <boxGeometry args={[dimensions.length + 0.05, dimensions.height + 0.05, dimensions.width + 0.05]} />
            <meshBasicMaterial color="#DC2626" wireframe />
          </mesh>
        </group>
      )}

      {/* Simulated Dimension measurements lines */}
      {showDimensions && (
        <group position={[0, -dimensions.height / 2 - 0.3, 0]}>
          {/* Base Platform marker representation */}
          <mesh>
            <boxGeometry args={[dimensions.length, 0.02, 0.1]} />
            <meshBasicMaterial color="#1F6B4E" />
          </mesh>
        </group>
      )}
    </group>
  );
}

export default function ProductViewer({
  category,
  material,
  customColor,
  showDieline,
  showDimensions,
  uploadedLogo
}: ProductViewerProps) {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-gradient-to-b from-white to-soft-gray rounded-3xl border border-border-gray relative overflow-hidden">
      {/* Studio Info / HUD indicator status bar */}
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm border border-border-gray/50 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal">
        Studio 3D Active
      </div>

      <Suspense fallback={
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-10 h-10 border-3 border-kraft/30 border-t-kraft rounded-full animate-spin" />
        </div>
      }>
        <Canvas camera={{ position: [0, 1.5, 5], fov: 40 }} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 4]} intensity={0.8} />
          <directionalLight position={[-4, 2, -2]} intensity={0.3} />
          <Environment preset="studio" />

          <ProductModel
            category={category}
            material={material}
            customColor={customColor}
            showDieline={showDieline}
            showDimensions={showDimensions}
            uploadedLogo={uploadedLogo}
          />

          <OrbitControls enableZoom={true} enablePan={false} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2.2} />
        </Canvas>
      </Suspense>

      {/* Floating hints HUD */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm border border-border-gray/60 px-4 py-1.5 rounded-full text-[10px] font-medium text-muted-text shadow-sm pointer-events-none">
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}
