import { create } from "zustand";

interface CountryStore {
  country: string;
  setCountry: (country: string) => void;
}

const useCountryStore = create<CountryStore>((set) => ({
  country: "",
  setCountry: (country) => set({ country }),
}));
export default useCountryStore;
