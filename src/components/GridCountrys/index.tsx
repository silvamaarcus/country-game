// Hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Services
import { useRequests } from "../../services/useRequests";
// Components
import CardCountry from "./components/CardCountry";
// Stores
import useThemeStore from "../../stores/useThemeStore";

const GridCountrys = () => {
  const { getRandomCountries } = useRequests();
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  const { theme } = useThemeStore();

  const handleCardClick = (country: any) => {
    navigate("/country", { state: { countryData: [country] } });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getRandomCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <section className="custom-container">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        {countries.map((country: any) => (
          <div
            key={country.name.common}
            className={`rounded col-span-1 md:col-span-3 ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}
            onClick={() => handleCardClick(country)}
          >
            <CardCountry
              name={country.name.common}
              flag={country.flags.png}
              population={country.population.toLocaleString("en-US")}
              region={country.region}
              capital={country.capital}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridCountrys;
