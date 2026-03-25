import Hero from "@/components/sections/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero Section with Video */}
      <Hero />
      <ExperienceSection />
      {/* Experience section */}
    </div>
  );
}