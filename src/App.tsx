// import GridCountrys from "./components/GridCountrys";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import Header from "./components/Header";

// import { Search, ArrowLeft } from "lucide-react";

// import { useRequests } from "./services/useRequests";
// import { useState } from "react";
// import useCountryStore from "./stores/useCountryStore";

const App = () => {
  // const { getCountryByName } = useRequests();
  // const [searchResults, setSearchResults] = useState([]);
  // const { country, setCountry } = useCountryStore();
  // const [visible, setVisible] = useState("block");

  // const handleSearch = async () => {
  //   if (country.trim()) {
  //     const data = await getCountryByName(country);
  //     setSearchResults(data);
  //     // console.log(data);
  //     setVisible("hidden");
  //   }
  // };

  return (
    <>
      <section className="shadow">
        <Header />
      </section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>

      {/* <section className={`my-8 text-sm ${visible} bg-black`}>
        <div className="custom-container">
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
        </div>
      </section> */}

      {/* {searchResults.length > 0 && (
        <div className="custom-container text-sm">
          <button
            className="my-10 flex cursor-pointer items-center gap-2 px-6 py-2 shadow"
            onClick={handleBack}
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
          <div>
            {searchResults.map((country: any) => (
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
                  <h2 className="font-base font-bold">{country.name.common}</h2>
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
                        <span key={border} className="rounded px-4 py-1 shadow">
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
      )} */}

      {/* <section className={`${visible}`}>
        <GridCountrys />
      </section> */}
    </>
  );
};
export default App;
