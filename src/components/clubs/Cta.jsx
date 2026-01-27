import { FaArrowRight } from "react-icons/fa";
import LeaderShipPagesCta from "../common/LeaderShipPagesCta";

export default function LeadershipPage() {
  return (
    <LeaderShipPagesCta
      title="Student-Led & Teacher-Supported"
      description="All clubs are student-driven under the guidance of passionate faculty advisors. Leadership roles are available through elections and service hours can be earned for active participation."
      buttonText="About Us"
      onButtonClick={() => alert("Career clicked!")}
      bgImage="/donation/speakerbg.jpg"
    />
  );
}
