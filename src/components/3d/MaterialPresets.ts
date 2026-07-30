// Material preset configurations for packaging materials
// These are plain config objects — not Three.js instances — so they stay serializable
// and can be spread onto <meshStandardMaterial> props in R3F components.

export interface MaterialConfig {
  color: string;
  roughness: number;
  metalness: number;
}

export const materials = {
  kraft: {
    color: '#B9824B',
    roughness: 0.85,
    metalness: 0.0,
  },
  whiteCardboard: {
    color: '#FAFAFA',
    roughness: 0.7,
    metalness: 0.0,
  },
  luxuryBlack: {
    color: '#111827',
    roughness: 0.9,
    metalness: 0.05,
  },
  recycledPaper: {
    color: '#D4C5A9',
    roughness: 0.95,
    metalness: 0.0,
  },
  glossLaminated: {
    color: '#FFFFFF',
    roughness: 0.25,
    metalness: 0.1,
  },
  corrugated: {
    color: '#C4A67D',
    roughness: 0.9,
    metalness: 0.0,
  },
  foodSafe: {
    color: '#F5F0E8',
    roughness: 0.6,
    metalness: 0.0,
  },
} as const satisfies Record<string, MaterialConfig>;

export type MaterialName = keyof typeof materials;
