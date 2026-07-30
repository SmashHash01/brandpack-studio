'use client';

import { useMemo } from 'react';
import { Color } from 'three';
import { materials, type MaterialName } from './MaterialPresets';

interface StickerRollProps {
  material?: MaterialName;
  scale?: number;
}

export default function StickerRoll({
  material = 'whiteCardboard',
  scale = 1,
}: StickerRollProps) {
  const mat = materials[material];

  const edgeColor = useMemo(() => {
    const c = new Color(mat.color);
    c.multiplyScalar(0.75);
    return c;
  }, [mat.color]);

  const coreRadius = 0.25;
  const rollRadius = 0.55;
  const rollWidth = 0.5;
  const segments = 32;

  return (
    <group scale={scale} rotation={[0, 0, Math.PI / 2]}>
      {/* Inner cardboard core */}
      <mesh castShadow>
        <cylinderGeometry args={[coreRadius, coreRadius, rollWidth + 0.02, segments]} />
        <meshStandardMaterial color="#A08060" roughness={0.9} metalness={0} />
      </mesh>

      {/* Outer sticker layer */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[rollRadius, rollRadius, rollWidth, segments]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness}
          metalness={mat.metalness}
        />
      </mesh>

      {/* Roll edge rings — top */}
      <mesh position={[0, rollWidth / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[coreRadius, rollRadius, segments]} />
        <meshStandardMaterial
          color={edgeColor}
          roughness={mat.roughness}
          metalness={mat.metalness}
          side={2}
        />
      </mesh>

      {/* Roll edge rings — bottom */}
      <mesh position={[0, -rollWidth / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[coreRadius, rollRadius, segments]} />
        <meshStandardMaterial
          color={edgeColor}
          roughness={mat.roughness}
          metalness={mat.metalness}
          side={2}
        />
      </mesh>

      {/* Peeling sticker — a plane curving away from the roll surface */}
      <group
        position={[0, 0, rollRadius]}
        rotation={[-0.15, 0, 0]}
      >
        {/* Sticker sheet peeling off */}
        <mesh position={[0, 0, 0.25]} rotation={[0.35, 0, 0]} castShadow>
          <planeGeometry args={[rollWidth * 0.85, 0.55]} />
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.3}
            metalness={0.05}
            side={2}
          />
        </mesh>

        {/* Shadow/backing of the peeling sticker */}
        <mesh position={[0, -0.002, 0.25]} rotation={[0.35, 0, 0]}>
          <planeGeometry args={[rollWidth * 0.85, 0.55]} />
          <meshStandardMaterial
            color="#E8E4DF"
            roughness={0.8}
            metalness={0}
            side={2}
          />
        </mesh>

        {/* Small circle sticker design on the peeling sheet */}
        <mesh position={[0, 0.001, 0.3]} rotation={[0.35, 0, 0]}>
          <circleGeometry args={[0.12, 24]} />
          <meshStandardMaterial
            color="#B9824B"
            roughness={0.5}
            metalness={0.02}
          />
        </mesh>
      </group>
    </group>
  );
}
