import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/admission/Hero";
import Message from "../components/admission/Message";

// Lazy-loaded components 
const WhyChooseUs = lazy(() => import("../components/admission/WhyChooseUs"));
const WhyChooseUsMobile = lazy(() =>
  import("../components/admission/WhyChooseUsMobile")
);
const WhyChooseUsTextMbl = lazy(() =>
  import("../components/admission/WhyChooseUsTextMbl")
);

const StepHeading = lazy(() => import("../components/admission/StepHeading"));
const Steps = lazy(() => import("../components/admission/Steps"));

const AdmissionsRequirements = lazy(() =>
  import("../components/admission/AdmissionsRequirements")
);
const AdmissionsRequirementsMobile = lazy(() =>
  import("../components/admission/AdmissionsRequirementsMobile")
);

const HoverCards = lazy(() => import("../components/admission/HoverCards"));
const Learning = lazy(() => import("../components/admission/Learning"));
const Slogan = lazy(() => import("../components/admission/Slogan"));
const Cards = lazy(() => import("../components/admission/Cards"));
const Team = lazy(() => import("../components/admission/Team"));
const Aid = lazy(() => import("../components/admission/Aid"));
const AdnmTeam = lazy(() => import("../components/admission/AdmTeam"));
const Cta = lazy(() => import("../components/admission/Cta"));

const Admission = () => {
  return (
    <div>
      <Hero />
      <Message />


      <Suspense fallback={null}>
        <div className="hidden md:block">
          <WhyChooseUs />
        </div>
        <div className="block md:hidden">
          <WhyChooseUsTextMbl />
          <WhyChooseUsMobile />
        </div>

        <StepHeading />
        <Steps />

        <div className="hidden md:block">
          <AdmissionsRequirements />
        </div>
        <div className="block md:hidden">
          <AdmissionsRequirementsMobile />
        </div>

        <HoverCards />
      </Suspense>

   
      <Suspense fallback={null}>
        <Learning />
        <Slogan />
        <Cards />
        <Team />
        <Aid />
        <AdnmTeam />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Admission;
