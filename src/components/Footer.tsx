import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const Footer = ({ lang = "en" }: { lang?: string }) => {
  const navigate = useNavigate();

  return (
    <footer className="py-8 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Button
              onClick={() => {
                const currentPath = window.location.pathname;
                const newPath = currentPath.replace(/\/(en|es)/, '/en');
                navigate(newPath);
              }}
              variant="outline"
              className="w-24 hover:bg-naiam-teal hover:text-white transition-colors"
            >
              EN
            </Button>
            <Button
              onClick={() => {
                const currentPath = window.location.pathname;
                const newPath = currentPath.replace(/\/(en|es)/, '/es');
                navigate(newPath);
              }}
              variant="outline"
              className="w-24 hover:bg-naiam-teal hover:text-white transition-colors"
            >
              ES
            </Button>
          </div>
          <p className="text-sm text-naiam-gray/60">
            © 2024 Naiam. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};