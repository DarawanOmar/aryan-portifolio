import React from "react";
import {
  Send,
  Mail,
  AtSign,
  MessageCircle,
  Instagram,
  Linkedin,
  LucideFacebook,
} from "lucide-react";
import { PortfolioData } from "../_type";
import Image from "next/image";

interface ProfileSectionProps {
  data: PortfolioData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <Linkedin size={24} />;
      case "instagram":
        return <Instagram size={24} />;
      case "facebook":
        return <LucideFacebook size={24} />;
      case "at-sign":
        return <AtSign size={24} />;
      case "message-circle":
        return <MessageCircle size={24} />;
      case "send":
        return <Send size={20} />;
      default:
        return null;
    }
  };

  const handleContactClick = (method: (typeof data.contactMethods)[0]) => {
    if (method.type === "telegram") {
      window.open(`https://t.me/${method.value.replace("@", "")}`, "_blank");
    } else if (method.type === "whatsapp") {
      window.location.href = `mailto:${method.value}`;
    }
  };

  return (
    <div className="text-center space-y-8">
      {/* Profile Image */}
      <div className="relative">
        <div className="flex flex-col justify-center items-center mb-6 ">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-400 rounded-full blur-md opacity-100 animate-pulse"></div>
            <Image
              src={data.profileImage}
              alt={data.name}
              height={600}
              width={600}
              quality={100}
              className="relative h-32 w-32 object-cover object-top rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-xl text-gray-600 font-medium">{data.jobTitle}</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center flex-wrap gap-4 max-w-md mx-auto">
        {data.socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-gray-50 hover:scale-110 transition-all duration-300 hover:shadow-lg shadow-md"
          >
            {getIcon(link.icon)}
          </a>
        ))}
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-row gap-4 justify-center max-w-md mx-auto">
        {data.contactMethods.map((method) => (
          <button
            key={method.type}
            onClick={() => handleContactClick(method)}
            className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full font-medium hover:from-gray-900 hover:to-gray-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-black"
          >
            {getIcon(method.icon)}
            <span>{method.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
