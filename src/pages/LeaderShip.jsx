import { lazy, Suspense, useEffect } from "react";
import Hero from "../components/leadership/Hero";
import Rooted from "../components/leadership/Rooted";
import Trustes from "../components/leadership/Trustes";

const Tilted = lazy(() => import("../components/leadership/Tilted"));
const TiltedMbl = lazy(() => import("../components/leadership/TiltedMbl"));
const Slogan = lazy(() => import("../components/leadership/Slogan"));
const Administeration = lazy(() =>
  import("../components/leadership/Administeration")
);
const MobileAdministration = lazy(() =>
  import("../components/leadership/MobileAdministration")
);
const Philposphy = lazy(() => import("../components/leadership/Philposphy"));
const PhilposphyMbl = lazy(() =>
  import("../components/leadership/PhilposphyMbl")
);
const Action = lazy(() => import("../components/leadership/Action"));
const Cta = lazy(() => import("../components/leadership/Cta"));

const LeaderShip = () => {
  
  return (
    <div>
      <Hero />
      <Rooted />
      <Trustes />

      <Suspense fallback={null}>
        <div className="hidden md:block">
          <Tilted />
        </div>
        <div className="block md:hidden">
          <TiltedMbl />
        </div>
        <Slogan />
        <div className="hidden md:block">
          <Administeration />
        </div>
        <div className="block md:hidden">
          <MobileAdministration />
        </div>
      </Suspense>

    
      <Suspense fallback={null}>
        <div className="hidden md:block">
          <Philposphy />
        </div>
        <div className="block md:hidden">
          <PhilposphyMbl />
        </div>
        <Action />
        <Cta />
      </Suspense>
    </div>
  );
};

export default LeaderShip;