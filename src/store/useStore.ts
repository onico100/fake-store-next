// store/useStore.ts
import { create } from "zustand";

// Define your store's types (if using TypeScript)
type StoreState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// Initialize the Zustand store
export const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
