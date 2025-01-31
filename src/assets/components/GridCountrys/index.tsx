import { useEffect, useState } from "react";
import { useRequests } from "../../../services/useRequests";
import CardCountry from "./components/CardCountry";

const GridCountrys = () => {
  const { getRandomCountries } = useRequests();
  const [countries, setCountries] = useState([]);

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
          <div key={country.name.common} className="col-span-1 md:col-span-3">
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
