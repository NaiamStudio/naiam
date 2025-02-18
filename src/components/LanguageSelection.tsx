
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const LanguageSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-naiam-teal to-naiam-purple">
      <div className="text-center space-y-4 md:space-y-7 animate-float px-4">
        <img
          src="/lovable-uploads/3512fed0-081a-4a91-b72b-abec3a4ad1a2.png"
          alt="Naiam Logo"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Naiam Studio</h1>
        <p className="text-lg md:text-2xl text-white/90 mb-4 md:mb-8">🌎 Mendiolaza, Córdoba, Argentina</p>
        <div className="flex gap-4 md:gap-6 justify-center">
          <Button
            onClick={() => navigate("/es")}
            variant="outline"
            className="w-20 md:w-24 hover:bg-white hover:text-naiam-purple transition-colors"
          >
            ESPAÑOL
          </Button>
          <Button
            onClick={() => navigate("/en")}
            variant="outline"
            className="w-20 md:w-24 hover:bg-white hover:text-naiam-purple transition-colors"
          >
            ENGLISH
          </Button>
        </div>
      </div>
    </div>
  );
};
