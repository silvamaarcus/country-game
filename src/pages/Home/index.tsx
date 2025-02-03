// Icons
import { Search } from "lucide-react";
// Services
import useCountryStore from "../../stores/useCountryStore";
import { useRequests } from "../../services/useRequests";
// Hooks
import { useNavigate } from "react-router-dom";
import GridCountrys from "../../components/GridCountrys";

const Home = () => {
  const { getCountryByName } = useRequests();
  const { country, setCountry } = useCountryStore();
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (country.trim()) {
      const data = await getCountryByName(country);
      navigate("/country", { state: { countryData: data } });
    }
  };

  return (
    <section className="my-8">
      <main className="custom-container">
        <div className="flex flex-wrap gap-10 md:items-center md:justify-between">
          <div className="flex items-center gap-2 rounded px-4 shadow">
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
              className="w-75 rounded p-2 outline-0"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </div>

          <select className="w-50 rounded px-1 py-2 shadow md:w-auto md:px-2">
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
