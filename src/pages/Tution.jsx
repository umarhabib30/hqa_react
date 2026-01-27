import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/tution/Hero";

// Lazy-loaded components
const HeritageSection = lazy(() =>
  import("../components/tution/HeritageSection")
);
const Table1 = lazy(() => import("../components/tution/Table1"));
const Table2 = lazy(() => import("../components/tution/Table2"));
const Table3 = lazy(() => import("../components/tution/Table3"));
const Learning = lazy(() => import("../components/tution/Learning"));
const Notes = lazy(() => import("../components/tution/Notes"));
const Slogan = lazy(() => import("../components/tution/Slogan"));

const Tution = () => {
  return (
    <div>
      <Hero />

      <Suspense fallback={null}>
        <HeritageSection />
        <Table1 />
        <Table2 />
        <Table3 />
      </Suspense>

      <Suspense fallback={null}>
        <Learning />
        <Slogan />
      </Suspense>

      <Suspense fallback={null}>
        <Notes />
      </Suspense>
    </div>
  );
};

export default Tution;
