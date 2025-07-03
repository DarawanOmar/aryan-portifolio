import React from "react";

interface ExperienceSectionProps {
  experience: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience</h2>
      <p className="text-gray-600 text-lg leading-relaxed">{experience}</p>
    </div>
  );
};

export default ExperienceSection;
