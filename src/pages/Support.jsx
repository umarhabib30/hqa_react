import { lazy, Suspense } from "react";

import Hero from "../components/support/Hero";
import SupportHuston from "../components/support/SupportHuston";

const WaysToGiveSection = lazy(() => import("../components/support/WaysToGiveSection"));
const DonateSection = lazy(() => import("../components/support/DonateSection"));

const Support = () => {
  return (
    <div>
   
      <Hero />
      <SupportHuston />

  
      <Suspense fallback={null}>
        <WaysToGiveSection />
        <DonateSection />
      </Suspense>
    </div>
  );
};

export default Support;