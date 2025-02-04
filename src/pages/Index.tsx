import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = ({ lang = "en" }: { lang?: string }) => {
  const navigate = useNavigate();
  const updates = [
    {
      title: lang === "es" ? "Nuevos Paquetes de Servicio" : "New Service Packages",
      description: lang === "es" 
        ? "Explora nuestros servicios actualizados adaptados a tus necesidades" 
        : "Explore our updated service offerings tailored to your needs",
      image: "Latest/promotions.png"
    },
    {
      title: lang === "es" ? "Relanzamiento de Marca" : "Brand Relaunch",
      description: lang === "es"
      ? "Sigue nuestro viaje en las redes sociales"
      : "Follow our journey on social media",
      image: "Latest/relaunching.png"
    },
    {
      title: lang === "es" ? "Expansión de Servicios" : "Service Expansion",
      description: lang === "es"
        ? "Descubre nuestra gama ampliada de soluciones digitales"
        : "Discover our expanded range of digital solutions",
      image: "Latest/expansion.png"
    }
  ];

  const services = [
    { name: lang === "es" ? "Diseño" : "Design", path: lang === "es" ? "/es/design" : "/en/design" },
    { name: lang === "es" ? "Desarrollo" : "Development", path: lang === "es" ? "/es/development" : "/en/development" },
    { name: lang === "es" ? "Marketing" : "Marketing", path: lang === "es" ? "/es/marketing" : "/en/marketing" },
    { name: lang === "es" ? "Legal" : "Legal", path: lang === "es" ? "/es/legal" : "/en/legal" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100">
      <Navbar lang={lang} />
      <main className="flex-grow pt-20 container mx-auto px-4">
        <section className="text-center py-20">
          <img
            src="/brand/naiam-logotype.png"
            alt="Naiam Logotype"
            className="mx-auto mb-8 w-64 h-auto"
          />
            <h2 className="text-2xl font-bold text-naiam-gray/90 mb-4 italic">
              {lang === "es" ? "Soluciones Digitales" : "Digital Solutions"}
            </h2>
          
          <p className="text-xl text-naiam-gray/80">
            {lang === "es"
              ? "Cotizaciones sin compromiso. Consulta como podemos ayudarte."
              : "Free quotes. Find out how we can help you."}
          </p>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {services.map((service) => (
              <span
                key={service.name}
                onClick={() => navigate(service.path)}
                className="px-4 py-2 bg-white rounded-full shadow-sm text-naiam-gray hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                {service.name}
              </span>
            ))}
          </div>
        </section>

        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-naiam-gray">
            {lang === "es" ? "Últimas Actualizaciones" : "Latest Updates"}
          </h2>
          <div className="max-w-5xl mx-auto relative group">
            <Carousel
              opts={{
                align: "start",
                dragFree: true
              }}
              className="w-full"
            >
                  <CarouselContent className="-ml-2 md:-ml-4">
                  {updates.map((update, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardHeader>
                      <CardTitle className="text-xl">{update.title}</CardTitle>
                      <CardDescription>{update.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                      <img
                        src={update.image}
                        alt={update.title}
                        className="w-full h-auto object-contain rounded-md md:max-w-xs"
                      />
                      </CardContent>
                    </Card>
                    </CarouselItem>
                  ))}
                  </CarouselContent>
            </Carousel>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <Button
                onClick={() => navigate("/en")}
                variant="outline"
                className="w-24 hover:bg-naiam-teal hover:text-white transition-colors"
              >
                EN
              </Button>
              <Button
                onClick={() => navigate("/es")}
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
      
    </div>
    
  );
};

export default Index;