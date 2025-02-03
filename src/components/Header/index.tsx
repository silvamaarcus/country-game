import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import useThemeStore from "../../stores/useThemeStore";

const Header = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <section className={`custom-container ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-sm font-medium">
            Where in the World?
          </h1>
        </div>
        <div>
          <button className="cursor-pointer text-sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? (
              <span className="flex items-center gap-2">
                <Moon
                  className="size-4"
                  onClick={() => setTheme("dark")}
                />
                Dark Mode
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sun
                  className="size-4"
                  onClick={() => setTheme("light")}
                />
                Light Mode
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Header;
