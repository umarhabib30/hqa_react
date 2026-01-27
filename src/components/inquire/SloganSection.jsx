import { Parallax } from "react-parallax";
import Slogan from "./Slogan";
import InfoSection from "./InfoSection";

const SloganSection = () => {
  return (
    <div className="overflow-hidden">

      <Slogan />
      <Parallax strength={300}>
        <div className="bg-white">
          <InfoSection />
        </div>
      </Parallax>
    </div>
  );
};

export default SloganSection;
