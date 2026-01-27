import { lazy, Suspense, useEffect } from "react";
import Hero from "../components/faculty/Hero";
import Staff from "../components/faculty/Staff";

// Lazy-loaded components
const Family = lazy(() => import("../components/faculty/Family"));
const FamilyMobile = lazy(() => import("../components/faculty/FamilyMobile"));
const StaffSection = lazy(() => import("../components/faculty/StaffSection"));
const Campus = lazy(() => import("../components/faculty/Campus"));
const MobileCampus = lazy(() => import("../components/faculty/MobileCampus"));
const Slogan = lazy(() => import("../components/faculty/Slogan"));
const Why = lazy(() => import("../components/faculty/Why"));
const Cta = lazy(() => import("../components/faculty/Cta"));

const Faculty = () => {
  return (
    <div>
      <Hero />
      <Staff />

      <Suspense fallback={null}>
        <div className="hidden md:block">
          <Family />
        </div>
        <div className="block md:hidden">
          <FamilyMobile />
        </div>
        <StaffSection />
        <div className="hidden md:block">
          <Campus />
        </div>
        <div className="block md:hidden">
          <MobileCampus />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Slogan />
        <Why />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Faculty;
