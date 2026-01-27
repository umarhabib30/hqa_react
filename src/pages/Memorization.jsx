import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/memorization/Hero";
import Message from "../components/memorization/Message";

// Lazy-loaded components
const Slider = lazy(() => import("../components/memorization/Slider"));
const Success = lazy(() => import("../components/memorization/Success"));
const StartSection = lazy(() =>
  import("../components/memorization/StartSection")
);
const Leaders = lazy(() => import("../components/memorization/Leaders"));
const Cta = lazy(() => import("../components/memorization/Cta"));

const Memorization = () => {
  return (
    <div>
      <Hero />
      <Message />
      <Suspense fallback={null}>
        <Slider />
        <Success />
        <StartSection />
        <Leaders />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Memorization;
