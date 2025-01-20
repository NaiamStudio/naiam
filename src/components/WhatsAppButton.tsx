import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  return (
    <Button
      className="fixed bottom-6 left-6 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 transition-colors shadow-lg"
      onClick={() => window.open("https://wa.me/YOUR_PHONE_NUMBER", "_blank")}
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  );
};