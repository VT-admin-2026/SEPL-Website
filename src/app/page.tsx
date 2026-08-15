import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisualShowcase from "@/components/sections/VisualShowcase";
import WhyChoose from "@/components/sections/WhyChoose";
import Services from "@/components/sections/Services";
import CompanyDetails from "@/components/sections/CompanyDetails";
import OurTeam from "@/components/sections/OurTeam";
import GovernmentAssociations from "@/components/sections/GovernmentAssociations";
import TradeMarks from "@/components/sections/TradeMarks";
import Projects from "@/components/sections/Projects";
import OngoingProjects from "@/components/sections/OngoingProjects";
import Director from "@/components/sections/Director";
import OtherActivities from "@/components/sections/OtherActivities";
import CompanyTurnover from "@/components/sections/CompanyTurnover";
import Statistics from "@/components/sections/Statistics";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VisualShowcase />
        <WhyChoose />
        <Services />
        <CompanyDetails />
        <OurTeam />
        <GovernmentAssociations />
        <TradeMarks />
        <Projects />
        <OngoingProjects />
        <Director />
        <OtherActivities />
        <CompanyTurnover />
        <Statistics />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
