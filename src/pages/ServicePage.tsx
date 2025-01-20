import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceData {
  title: string;
  subServices: {
    title: string;
    description: string;
    path: string;
  }[];
}

const serviceData = {
  en: {
    design: {
      title: "Design Services",
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
    development: {
      title: "Development Services",
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
    marketing: {
      title: "Marketing Services",
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
    legal: {
      title: "Legal Services",
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
  },
  es: {
    design: {
      title: "Servicios de Diseño",
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
    development: {
      title: "Servicios de Desarrollo",
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
    marketing: {
      title: "Servicios de Marketing",
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
    legal: {
      title: "Servicios Legales",
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
  },
} as const;

export const ServicePage = ({ 
  service, 
  lang = "en" 
}: { 
  service: keyof typeof serviceData.en;
  lang?: "en" | "es";
}) => {
  const serviceInfo = serviceData[lang][service];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
      <Navbar lang={lang} />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-naiam-gray mb-8">
          {serviceInfo.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceInfo.subServices.map((subService) => (
            <Card key={subService.path} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{subService.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{subService.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};