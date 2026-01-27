import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/studentlife/Hero";
import Life from "../components/studentlife/Life";
import Message from "../components/studentlife/Message";

// Lazy-loaded components
const Slider = lazy(() => import("../components/studentlife/Slider"));
const Programs = lazy(() => import("../components/studentlife/Programs"));
const Events = lazy(() => import("../components/studentlife/Events"));
const Community = lazy(() => import("../components/studentlife/Community"));
const Cta = lazy(() => import("../components/studentlife/Cta"));

const StudentLife = () => {
  return (
    <div>
      <Hero />
      <Life />
      <Message />

      <Suspense fallback={null}>
        <Slider />
        <Programs />
        <Events />
        <Community />
        <Cta />
      </Suspense>
    </div>
  );
};

export default StudentLife;
