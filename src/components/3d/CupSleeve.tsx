'use client';

import { useMemo } from 'react';
import { Color } from 'three';
import { materials, type MaterialName } from './MaterialPresets';

interface CupSleeveProps {
  material?: MaterialName;
  scale?: number;
}

export default function CupSleeve({
  material = 'kraft',
  scale = 1,
}: CupSleeveProps) {
  const mat = materials[material];

  const edgeColor = useMemo(() => {
    const c = new Color(mat.color);
    c.multiplyScalar(0.7);
    return c;
  }, [mat.color]);

  const radiusTop = 0.55;
  const radiusBottom = 0.45;
  const sleeveHeight = 0.6;
  const segments = 32;

  return (
    <group scale={scale}>
      {/* Main sleeve body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry
          args={[radiusTop, radiusBottom, sleeveHeight, segments, 1, true]}
        />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness}
          metalness={mat.metalness}
          side={2} // DoubleSide for open cylinder
        />
      </mesh>

      {/* Top rim ring */}
      <mesh position={[0, sleeveHeight / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radiusTop, 0.008, 8, segments]} />
        <meshStandardMaterial color={edgeColor} roughness={1} metalness={0} />
      </mesh>

      {/* Bottom rim ring */}
      <mesh position={[0, -sleeveHeight / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radiusBottom, 0.008, 8, segments]} />
        <meshStandardMaterial color={edgeColor} roughness={1} metalness={0} />
      </mesh>

      {/* Vertical seam line */}
      <mesh
        position={[0, 0, (radiusTop + radiusBottom) / 2 + 0.002]}
      >
        <boxGeometry args={[0.008, sleeveHeight, 0.005]} />
        <meshStandardMaterial color={edgeColor} roughness={1} metalness={0} />
      </mesh>

      {/* Subtle brand strip — embossed texture band in the middle */}
      <mesh castShadow>
        <cylinderGeometry
          args={[
            radiusTop * 1.005,
            radiusBottom * 1.005,
            sleeveHeight * 0.35,
            segments,
            1,
            true,
          ]}
        />
        <meshStandardMaterial
          color={mat.color}
          roughness={mat.roughness - 0.15}
          metalness={mat.metalness + 0.02}
          side={2}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}
