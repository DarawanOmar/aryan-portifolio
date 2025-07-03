import React from "react";
import {
  Send,
  AtSign,
  MessageCircle,
  Instagram,
  Linkedin,
  LucideFacebook,
  Briefcase,
} from "lucide-react";
import { PortfolioData } from "../_type";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="text-center space-y-8 bg[#e0e5ec]">
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
          <Link
            key={method.type}
            href={
              method.type === "telegram"
                ? `https://t.me/${method.value.replace("@", "")}`
                : method.type === "whatsapp"
                ? method.value
                : "#"
            }
            className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full font-medium hover:from-gray-900 hover:to-gray-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {getIcon(method.icon)}
            <span>{method.label}</span>
          </Link>
        ))}
      </div>

      {/* Check Out My Work Button */}
      <div className="flex justify-center bg[#e0e5ec]   py5">
        <Link
          href="https://instagram.com/aryan_brhan01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 max-w-xs w-full py-3  border border-gray-200/50 text-gray-700 rounded-full font-medium border border-gray-400 shadow[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] hover:scale-105 transition-all duration-300 "
        >
          <Briefcase size={20} />
          <span>Check Out My Work</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;
