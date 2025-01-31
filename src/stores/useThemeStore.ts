import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (theme: Theme) => set({ theme }),
}));

export default useThemeStore;
