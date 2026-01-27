import { FaArrowRight } from "react-icons/fa";
import LeaderShipPagesCta from "../common/LeaderShipPagesCta";

export default function LeadershipPage() {
  return (
    <LeaderShipPagesCta
      title="Join a Legacy of Excellence"
      description="Give your child the opportunity to go beyond memorization. Let them live the Quran, understand its message, and grow into someone who embodies its light."
      buttonText="Schedule a Tour"
      onButtonClick={() =>
        window.open("https://hqasis.com/visitor/form", "_blank")
      }
      bgImage="/memorizaation/cta.jpg"
    />
  );
}
