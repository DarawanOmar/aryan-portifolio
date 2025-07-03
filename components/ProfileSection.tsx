import React from "react";
import { Send, AtSign, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { PortfolioData } from "@/app/_type";

interface ProfileSectionProps {
  data: PortfolioData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <FaLinkedin size={24} />;
      case "instagram":
        return <RiInstagramFill size={24} />;
      case "facebook":
        return <FaFacebookF size={24} />;
      case "at-sign":
        return <AtSign size={24} />;
      case "message-circle":
        return <MessageCircle size={24} />;
      case "send":
        return <Send size={20} />;
      case "behance":
        return <FaBehance size={24} />;
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
              src={data.profileImage} // is "/ara.jpg"
              alt={data.name}
              height={128}
              width={128}
              priority
              quality={85}
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
              className="relative h-32 w-32 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 object-cover object-top rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="space-y-2 ">
        <h1 className="text-4xl font-bold text-primary">{data.name}</h1>
        <p className="text-xl text-muted-foreground font-medium">
          {data.jobTitle}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center flex-wrap gap-4 max-w-md mx-auto">
        {data.socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="p-3 rounded-full bg-white/80 dark:bg-black text-primary backdrop-blur-sm border  border-gray-200 dark:border-muted-foreground/40  hover:bg-gray-50 hover:scale-110 transition-all duration-300 hover:shadow-lg shadow-md"
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
            aria-label={
              method.type.charAt(0).toUpperCase() + method.type.slice(1)
            }
            className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/5 text-primary rounded-full font-medium  hover:scale-105 transition-all duration-300 shadow-lg  hover:shadow-xl"
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
          aria-label="Check Out My Work"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 max-w-xs w-full py-3   text-foreground rounded-full font-medium border border-gray-400 shadow[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] hover:scale-105 transition-all duration-300 "
        >
          <MdWork size={20} className="text-primary" />
          <span>Check Out My Work</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;
