import { HeroSection } from "./Components/HeroSection/HeroSection";
import { OurStory } from "./Components/OurStory/OurStory";
import { OurCoreValues } from "./Components/OurCoreValues/OurCoreValues";
import { Team } from "./Components/Team/Team";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { Partners } from "./Components/Partners/Partners";

const About = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <HeroSection />
      <OurStory />
      <OurCoreValues />
      <Team />
      <Testimonials />
      <Partners />
    </div>
  );
};

export default About;
