'use client';

import { useMemo } from 'react';
import { Edges } from '@react-three/drei';
import { Color, Shape } from 'three';
import { materials, type MaterialName } from './MaterialPresets';

interface CutlerySleeveProps {
  material?: MaterialName;
  scale?: number;
}

export default function CutlerySleeve({
  material = 'kraft',
  scale = 1,
}: CutlerySleeveProps) {
  const mat = materials[material];

  const edgeColor = useMemo(() => {
    const c = new Color(mat.color);
    c.multiplyScalar(0.7);
    return c;
  }, [mat.color]);

  // Create a triangular flap shape
  const flapShape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(-0.4, 0);
    shape.lineTo(0.4, 0);
    shape.lineTo(0, 0.5);
    shape.closePath();
    return shape;
  }, []);

  const bodyLength = 3;
  const bodyWidth = 0.8;
  const bodyThickness = 0.05;

  return (
    <group scale={scale}>
      {/* Main sleeve body — flat elongated box */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[bodyLength, bodyWidth, bodyThickness]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness}
          metalness={mat.metalness}
        />
        <Edges threshold={15} color={edgeColor} lineWidth={0.5} />
      </mesh>

      {/* Diagonal closing flap on one end */}
      <group
        position={[bodyLength / 2, 0, bodyThickness / 2 + 0.001]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <mesh castShadow>
          <shapeGeometry args={[flapShape]} />
          <meshStandardMaterial
            color={mat.color}
            roughness={mat.roughness}
            metalness={mat.metalness}
            side={2}
          />
        </mesh>
      </group>

      {/* Subtle center crease line */}
      <mesh position={[0, 0, bodyThickness / 2 + 0.002]}>
        <boxGeometry args={[bodyLength - 0.1, 0.006, 0.002]} />
        <meshStandardMaterial color={edgeColor} roughness={1} metalness={0} />
      </mesh>

      {/* Slight tuck flap on the other end */}
      <mesh
        position={[-bodyLength / 2 - 0.1, 0, 0]}
        rotation={[0, 0, 0.05]}
      >
        <boxGeometry args={[0.2, bodyWidth - 0.1, bodyThickness]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness + 0.05}
          metalness={mat.metalness}
        />
      </mesh>
    </group>
  );
}
