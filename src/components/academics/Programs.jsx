import { useState } from "react";
import Schools from "./Schools";
import Foundation from "./Foundation";
import FoundationMobile from "./FoundationMobile";

const Programs = () => {
  const [selectedLevel, setSelectedLevel] = useState("Pre School");

  return (
    <div>
      <Schools
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />
      <div className="block md:hidden">
        <FoundationMobile selectedLevel={selectedLevel} />
      </div>

      <div className="hidden md:block">
        <Foundation selectedLevel={selectedLevel} />
      </div>
    </div>
  );
};

export default Programs;
