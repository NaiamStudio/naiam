import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const ServicePage = ({ service, lang }: { service: string; lang: string }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100">
      <Navbar lang={lang} />
      <main className="flex-grow pt-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          {service.charAt(0).toUpperCase() + service.slice(1)}
        </h1>
        {/* Add your service-specific content here */}
      </main>
      <Footer lang={lang} />
    </div>
  );
};