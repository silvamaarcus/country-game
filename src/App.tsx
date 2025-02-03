import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
// Components
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <section className="shadow">
        <Header />
      </section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="*" element={<h1 className="text-5xl">Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
