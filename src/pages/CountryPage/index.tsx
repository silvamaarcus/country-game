import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import useThemeStore from "../../stores/useThemeStore";

const CountryPage = () => {
  const location = useLocation();
  const countryData = location.state?.countryData;
  const navigate = useNavigate();

  const { theme } = useThemeStore();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="h-screen">
      {countryData && (
        <div>
          <div className="custom-container text-sm">
            <button
              className={`my-10 flex cursor-pointer items-center gap-2 rounded px-6 py-2 shadow ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}
              onClick={handleBack}
            >
              <ArrowLeft className="size-4" />
              Back
            </button>
            <div className="py-10">
              {countryData.map((country: any) => (
                <div
                  key={country.name.common}
                  className="flex w-full flex-wrap items-center justify-center gap-10 md:flex-nowrap"
                >
                  <div>
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      width={500}
                    />
                  </div>

                  <div>
                    <h2 className="font-base font-bold">
                      {country.name.common}
                    </h2>
                    <div className="flex gap-10">
                      <div className="mt-4 flex flex-col gap-1">
                        <span>
                          <strong>Native Name: </strong>
                          {country.name.official}
                        </span>
                        <span>
                          <strong>Population: </strong>
                          {country.population.toLocaleString("en-US")}
                        </span>
                        <span>
                          <strong>Region: </strong>
                          {country.region}
                        </span>
                        <span>
                          <strong>Sub Region: </strong>
                          {country.subregion}
                        </span>
                        <span>
                          <strong>Capital: </strong>
                          {country.capital}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-col gap-1">
                        <span>
                          <strong>Top Level Domain:</strong> {country.tld}
                        </span>
                        <span>
                          <strong>Currencies: </strong>
                          {Object.values(country.currencies)
                            .map((currency: any) => currency.name)
                            .join(", ")}
                        </span>
                        <span>
                          <strong>Languages: </strong>
                          {Object.values(country.languages)
                            .map((language: any) => language)
                            .join(", ")}
                        </span>
                      </div>
                    </div>
                    <div className="mt-12">
                      <span className="flex flex-wrap items-center gap-2">
                        <strong>Border Countries:</strong>
                        {country.borders.map((border: any) => (
                          <span
                            key={border}
                            className={`rounded px-4 py-1 shadow ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}
                          >
                            {border}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryPage;
