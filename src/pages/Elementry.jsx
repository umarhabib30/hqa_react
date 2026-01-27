import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/elementary/Hero";
import Welcome from "../components/elementary/Welcome";
import Experience from "../components/elementary/Experience";
import BenchMark from "../components/elementary/BenchMark";
import ITBSSection from "../components/elementary/ITBSSection";

// Lazy-loaded components
const Tilted = lazy(() => import("../components/elementary/Tilted"));
const TiltedMobile = lazy(() =>
  import("../components/elementary/TiltedMobile")
);

const StudentLife = lazy(() => import("../components/elementary/StudentLife"));
const Grades1to5 = lazy(() => import("../components/elementary/Grade1to5"));
const Grade1to5Mbl = lazy(() =>
  import("../components/elementary/Grade1to5Mbl")
);
const Learning = lazy(() => import("../components/elementary/Learning"));
const Uniform = lazy(() => import("../components/elementary/Uniform"));
const Patnership = lazy(() => import("../components/elementary/patnership"));
const UniformImportance = lazy(() =>
  import("../components/elementary/UniformImportance")
);
const Slogan2 = lazy(() => import("../components/elementary/Slogan2"));
const CardSlider = lazy(() => import("../components/elementary/CardSlider"));
const Cta = lazy(() => import("../components/elementary/Cta"));

const Elementry = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Experience />
      <BenchMark />
      <ITBSSection />

      <Suspense fallback={null}>
        <div className="hidden md:block">
          <Tilted />
        </div>
        <div className="block md:hidden">
          <TiltedMobile />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <StudentLife />

        <div className="hidden md:block">
          <Grades1to5 />
        </div>
        <div className="block md:hidden">
          <Grade1to5Mbl />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Learning />
        {/* <Uniform /> */}
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

export default Elementry;
