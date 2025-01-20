import { Navbar } from "@/components/Navbar";

const Index = ({ lang = "en" }: { lang?: string }) => {
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
        </section>
      </main>
    </div>
  );
};

export default Index;