import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/career/Hero";
import WelcomeMsg from "../components/career/WelcomeMsg";
import JobBoard from "../components/career/JobBoard";

// Lazy-loaded components
const WhyChooseUs = lazy(() => import("../components/career/WhyChooseUs"));
const WhyChooseUsMobile = lazy(() =>
  import("../components/career/WhyChooseUsMobile")
);
const Leadership = lazy(() => import("../components/career/Leadership"));
const Question = lazy(() => import("../components/career/Question"));
const Slogan = lazy(() => import("../components/career/Slogan"));
const Cta = lazy(() => import("../components/career/Cta"));

const Career = () => {
  return (
    <div>
      <Hero />
      <WelcomeMsg />
      <JobBoard />

      <Suspense fallback={null}>
        <div className="hidden md:block">
          <WhyChooseUs />
        </div>
        <div className="block md:hidden">
          <WhyChooseUsMobile />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Leadership />
        <Question />
        <Slogan />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Career;
