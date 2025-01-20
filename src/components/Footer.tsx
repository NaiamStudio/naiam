import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "./ui/toggle";

export const Footer = ({ lang }: { lang?: string }) => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleLanguageChange = (newLang: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath === "/" ? `/${newLang}` : currentPath.replace(/\/(en|es)/, `/${newLang}`);
    navigate(newPath);
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-4">
      <Toggle
        pressed={theme === "dark"}
        onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
        className="bg-background border-2"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Toggle>
      <Button
        variant={lang === "en" ? "default" : "outline"}
        onClick={() => handleLanguageChange("en")}
        className="w-12"
      >
        EN
      </Button>
      <Button
        variant={lang === "es" ? "default" : "outline"}
        onClick={() => handleLanguageChange("es")}
        className="w-12"
      >
        ES
      </Button>
    </div>
  );
};