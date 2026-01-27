import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/preschool/Hero";
import Welcome from "../components/preschool/Welcome";
import Profile from "../components/preschool/Profile";
import Uniform from "../components/preschool/Unifrom";

const Learn = lazy(() => import("../components/preschool/Learn"));
const PKCurriculum = lazy(() => import("../components/preschool/PKCurriculum"));
const PKCurriculumMbl = lazy(() =>
  import("../components/preschool/PKCurriculumMbl")
);
const Slogan = lazy(() => import("../components/preschool/Slogan"));
const CardSlider = lazy(() => import("../components/preschool/CardSlider"));
const Learning = lazy(() => import("../components/preschool/Learning"));
const Cta = lazy(() => import("../components/preschool/Cta"));

// Preload lazy components
const PreSchool = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Profile />

      <Suspense fallback={null}>
        <Learn />
        <div className="hidden md:block">
          <PKCurriculum />
        </div>
        <div className="block md:hidden">
          <PKCurriculumMbl />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Slogan />
        <CardSlider />
        <Learning />
        <Uniform />
        <Cta />
      </Suspense>
    </div>
  );
};

export default PreSchool;
