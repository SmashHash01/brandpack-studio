'use client';

import { useMemo } from 'react';
import { Edges } from '@react-three/drei';
import { Color } from 'three';
import { materials, type MaterialName } from './MaterialPresets';

interface FoodBoxProps {
  material?: MaterialName;
  scale?: number;
}

export default function FoodBox({
  material = 'foodSafe',
  scale = 1,
}: FoodBoxProps) {
  const mat = materials[material];

  const edgeColor = useMemo(() => {
    const c = new Color(mat.color);
    c.multiplyScalar(0.75);
    return c;
  }, [mat.color]);

  const bodyWidth = 1.6;
  const bodyHeight = 0.5;
  const bodyDepth = 1.4;
  const lidAngle = (15 * Math.PI) / 180; // 15 degrees open

  return (
    <group scale={scale}>
      {/* Base tray */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[bodyWidth, bodyHeight, bodyDepth]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness}
          metalness={mat.metalness}
        />
        <Edges threshold={15} color={edgeColor} lineWidth={0.5} />
      </mesh>

      {/* Inner cavity — slightly darker recessed area on top of base */}
      <mesh position={[0, bodyHeight / 2 + 0.001, 0]}>
        <boxGeometry
          args={[bodyWidth - 0.12, 0.003, bodyDepth - 0.12]}
        />
        <meshStandardMaterial
          color={edgeColor}
          roughness={mat.roughness + 0.05}
          metalness={0}
        />
      </mesh>

      {/* Lid — hinged from the back edge, tilted open */}
      <group position={[0, bodyHeight / 2, -bodyDepth / 2]}>
        <group rotation={[-lidAngle, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            position={[0, bodyHeight / 2, bodyDepth / 2]}
          >
            <boxGeometry args={[bodyWidth, bodyHeight, bodyDepth]} />
            <meshStandardMaterial
              color={mat.color}
              roughness={mat.roughness}
              metalness={mat.metalness}
            />
            <Edges threshold={15} color={edgeColor} lineWidth={0.5} />
          </mesh>
        </group>
      </group>

      {/* Hinge line at the back */}
      <mesh position={[0, bodyHeight / 2, -bodyDepth / 2]}>
        <boxGeometry args={[bodyWidth + 0.01, 0.015, 0.015]} />
        <meshStandardMaterial color={edgeColor} roughness={1} metalness={0} />
      </mesh>

      {/* Front tab lip */}
      <mesh
        position={[0, bodyHeight / 2 + 0.01, bodyDepth / 2 + 0.02]}
      >
        <boxGeometry args={[bodyWidth * 0.35, 0.08, 0.02]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness}
          metalness={mat.metalness}
        />
      </mesh>
    </group>
  );
}
