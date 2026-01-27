import { Suspense, lazy, useEffect } from "react";
import Hero from "../components/enrollement/Hero";

// Lazy-loaded components
const Heritage = lazy(() =>
  import("../components/enrollement/HeritageSection")
);
const Table3 = lazy(() => import("../components/enrollement/Table3"));
const AdmissionDates = lazy(() =>
  import("../components/enrollement/AdmissionDates")
);
const Steps = lazy(() => import("../components/enrollement/Steps"));
const Notes = lazy(() => import("../components/enrollement/Notes"));
const Slogan = lazy(() => import("../components/enrollement/Slogan"));
const ReEnrollment = lazy(() =>
  import("../components/enrollement/ReEnrollment")
);
const Learning = lazy(() => import("../components/enrollement/Learning"));
const Cta = lazy(() => import("../components/enrollement/Cta"));

const Enrollement = () => {
  return (
    <div>
      <Hero />

      <Suspense fallback={null}>
        <Heritage />
        <Table3 />
        <AdmissionDates />
      </Suspense>

      <Suspense fallback={null}>
        <Steps />
        <Notes />
      </Suspense>

      <Suspense fallback={null}>
        <Slogan />
        <ReEnrollment />
      </Suspense>

      <Suspense fallback={null}>
        <Learning />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Enrollement;
