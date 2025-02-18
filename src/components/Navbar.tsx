
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = ({ lang = "en" }: { lang?: string }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const getLogoLink = () => {
    if (location.pathname === '/es' || location.pathname === '/en') {
      return '/';
    }
    return `/${lang}`;
  };

  const handleServicesClick = () => {
    if (!isMobile) {
      setIsServicesOpen(!isServicesOpen);
    }
  };

  return (
    <nav className="w-full bg-black/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={getLogoLink()}>
          <img
            src="/lovable-uploads/3512fed0-081a-4a91-b72b-abec3a4ad1a2.png"
            alt="Naiam Logo"
            className="w-12 h-12"
          />
        </Link>
        <div className="flex gap-6 items-center relative">
          <div
            className="relative"
            onMouseEnter={() => isMobile && setIsServicesOpen(true)}
            onMouseLeave={() => isMobile && setIsServicesOpen(false)}
          >
            <button
              className="text-white hover:text-naiam-teal transition-colors flex items-center gap-1"
              onClick={handleServicesClick}
            >
              {lang === "es" ? "Servicios" : "Services"}
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[160px] md:min-w-[200px]">
                {mainServices[lang].map((service) => (
                  <Link
                    key={service.title}
                    to={`/${lang}/${service.path}`}
                    className="block px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to={`/${lang}/about`}
            className="text-white hover:text-naiam-teal transition-colors"
          >
            {lang === "es" ? "Nosotros" : "About"}
          </Link>
          <Link
            to={`/${lang}/contact`}
            className="text-white hover:text-naiam-teal transition-colors"
          >
            {lang === "es" ? "Contacto" : "Contact"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mainServices = {
  en: [
    { title: "Design", path: "design" },
    { title: "Development", path: "development" },
    { title: "Marketing", path: "marketing" },
    { title: "Legal", path: "legal" },
  ],
  es: [
    { title: "Diseño", path: "design" },
    { title: "Desarrollo", path: "development" },
    { title: "Marketing", path: "marketing" },
    { title: "Legal", path: "legal" },
  ],
};
