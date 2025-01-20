import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

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
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                {lang === "es" ? "Servicios" : "Services"}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services[lang].map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={`/${lang}/${service.path}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {service.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to={`/${lang}/about`}
                className="text-white hover:text-naiam-teal transition-colors px-4 py-2"
              >
                {lang === "es" ? "Nosotros" : "About"}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to={`/${lang}/contact`}
                className="text-white hover:text-naiam-teal transition-colors px-4 py-2"
              >
                {lang === "es" ? "Contacto" : "Contact"}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

const services = {
  en: [
    {
      title: "Design",
      description: "Graphic design, branding, and visual identity services",
      path: "design",
    },
    {
      title: "Development",
      description: "Web and mobile application development",
      path: "development",
    },
    {
      title: "Marketing",
      description: "Digital marketing and social media management",
      path: "marketing",
    },
    {
      title: "Legal",
      description: "Legal services and business consulting",
      path: "legal",
    },
  ],
  es: [
    {
      title: "Diseño",
      description: "Servicios de diseño gráfico, marca e identidad visual",
      path: "design",
    },
    {
      title: "Desarrollo",
      description: "Desarrollo de aplicaciones web y móviles",
      path: "development",
    },
    {
      title: "Marketing",
      description: "Marketing digital y gestión de redes sociales",
      path: "marketing",
    },
    {
      title: "Legal",
      description: "Servicios legales y consultoría empresarial",
      path: "legal",
    },
  ],
};