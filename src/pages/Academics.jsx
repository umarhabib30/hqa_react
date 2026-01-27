import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/academics/Hero";
import Welcome from "../components/academics/Welcome";
import Hours from "../components/academics/Hours";

// Lazy-loaded components
const Programs = lazy(() => import("../components/academics/Programs"));
const Growth = lazy(() => import("../components/academics/Growth"));
const Profile = lazy(() => import("../components/academics/Profile"));
const SignatureCenters = lazy(() =>
  import("../components/academics/SignatureCenters")
);
const CardSlider = lazy(() => import("../components/academics/CardSlider"));
const Slogan = lazy(() => import("../components/academics/Slogan"));
const Learning = lazy(() => import("../components/academics/Learning"));
const Next = lazy(() => import("../components/academics/Next"));
const Cta = lazy(() => import("../components/academics/Cta"));
const Academics = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Hours />

      <Suspense fallback={null}>
        <Programs />
        <Growth />
        {/* <Profile /> */}
      </Suspense>

      <Suspense fallback={null}>
        <SignatureCenters />
        <CardSlider />
      </Suspense>

      <Suspense fallback={null}>
        <Slogan />
        <Learning />
        <Next />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Academics;
