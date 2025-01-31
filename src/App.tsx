import GridCountrys from "./assets/components/GridCountrys";
import Header from "./assets/components/Header";

import { Search } from "lucide-react";

const App = () => {
  return (
    <>
      <div className="shadow">
        <Header />
      </div>

      <section className="my-8 text-sm">
        <div className="custom-container">
          <div className="flex flex-wrap gap-10 md:items-center md:justify-between">
            <div className="flex items-center gap-2 rounded px-4 shadow">
              <Search className="size-4" />
              <input
                placeholder="Search for a country"
                type="text"
                className="w-75 rounded p-2 outline-0"
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
      </section>

      <GridCountrys />
    </>
  );
};
export default App;
