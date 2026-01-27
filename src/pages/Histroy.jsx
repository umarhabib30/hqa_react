import React from "react";
import Hero from "../components/histroy/Hero";
import Message from "../components/histroy/Message";
import Tilted from "../components/histroy/Tilted";
import Foundation from "../components/histroy/Foundation";
import Cta from "../components/histroy/Cta";
import TiltedMobile from "../components/histroy/TiltedMobile";
import Milestone from "../components/histroy/Milestone";
import Timeline from "../components/histroy/Timeline";
import Steps from "../components/histroy/steps";

const Histroy = () => {
  return (
    <div>
      <Hero />
      <Message />
      {/* Mobile version */}
      <div className="block md:hidden"></div>
      <Timeline /> <Steps />
      <Foundation />
      <Milestone />
      {/* Desktop version */}
      <div className="hidden md:block">
        <Tilted />
      </div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <TiltedMobile />
      </div>
      <Cta />
    </div>
  );
};

export default Histroy;
