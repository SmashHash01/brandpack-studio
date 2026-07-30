'use client';

import { useMemo } from 'react';
import { Edges, Line } from '@react-three/drei';
import { Color, Vector3, CatmullRomCurve3 } from 'three';
import { materials, type MaterialName } from './MaterialPresets';

interface PaperBagProps {
  material?: MaterialName;
  scale?: number;
}

export default function PaperBag({
  material = 'kraft',
  scale = 1,
}: PaperBagProps) {
  const mat = materials[material];

  const edgeColor = useMemo(() => {
    const c = new Color(mat.color);
    c.multiplyScalar(0.65);
    return c;
  }, [mat.color]);

  // Generate smooth handle arc points
  const handlePoints = useMemo(() => {
    const makeArc = (offsetX: number) => {
      const curve = new CatmullRomCurve3([
        new Vector3(offsetX - 0.25, 0.9, 0.451),
        new Vector3(offsetX - 0.2, 1.3, 0.451),
        new Vector3(offsetX, 1.45, 0.451),
        new Vector3(offsetX + 0.2, 1.3, 0.451),
        new Vector3(offsetX + 0.25, 0.9, 0.451),
      ]);
      return curve.getPoints(24).map((p) => [p.x, p.y, p.z] as [number, number, number]);
    };
    return {
      left: makeArc(-0.3),
      right: makeArc(0.3),
    };
  }, []);

  const bodyWidth = 1.3;
  const bodyHeight = 1.8;
  const bodyDepth = 0.9;

  return (
    <group scale={scale}>
      {/* Main bag body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[bodyWidth, bodyHeight, bodyDepth]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness}
          metalness={mat.metalness}
        />
        <Edges threshold={15} color={edgeColor} lineWidth={0.5} />
      </mesh>

      {/* Side gusset creases — vertical lines on left and right faces */}
      <mesh position={[0, 0, bodyDepth / 2 + 0.001]}>
        <planeGeometry args={[bodyWidth, bodyHeight]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness}
          metalness={mat.metalness}
        />
      </mesh>

      {/* Bottom fold crease line */}
      <mesh position={[0, -bodyHeight / 2 + 0.15, bodyDepth / 2 + 0.002]}>
        <boxGeometry args={[bodyWidth - 0.05, 0.006, 0.002]} />
        <meshStandardMaterial color={edgeColor} roughness={1} metalness={0} />
      </mesh>

      {/* Fold line on back */}
      <mesh position={[0, -bodyHeight / 2 + 0.15, -(bodyDepth / 2 + 0.002)]}>
        <boxGeometry args={[bodyWidth - 0.05, 0.006, 0.002]} />
        <meshStandardMaterial color={edgeColor} roughness={1} metalness={0} />
      </mesh>

      {/* Top rim — slightly thicker edge */}
      <mesh position={[0, bodyHeight / 2, 0]}>
        <boxGeometry args={[bodyWidth + 0.01, 0.04, bodyDepth + 0.01]} />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness - 0.1}
          metalness={mat.metalness}
        />
      </mesh>

      {/* Handle arcs — front */}
      <Line
        points={handlePoints.left}
        color={edgeColor}
        lineWidth={2.5}
      />
      <Line
        points={handlePoints.right}
        color={edgeColor}
        lineWidth={2.5}
      />

      {/* Handle arcs — back (mirrored Z) */}
      <Line
        points={handlePoints.left.map(([x, y]) => [x, y, -0.451] as [number, number, number])}
        color={edgeColor}
        lineWidth={2.5}
      />
      <Line
        points={handlePoints.right.map(([x, y]) => [x, y, -0.451] as [number, number, number])}
        color={edgeColor}
        lineWidth={2.5}
      />
    </group>
  );
}
