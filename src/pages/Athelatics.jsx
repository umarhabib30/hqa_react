import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/athelatics/Hero";
import Hqa from "../components/athelatics/Hqa";
import Pic from "../components/athelatics/Pic";

// Lazy-loaded components
const Athletics = lazy(() => import("../components/athelatics/Athletics"));
const PracticeGameSchedules = lazy(() =>
  import("../components/athelatics/PracticeGameSchedules")
);
const Slider = lazy(() => import("../components/athelatics/Slider"));
const Balance = lazy(() => import("../components/athelatics/Balance"));
const Gallery = lazy(() => import("../components/athelatics/Gallery"));

const Athelatics = () => {
  return (
    <div>
      <Hero />
      <Hqa />
      <Pic />

      <Suspense fallback={null}>
        <Athletics />
        <PracticeGameSchedules />
        <Slider />
        <Balance />
        <Gallery />
      </Suspense>
    </div>
  );
};

export default Athelatics;
