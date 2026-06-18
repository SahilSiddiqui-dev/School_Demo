import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl border border-border/50 hover:bg-muted/80 text-foreground transition-smooth active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`w-5 h-5 absolute inset-0 transition-all duration-500 ease-out transform ${
            theme === "dark"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-secondary"
          }`}
        />
        <Moon
          className={`w-5 h-5 absolute inset-0 transition-all duration-500 ease-out transform ${
            theme === "light"
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-yellow-400"
          }`}
        />
      </div>
    </button>
  );
};
