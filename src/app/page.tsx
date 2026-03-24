import Hero from "@/components/sections/Hero";
import AnimatedDivider from "@/components/ui/AnimatedDevider";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero Section with Video */}
      <Hero />

      {/* Spacer to simulate scrolling down to the first section */}
      <div className="h-32 w-full bg-brand-cream" />

      {/* 2. Test the Animated Divider */}
      <div className="w-full max-w-350 px-6 md:px-12 py-16 bg-brand-cream">
        

        <AnimatedDivider direction="left-to-right" />

        <div className="h-[50vh]" /> {/* Just extra space to test scrolling */}
      </div>
    </div>
  );
}