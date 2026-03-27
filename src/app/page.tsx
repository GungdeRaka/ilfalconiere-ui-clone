import Hero from "@/components/sections/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AccomodationSection from "@/components/sections/AccommoodationSection";

export default function Home() {
  return (
    <div className="w-full scroll-smoothw flex flex-col items-center">
      {/* 1. Hero Section with Video */}
      <Hero />
      {/* Experience section */}
      <ExperienceSection />

      {/* Accommodation */}
      <AccomodationSection/>
      {/* RestaurantSection */}

      {/* Spa Sectiom */}
      {/* Gallery Secyion */}
    </div>
  );
}