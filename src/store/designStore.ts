import { create } from 'zustand';
import { MaterialName } from '@/components/3d/MaterialPresets';

interface DesignState {
  category: string;
  material: MaterialName;
  customColor: string;
  width: number;
  height: number;
  depth: number;
  quantity: number;
  finish: string;
  uploadedLogo: string | null;
  logoPositionX: number;
  logoPositionY: number;
  logoScale: number;
  showDieline: boolean;
  showDimensions: boolean;
  
  setCategory: (category: string) => void;
  setMaterial: (material: MaterialName) => void;
  setCustomColor: (color: string) => void;
  setDimensions: (width: number, height: number, depth: number) => void;
  setQuantity: (qty: number) => void;
  setFinish: (finish: string) => void;
  setUploadedLogo: (logo: string | null) => void;
  updateLogoTransform: (x: number, y: number, scale: number) => void;
  toggleDieline: () => void;
  toggleDimensions: () => void;
  resetDesign: () => void;
}

export const useDesignStore = create<DesignState>((set) => ({
  category: 'boxes',
  material: 'kraft',
  customColor: '#B9824B',
  width: 20,
  height: 14,
  depth: 12,
  quantity: 100,
  finish: 'Matte',
  uploadedLogo: null,
  logoPositionX: 0,
  logoPositionY: 0,
  logoScale: 1.0,
  showDieline: false,
  showDimensions: false,

  setCategory: (category) => set({ category }),
  setMaterial: (material) => set({ material }),
  setCustomColor: (customColor) => set({ customColor }),
  setDimensions: (width, height, depth) => set({ width, height, depth }),
  setQuantity: (quantity) => set({ quantity }),
  setFinish: (finish) => set({ finish }),
  setUploadedLogo: (uploadedLogo) => set({ uploadedLogo }),
  updateLogoTransform: (logoPositionX, logoPositionY, logoScale) =>
    set({ logoPositionX, logoPositionY, logoScale }),
  toggleDieline: () => set((state) => ({ showDieline: !state.showDieline })),
  toggleDimensions: () => set((state) => ({ showDimensions: !state.showDimensions })),
  resetDesign: () =>
    set({
      material: 'kraft',
      customColor: '#B9824B',
      width: 20,
      height: 14,
      depth: 12,
      quantity: 100,
      finish: 'Matte',
      uploadedLogo: null,
      logoPositionX: 0,
      logoPositionY: 0,
      logoScale: 1.0,
      showDieline: false,
      showDimensions: false
    })
}));
