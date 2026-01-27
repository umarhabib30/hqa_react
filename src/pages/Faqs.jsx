import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/faqs/Hero";

// Lazy-loaded components
const FaqsHead = lazy(() => import("../components/faqs/Faqs.Head"));
const FAQTabs = lazy(() => import("../components/faqs/FAQTabs"));
const Slogan = lazy(() => import("../components/faqs/Slogan"));
const Cards = lazy(() => import("../components/faqs/Cards"));
const Question = lazy(() => import("../components/faqs/Question"));

const Faqs = () => {
  return (
    <div>
      <Hero />

      <Suspense fallback={null}>
        <FaqsHead />
        <FAQTabs />
      </Suspense>

      <Suspense fallback={null}>
        <Slogan />
        <Cards />
        <Question />
      </Suspense>
    </div>
  );
};

export default Faqs;
