import { create } from "zustand";

export const useCart = create((set) => ({
  item: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  setItem: (newItem) =>
    set(() => ({
      item: newItem,
    })),

  count: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : 0,
  updateCount: (newCount) => set(() => ({ count: newCount })),
}));
