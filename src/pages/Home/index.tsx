// Icons
import { Search } from "lucide-react";
// Services e Stores
import useThemeStore from "../../stores/useThemeStore";
import useCountryStore from "../../stores/useCountryStore";
import { useRequests } from "../../services/useRequests";
// Hooks
import { useNavigate } from "react-router-dom";
import GridCountrys from "../../components/GridCountrys";

const Home = () => {
  const { getCountryByName } = useRequests();
  const { country, setCountry } = useCountryStore();
  const navigate = useNavigate();
  const { theme } = useThemeStore();

  const handleSearch = async () => {
    if (country.trim()) {
      const data = await getCountryByName(country);
      navigate("/country", { state: { countryData: data } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="my-8">
      <main className="custom-container">
        <div className="flex flex-wrap gap-10 md:items-center md:justify-between">
          <div
            className={`flex items-center gap-2 rounded px-4 shadow ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}
          >
            <button
              type="button"
              className="cursor-pointer text-gray-400"
              onClick={handleSearch}
            >
              <Search className="size-4" />
            </button>
            <input
              placeholder="Search for a country"
              type="text"
              className={`w-75 rounded p-2 outline-0 ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}
              onChange={(e) => setCountry(e.target.value)}
              onKeyDown={handleKeyDown}
              value={country}
            />
          </div>

          <select
            className={`w-50 rounded px-1 py-2 shadow md:w-auto md:px-2 ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}
          >
            <option value="default">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </main>

      <div className="my-8">
        <GridCountrys />
      </div>
    </section>
  );
};
export default Home;
