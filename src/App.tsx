import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
// Components
import Header from "./components/Header";
// Stores
import useThemeStore from "./stores/useThemeStore";

const App = () => {
  const { theme } = useThemeStore();

  return (
    <section className={`bg-${theme}`}>
      <main className="shadow">
        <Header />
      </main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="*" element={<h1 className="text-5xl">Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};
export default App;
