/**
 * Main resume page — the single-page layout for alexkurata.com.
 *
 * Renders hero → experience → skills → education → footer,
 * all layered over the ambient particle background.
 */

import HeroSection from "app/components/HeroSection";
import ExperienceSection from "app/components/ExperienceSection";
import SkillsSection from "app/components/SkillsSection";
import EducationSection from "app/components/EducationSection";
import Footer from "app/components/Footer";
import Navigation from "app/components/Navigation";

export default function Index() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <Footer />
    </>
  );
}
