import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SocialLinks } from "@/components/portfolio/SocialLinks";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      <PortfolioNavbar />
      <div id="home">
        <PortfolioHero />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <SocialLinks />
      <ContactSection />
      <PortfolioFooter />
    </main>
  );
};

export default Index;