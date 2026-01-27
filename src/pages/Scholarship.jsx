import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/scholarship/Hero";

// Lazy-loaded components
const ScholarshipSection = lazy(() =>
  import("../components/scholarship/ScholarshipSection")
);
const RashidScholarship = lazy(() =>
  import("../components/scholarship/RashidScholarship")
);
const ScholarshipCriteria = lazy(() =>
  import("../components/scholarship/ScholarshipCriteria")
);
const ApplicantQualifications = lazy(() =>
  import("../components/scholarship/ApplicantQualifications")
);
const LearningInput = lazy(() =>
  import("../components/scholarship/LearningInput")
);
const Slogan = lazy(() => import("../components/scholarship/Slogan"));
const CardSlider = lazy(() => import("../components/scholarship/CardSlider"));
const Notes = lazy(() => import("../components/scholarship/Notes"));

const Scholarship = () => {
  return (
    <div>
      <Hero />

      <Suspense fallback={null}>
        <ScholarshipSection />
        <RashidScholarship />
        <ScholarshipCriteria />
        <ApplicantQualifications />
      </Suspense>

      <Suspense fallback={null}>
        <LearningInput />
        <Slogan />
      </Suspense>

      <Suspense fallback={null}>
        <CardSlider />
        <Notes />
      </Suspense>
    </div>
  );
};

export default Scholarship;
