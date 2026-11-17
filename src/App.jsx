import { lazy, Suspense } from "react";
import IntroHero from "./components/IntroHero.jsx";
import PosterHero from "./components/PosterHero.jsx";
import CylinderHero from "./components/CylinderHero.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import { site } from "./data/site";

// Three.js is heavy: load the skills section separately so the page shows up fast
const SkillsKeyboard = lazy(() => import("./components/SkillsKeyboard.jsx"));

// First screen style, chosen in site.js: "classic" or "poster"
const Intro = site.intro === "poster" ? PosterHero : IntroHero;

export default function App() {
  return (
    <main>
      <Intro />
      <CylinderHero />
      {/* Same dark color as the skills section, so there is no light flash while it loads */}
      <Suspense fallback={<section id="skills" style={{ minHeight: "100vh", background: "#060608" }} />}>
        <SkillsKeyboard />
      </Suspense>
      <Resume />
      <Contact />
    </main>
  );
}
