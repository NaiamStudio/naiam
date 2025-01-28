import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const SocialButtons = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6 text-white" />,
      url: "https://linkedin.com/company/naiam",
      bgColor: "bg-[#0A66C2]",
      hoverColor: "hover:bg-[#004182]"
    },
    {
      icon: <Instagram className="w-6 h-6 text-white" />,
      url: "https://instagram.com/naiam.studio",
      bgColor: "bg-[#E4405F]",
      hoverColor: "hover:bg-[#D62E4C]"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      url: "https://wa.me/+5493517873780",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4">
      {socialLinks.map((social, index) => (
        <Button
          key={index}
          className={`rounded-full w-14 h-14 ${social.bgColor} ${social.hoverColor} transition-colors shadow-lg`}
          onClick={() => window.open(social.url, "_blank")}
        >
          {social.icon}
        </Button>
      ))}
    </div>
  );
};

