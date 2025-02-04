import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const LanguageSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-naiam-teal to-naiam-purple">
      <div className="text-center space-y-7 animate-float">
        <img
          src="/lovable-uploads/3512fed0-081a-4a91-b72b-abec3a4ad1a2.png"
          alt="Naiam Logo"
          className="w-32 h-32 mx-auto mb-8"
        />
        <h1 className="text-6xl font-bold text-white mb-2">Naiam Studio</h1>
        <p className="text-2xl text-white/90 mb-8">🌎 Mendiolaza, Córdoba, Argentina</p>
        <div className="flex gap-6 justify-center">
          <Button
            onClick={() => navigate("/es")}
            variant="outline"
            className="w-24 hover:bg-white hover:text-naiam-purple transition-colors"
          >
            ESPAÑOL
          </Button>
          <Button
            onClick={() => navigate("/en")}
            variant="outline"
            className="w-24 hover:bg-white hover:text-naiam-purple transition-colors"
          >
            ENGLISH
          </Button>
        </div>
      </div>
    </div>
  );
};