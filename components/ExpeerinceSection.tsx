import React from "react";
import { Briefcase, Video, Palette, Edit, FileVideo } from "lucide-react";
import { PortfolioData } from "@/app/_type";

interface ExperienceSectionProps {
  jobs: PortfolioData["jobs"];
}

const getJobIcon = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes("motion")) return Video;
  if (titleLower.includes("graphic")) return Palette;
  if (titleLower.includes("editor")) return FileVideo;
  return Briefcase;
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ jobs }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">
        Professional Experience
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 opacity-30"></div>

        <div className="space-y-8">
          {jobs.map((job, index) => {
            const IconComponent = getJobIcon(job.title);
            return (
              <div
                key={index}
                className="group relative flex items-start gap-6 hover:transform hover:translate-x-2 transition-all duration-300"
              >
                {/* Icon container */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-background dark:to-background/50 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900">
                    <IconComponent className="w-7 h-7 text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-muted-foreground transition-colors duration-300">
                      {job.title}
                    </h3>
                    <span className="text-sm font-semibold text-primary bg-muted-foreground/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit backdrop-blur-sm">
                      {job.duration}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    {job.company}
                  </p>

                  {/* Subtle separator line */}
                  <div className="mt-4 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
