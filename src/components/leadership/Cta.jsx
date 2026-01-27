import { FaArrowRight } from "react-icons/fa";
import LeaderShipPagesCta from "../common/LeaderShipPagesCta";
import { useNavigate } from "react-router-dom"; 

export default function LeadershipPage() {
  const navigate = useNavigate();

  return (
    <LeaderShipPagesCta
      title="Connect with Our"
      highlight="Leadership"
      description="We believe in open doors and open hearts. Whether you're a parent, alumni, community partner, or prospective family — we welcome your ideas, feedback, and support."
      buttonText="Careers"
      onButtonClick={() => navigate("/career")} 
      bgImage="/donation/speakerbg.jpg"
    />
  );
}
