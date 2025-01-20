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
      image: "/lovable-uploads/5222821e-e0da-47a0-80b5-24c627675bce.png"
    },
    {
      title: lang === "es" ? "Expansión de Servicios" : "Service Expansion",
      description: lang === "es"
        ? "Descubre nuestra gama ampliada de soluciones digitales"
        : "Discover our expanded range of digital solutions",
      image: "/lovable-uploads/5222821e-e0da-47a0-80b5-24c627675bce.png"
    },
    {
      title: lang === "es" ? "Relanzamiento de Marca" : "Brand Relaunch",
      description: lang === "es"
        ? "Sigue nuestro viaje en las redes sociales"
        : "Follow our journey on social media",
      image: "/lovable-uploads/5222821e-e0da-47a0-80b5-24c627675bce.png"
    }
  ];

  const services = [
    { name: lang === "es" ? "Diseño" : "Design" },
    { name: lang === "es" ? "Desarrollo" : "Development" },
    { name: lang === "es" ? "Marketing" : "Marketing" },
    { name: lang === "es" ? "Legal" : "Legal" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100">
      <Navbar lang={lang} />
      <main className="flex-grow pt-20 container mx-auto px-4">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-naiam-gray mb-4">Naiam</h1>
          <p className="text-xl text-naiam-gray/80">
            {lang === "es"
              ? "Potenciando tu presencia digital con soluciones innovadoras"
              : "Empowering your digital presence with innovative solutions"}
          </p>
          
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {services.map((service) => (
              <span
                key={service.name}
                className="px-4 py-2 bg-white rounded-full shadow-sm text-naiam-gray hover:shadow-md transition-shadow duration-200"
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
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft className="w-8 h-8 text-naiam-gray" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="w-8 h-8 text-naiam-gray" />
            </div>
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
                          className="w-full h-48 object-cover rounded-md"
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