import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const useRequests = () => {
  // Função 1: Obter todos os países
  const getAllCountries = async () => {
    const response = await api.get("/all");
    return response.data;
  };

  // Função 2: Obter 8 países aleatórios
  const getRandomCountries = async () => {
    const allCountries = await getAllCountries();
    const minRandom = Math.floor(Math.random() * 250);
    const maxRandom = minRandom + 8;
    return allCountries.slice(minRandom, maxRandom);
  };

  // Função 3: Filtrar por continente
  const getCountriesByRegion = async (region: string) => {
    const response = await api.get(`/region/${region}`);
    return response.data;
  };

  // Função 4: Filtrar por nome do país
  const getCountryByName = async (name: string) => {
    const response = await api.get(`/name/${name}`);
    return response.data;
  };

  return {
    getAllCountries,
    getRandomCountries,
    getCountriesByRegion,
    getCountryByName,
  };
};
