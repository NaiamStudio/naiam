import { Navbar } from "@/components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = ({ lang = "en" }: { lang?: string }) => {
  const updates = [
    {
      title: lang === "es" ? "Nuevos Paquetes de Servicio" : "New Service Packages",
      description: lang === "es" 
        ? "Explora nuestros servicios actualizados adaptados a tus necesidades" 
        : "Explore our updated service offerings tailored to your needs",
      image: "/placeholder.svg"
    },
    {
      title: lang === "es" ? "Expansión de Servicios" : "Service Expansion",
      description: lang === "es"
        ? "Descubre nuestra gama ampliada de soluciones digitales"
        : "Discover our expanded range of digital solutions",
      image: "/placeholder.svg"
    },
    {
      title: lang === "es" ? "Relanzamiento de Marca" : "Brand Relaunch",
      description: lang === "es"
        ? "Sigue nuestro viaje en las redes sociales"
        : "Follow our journey on social media",
      image: "/placeholder.svg"
    }
  ];

  const services = [
    { name: lang === "es" ? "Diseño" : "Design" },
    { name: lang === "es" ? "Desarrollo" : "Development" },
    { name: lang === "es" ? "Marketing" : "Marketing" },
    { name: lang === "es" ? "Legal" : "Legal" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
      <Navbar lang={lang} />
      <main className="pt-20 container mx-auto px-4">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-naiam-gray mb-4">Naiam</h1>
          <p className="text-xl text-naiam-gray/80">
            {lang === "es"
              ? "Potenciando tu presencia digital con soluciones innovadoras"
              : "Empowering your digital presence with innovative solutions"}
          </p>
          
          {/* Service Tags */}
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

        {/* Latest Updates Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-naiam-gray">
            {lang === "es" ? "Últimas Actualizaciones" : "Latest Updates"}
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {updates.map((update, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="mx-2">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </div>
  );
};

export default Index;