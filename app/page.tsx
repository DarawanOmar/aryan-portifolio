import ExperienceSection from "@/components/ExpeerinceSection";
import ProfileSection from "@/components/ProfileSection";
import { portfolioData } from "./data";
// import { ThemeToggleButton } from "@/components/toggle-mode";
import { ThemeSelector } from "@/components/theme/theme-selector";
import Link from "next/link";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/50 to-background/100 relative overflow-hidden  ">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/50  rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="z-10 py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto space-y-16 ">
          <div className="fixed top-6 left-6 ">
            {/* <ThemeToggleButton /> */}
            <ThemeToggleButton
              variant="gif"
              url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3JwcXdzcHd5MW92NWprZXVpcTBtNXM5cG9obWh0N3I4NzFpaDE3byZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/WgsVx6C4N8tjy/giphy.gif"
            />
          </div>{" "}
          <div className=" fixed top-6 right-6 ">
            <ThemeSelector />
          </div>{" "}
          {/* Profile Section */}
          <ProfileSection data={portfolioData} />
          <ExperienceSection jobs={portfolioData.jobs} />
          {/* Experience Section */}
          <div className="max-w-max mx-auto flex gap-3">
            <p>Created by</p>
            <Link className="text-primary" href={"https://wa.me/9647512813327"}>
              Darawan Omar
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
