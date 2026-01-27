import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/middelschool/Hero";
import Welcome from "../components/middelschool/Welcome";
import Slogan from "../components/middelschool/Slogan";

// Lazy-loaded components
const Subject = lazy(() => import("../components/middelschool/Subject"));
const StateNationalAssessments = lazy(() =>
  import("../components/middelschool/StateNationalAssessments")
);
const ITBSSection = lazy(() =>

  
  import("../components/middelschool/ITBSSection")
);
const More = lazy(() => import("../components/middelschool/More"));
const Grades6to8 = lazy(() => import("../components/middelschool/Grade6to8"));
const Grade6to8Mbl = lazy(() =>
  import("../components/middelschool/Grade6to8Mbl")
);
const Learning = lazy(() => import("../components/middelschool/Learning"));
const Uniform = lazy(() => import("../components/middelschool/Uniform"));
const Patnership = lazy(() => import("../components/middelschool/patnership"));
const UniformImportance = lazy(() =>
  import("../components/middelschool/UniformImportance")
);
const Slogan2 = lazy(() => import("../components/middelschool/Slogan2"));
const CardSlider = lazy(() => import("../components/middelschool/CardSlider"));
const Cta = lazy(() => import("../components/middelschool/Cta"));

const MiddelSchool = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Slogan />

      <Suspense fallback={null}>
        <Subject />
        <StateNationalAssessments />
        <ITBSSection />
        <More />
      </Suspense>

      <Suspense fallback={null}>
        <div className="hidden md:block">
          <Grades6to8 />
        </div>
        <div className="block md:hidden">
          <Grade6to8Mbl />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Learning />
        <Uniform />
        <Patnership />
        {/* <UniformImportance /> */}
      </Suspense>

      <Suspense fallback={null}>
        <Slogan2 />
        <CardSlider />
        <Cta />
      </Suspense>
    </div>
  );
};

export default MiddelSchool;
