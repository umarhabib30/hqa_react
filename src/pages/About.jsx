import { lazy, Suspense, useState, useEffect } from "react";

import Hero from "../components/about/Hero";
import Welcome from "../components/about/Welcome";

// Lazy-loaded sections
const WhoWeAre = lazy(() => import("../components/about/WhoWeAre"));
const HeritageSection = lazy(() =>
  import("../components/about/HeritageSection")
);
const Ethos = lazy(() => import("../components/about/Ethos"));
const BalanceSection = lazy(() => import("../components/about/BalanceSection"));
const Vision = lazy(() => import("../components/about/Vision"));
const StudentGrowth = lazy(() => import("../components/about/StudentGrowth"));
const Future = lazy(() => import("../components/about/Future"));
const Connect = lazy(() => import("../components/about/Connect"));
const Milestones = lazy(() => import("../components/about/Milestones"));
const MileStonesMbl = lazy(() => import("../components/about/MileStonesMbl"));

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <Hero />
      <Welcome />

      <Suspense fallback={null}>
        <WhoWeAre />
        <HeritageSection />
        <Ethos />
        <BalanceSection />
      </Suspense>

      <Suspense fallback={null}>
        <Vision />
        {isMobile ? <MileStonesMbl /> : <Milestones />}
        <StudentGrowth />
        <Future />
      </Suspense>

      <Suspense fallback={null}>
        <Connect />
      </Suspense>
    </div>
  );
};

export default About;
