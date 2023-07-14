import { create } from "zustand";

export const useOrder = create((set) => ({
  history: localStorage.getItem("order-history")
    ? JSON.parse(localStorage.getItem("order-history"))
    : [],
  setHistory: (newHistory) =>
    set((state) => ({
      history: [
        ...state.history,
        newHistory,
      ],
    })),
}));
