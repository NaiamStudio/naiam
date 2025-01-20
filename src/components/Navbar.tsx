import { Link } from "react-router-dom";

export const Navbar = ({ lang = "en" }: { lang?: string }) => {
  return (
    <nav className="w-full bg-black/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={`/${lang}`}>
          <img
            src="/lovable-uploads/3512fed0-081a-4a91-b72b-abec3a4ad1a2.png"
            alt="Naiam Logo"
            className="w-12 h-12"
          />
        </Link>
        <div className="flex gap-6">
          {mainServices[lang].map((service) => (
            <Link
              key={service.title}
              to={`/${lang}/${service.path}`}
              className="text-white hover:text-naiam-teal transition-colors"
            >
              {service.title}
            </Link>
          ))}
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