'use client';

import { useMemo } from 'react';
import { Edges } from '@react-three/drei';
import { Color } from 'three';
import { materials, type MaterialName } from './MaterialPresets';

interface PackagingBoxProps {
  material?: MaterialName;
  scale?: number;
  width?: number;
  height?: number;
  depth?: number;
}

export default function PackagingBox({
  material = 'kraft',
  scale = 1,
  width = 2,
  height = 1.4,
  depth = 1.2,
}: PackagingBoxProps) {
  const mat = materials[material];

  const edgeColor = useMemo(() => {
    const c = new Color(mat.color);
    c.multiplyScalar(0.7);
    return c;
  }, [mat.color]);

  const lidLineY = height / 2 - 0.04;

  return (
    <group scale={scale}>
      {/* Main box body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness}
          metalness={mat.metalness}
        />
        <Edges
          threshold={15}
          scale={1}
          color={edgeColor}
          lineWidth={0.6}
        />
      </mesh>

      {/* Lid seam line — a razor-thin box across the front and sides */}
      <mesh position={[0, lidLineY, 0]}>
        <boxGeometry args={[width + 0.005, 0.008, depth + 0.005]} />
        <meshStandardMaterial
          color={edgeColor}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Subtle tape strip on top center */}
      <mesh position={[0, height / 2 + 0.003, 0]}>
        <boxGeometry args={[width * 0.25, 0.006, depth + 0.01]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={0.5}
          metalness={0.02}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
