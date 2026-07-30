'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface FloatingObjectProps {
  /** Oscillation speed multiplier */
  speed?: number;
  /** Vertical bob amplitude in world units */
  amplitude?: number;
  /** Y-axis spin speed */
  rotationSpeed?: number;
  /** Phase offset (seconds) so multiple objects don't sync */
  delay?: number;
  children: React.ReactNode;
}

export default function FloatingObject({
  speed = 1,
  amplitude = 0.15,
  rotationSpeed = 0.1,
  delay = 0,
  children,
}: FloatingObjectProps) {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();
    const phase = t * speed + delay;

    // Primary vertical bob
    groupRef.current.position.y += (Math.sin(phase) * amplitude - groupRef.current.position.y) * 0.05;

    // Slow Y-axis spin
    groupRef.current.rotation.y = t * rotationSpeed + delay;

    // Very subtle X/Z wobble for organic feel
    groupRef.current.rotation.x = Math.sin(phase * 0.7) * 0.03;
    groupRef.current.rotation.z = Math.cos(phase * 0.5) * 0.02;
  });

  return <group ref={groupRef}>{children}</group>;
}
