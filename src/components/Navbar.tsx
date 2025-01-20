import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export const Navbar = ({ lang = "en" }: { lang?: string }) => {
  const [openService, setOpenService] = useState<string | null>(null);
  const [openSubService, setOpenSubService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredSubService, setHoveredSubService] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navigation-menu')) {
        setOpenService(null);
        setOpenSubService(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (serviceTitle: string) => {
    setOpenService(prev => prev === serviceTitle ? null : serviceTitle);
    setOpenSubService(null);
  };

  const handleSubServiceClick = (serviceTitle: string, subServiceTitle: string) => {
    setOpenSubService(prev => prev === subServiceTitle ? null : subServiceTitle);
    setOpenService(serviceTitle);
  };

  const isServiceOpen = (serviceTitle: string) => 
    openService === serviceTitle || hoveredService === serviceTitle;

  const isSubServiceOpen = (subServiceTitle: string) =>
    openSubService === subServiceTitle || hoveredSubService === subServiceTitle;

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
        <NavigationMenu className="navigation-menu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="text-white bg-transparent hover:bg-transparent"
                onMouseEnter={() => setHoveredService('services')}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleServiceClick('services')}
              >
                {lang === "es" ? "Servicios" : "Services"}
              </NavigationMenuTrigger>
              {(isServiceOpen('services')) && (
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[90vw] max-w-[280px] gap-2 p-4">
                    {mainServices[lang].map((service) => (
                      <NavigationMenuItem key={service.title}>
                        <NavigationMenuTrigger 
                          className="w-full text-left bg-transparent hover:bg-accent"
                          onMouseEnter={() => setHoveredSubService(service.title)}
                          onMouseLeave={() => setHoveredSubService(null)}
                          onClick={() => handleSubServiceClick('services', service.title)}
                        >
                          <div className="text-sm font-medium">{service.title}</div>
                        </NavigationMenuTrigger>
                        {isSubServiceOpen(service.title) && (
                          <NavigationMenuContent>
                            <ul className="flex flex-col w-[90vw] max-w-[280px] gap-2 p-4 bg-white shadow-lg rounded-md">
                              {service.subServices.map((subService) => (
                                <li 
                                  key={subService.title}
                                  className="group relative"
                                >
                                  <Link
                                    to={`/${lang}/${service.path}/${subService.path}`}
                                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {subService.title}
                                    </div>
                                  </Link>
                                  <div className="absolute left-full top-0 ml-2 w-64 p-4 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
                                    <p className="text-sm text-gray-600">
                                      {subService.description}
                                    </p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
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

const mainServices = {
  en: [
    {
      title: "Design",
      path: "design",
      subServices: [
        {
          title: "Vector Graphics",
          description: "Professional vectorization of logos and graphics",
          path: "vector",
        },
        {
          title: "Logo Design",
          description: "Custom logo design and branding solutions",
          path: "logo",
        },
        {
          title: "Signage Design",
          description: "Creation of professional signage and banners",
          path: "signage",
        },
        {
          title: "Interactive Elements",
          description: "Design of interactive digital elements",
          path: "interactive",
        },
      ],
    },
    {
      title: "Development",
      path: "development",
      subServices: [
        {
          title: "Web Design",
          description: "Custom website design and development",
          path: "web-design",
        },
        {
          title: "Website Maintenance",
          description: "Ongoing website maintenance and updates",
          path: "maintenance",
        },
        {
          title: "CMS Integration",
          description: "Content Management System implementation",
          path: "cms",
        },
        {
          title: "SEO Strategies",
          description: "Search Engine Optimization services",
          path: "seo",
        },
        {
          title: "Analytics Integration",
          description: "Google Analytics setup and monitoring",
          path: "analytics",
        },
      ],
    },
    {
      title: "Marketing",
      path: "marketing",
      subServices: [
        {
          title: "Content Creation",
          description: "Social media content creation and management",
          path: "content",
        },
        {
          title: "Metrics Analysis",
          description: "Social media metrics and performance analysis",
          path: "metrics",
        },
        {
          title: "Follower Analysis",
          description: "Audience profile and engagement analysis",
          path: "followers",
        },
      ],
    },
    {
      title: "Legal",
      path: "legal",
      subServices: [
        {
          title: "Custom Regulations Reports",
          description: "Personalized regulatory compliance reports",
          path: "regulations",
        },
        {
          title: "Trademark Registration",
          description: "Trademark registration consulting services",
          path: "trademark",
        },
        {
          title: "Business Entity Consulting",
          description: "Commercial business structure consulting",
          path: "business",
        },
      ],
    },
  ],
  es: [
    {
      title: "Diseño",
      path: "design",
      subServices: [
        {
          title: "Vectorizaciones",
          description: "Vectorización profesional de logos y gráficos",
          path: "vector",
        },
        {
          title: "Diseño de Logotipo",
          description: "Diseño personalizado de logos y marca",
          path: "logo",
        },
        {
          title: "Elaboración de Cartelería",
          description: "Creación de carteles y banners profesionales",
          path: "signage",
        },
        {
          title: "Elementos Interactivos",
          description: "Diseño de elementos digitales interactivos",
          path: "interactive",
        },
      ],
    },
    {
      title: "Desarrollo",
      path: "development",
      subServices: [
        {
          title: "Diseño Web",
          description: "Diseño y desarrollo de sitios web personalizados",
          path: "web-design",
        },
        {
          title: "Mantenimiento",
          description: "Mantenimiento y actualizaciones continuas",
          path: "maintenance",
        },
        {
          title: "Integración CMS",
          description: "Implementación de sistemas de gestión de contenido",
          path: "cms",
        },
        {
          title: "Estrategias SEO",
          description: "Servicios de optimización para motores de búsqueda",
          path: "seo",
        },
        {
          title: "Integración Analytics",
          description: "Configuración y monitoreo de Google Analytics",
          path: "analytics",
        },
      ],
    },
    {
      title: "Marketing",
      path: "marketing",
      subServices: [
        {
          title: "Creación de Contenido",
          description: "Creación y gestión de contenido para redes sociales",
          path: "content",
        },
        {
          title: "Análisis de Métricas",
          description: "Análisis de métricas y rendimiento en redes sociales",
          path: "metrics",
        },
        {
          title: "Análisis de Seguidores",
          description: "Análisis de perfil de audiencia y engagement",
          path: "followers",
        },
      ],
    },
    {
      title: "Legal",
      path: "legal",
      subServices: [
        {
          title: "Informes de Normativas",
          description: "Informes personalizados de cumplimiento normativo",
          path: "regulations",
        },
        {
          title: "Registro de Marca",
          description: "Asesoría en registro de marcas",
          path: "trademark",
        },
        {
          title: "Asesoría en Sociedades",
          description: "Consultoría en estructuras comerciales",
          path: "business",
        },
      ],
    },
  ],
};