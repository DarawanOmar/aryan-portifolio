"use client";
import ExperienceSection from "./_components/ExpeerinceSection";
import ProfileSection from "./_components/ProfileSection";
import { portfolioData } from "./data";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Profile Section */}
          <ProfileSection data={portfolioData} />

          {/* Experience Section */}
          <ExperienceSection jobs={portfolioData.jobs} />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100/50 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default App;

// import Image from "next/image";
// import {
//   Github,
//   Linkedin,
//   Send,
//   Mail,
//   Instagram,
//   Facebook,
//   MessageSquare,
// } from "lucide-react";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-white via-gray-700 to-gray-900 flex flex-col items-center justify-center p-8">
//       <div className="max-w-2xl w-full space-y-8 text-center">
//         {/* Profile Image */}
//         <div className="relative mx-auto w-40 h-40 group">
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
//           <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-200/60 backdrop-blur-sm">
//             <Image
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
//               alt="Profile"
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//           </div>
//         </div>

//         {/* Name and Title */}
//         <div className="space-y-2">
//           <h1 className="text-5xl font-bold text-gray-800 mb-2">
//             Alex Johnson
//           </h1>
//           <p className="text-xl text-gray-600 font-light">
//             Full Stack Developer
//           </p>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center space-x-4 flex-wrap gap-2">
//           <a
//             href="https://linkedin.com"
//             className="group p-3 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-200/80 transition-all duration-300 hover:scale-110"
//           >
//             <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
//           </a>
//           <a
//             href="https://github.com"
//             className="group p-3 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-200/80 transition-all duration-300 hover:scale-110"
//           >
//             <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
//           </a>
//           <a
//             href="https://instagram.com"
//             className="group p-3 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-200/80 transition-all duration-300 hover:scale-110"
//           >
//             <Instagram className="w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" />
//           </a>
//           <a
//             href="https://facebook.com"
//             className="group p-3 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-200/80 transition-all duration-300 hover:scale-110"
//           >
//             <Facebook className="w-6 h-6 text-gray-700 group-hover:text-blue-700 transition-colors" />
//           </a>
//           <a
//             href="https://snapchat.com"
//             className="group p-3 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-200/80 transition-all duration-300 hover:scale-110"
//           >
//             <svg
//               className="w-6 h-6 text-gray-700 group-hover:text-yellow-500 transition-colors"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.422.083.684-.09.764-.293 1.699-.332 1.939-.051.402-.402.487-.402.487s-1.025-.334-1.67-1.302c-.645-.969-.645-4.084 0-6.784C5.112 7.334 8.024 5.052 12.017 5.052c4.624 0 8.248 3.278 8.248 7.674 0 4.572-2.878 8.25-6.873 8.25-1.341 0-2.605-.7-3.038-1.531 0 0-.667 2.545-.829 3.175-.302 1.155-1.115 2.6-1.659 3.484 1.251.194 2.535.297 3.847.297 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
//             </svg>
//           </a>
//           <a
//             href="https://threads.net"
//             className="group p-3 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-200/80 transition-all duration-300 hover:scale-110"
//           >
//             <MessageSquare className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
//           </a>
//           <a
//             href="https://whatsapp.com"
//             className="group p-3 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-200/80 transition-all duration-300 hover:scale-110"
//           >
//             <svg
//               className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
//             </svg>
//           </a>
//         </div>

//         {/* Contact Buttons */}
//         <div className="flex flex-row gap-4 justify-center">
//           <a
//             href="https://t.me/alexjohnson"
//             className="group flex items-center justify-center gap-3 px-6 py-3 max-w-[150px] w-full bg-gradient-to-tr from-black via-black/75 to-black/90 rounded-2xl text-white font-medium hover:from-gray-900 hover:to-gray-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gray-500/25"
//           >
//             <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//             Telegram
//           </a>
//           <a
//             href="mailto:alex@example.com"
//             className="group flex items-center justify-center gap-3 px-6 py-3 max-w-[150px] w-full bg-gradient-to-tr from-black via-black/75 to-black/90 rounded-2xl text-white font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gray-500/25"
//           >
//             <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
//             Whatsup
//           </a>
//         </div>

//         {/* Experience Section */}
//         <div className="bg-gray-100/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 space-y-4">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             Experience
//           </h2>
//           <p className="leading-7 font-normal">
//             Passionate full-stack developer with 5+ years of experience building
//             scalable web applications. Specialized in React, Next.js, Node.js,
//             and modern cloud technologies. I love creating beautiful, performant
//             user experiences and robust backend systems that solve real-world
//             problems.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
