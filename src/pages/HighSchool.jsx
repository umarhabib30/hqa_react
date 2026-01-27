import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/highschool/Hero";
import Welcome from "../components/highschool/Welcome";

// Lazy-loaded components
const Values = lazy(() => import("../components/highschool/Values"));
const AdvancedAcademics = lazy(() =>
  import("../components/highschool/AdvancedAcademics")
);
const Readiness = lazy(() => import("../components/highschool/Readiness"));
const Experience = lazy(() => import("../components/highschool/Experience"));
const Grades9to12 = lazy(() => import("../components/highschool/Grade9to12"));
const Grades9to12Mbl = lazy(() =>
  import("../components/highschool/Grade9to12Mbl")
);
const Learning = lazy(() => import("../components/highschool/Learning"));
const Slogan2 = lazy(() => import("../components/highschool/Slogan2"));
const UniformImportance = lazy(() =>
  import("../components/highschool/Uniform")
);

const CardSlider = lazy(() => import("../components/highschool/CardSlider"));
const Cta = lazy(() => import("../components/highschool/Cta"));

const HighSchool = () => {
  return (
    <div>
      <Hero />
      <Welcome />

      <Suspense fallback={null}>
        <Values />
        <AdvancedAcademics />
        <Readiness />
        <Experience />
      </Suspense>

      <Suspense fallback={null}>
        <div className="hidden md:block">
          <Grades9to12 />
        </div>
        <div className="block md:hidden">
          <Grades9to12Mbl />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Learning />
        <Slogan2 />
        <UniformImportance />
        <CardSlider />
        <Cta />
      </Suspense>
    </div>
  );
};

export default HighSchool;
