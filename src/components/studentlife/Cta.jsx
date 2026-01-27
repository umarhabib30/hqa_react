import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import LeaderShipPagesCta from "../common/LeaderShipPagesCta";

export default function ContactPage() {
  return (
    <LeaderShipPagesCta
      title="Ready to Experience Life at HQA?"
      description="Come be part of a community where students learn, lead, and live their faith with confidence. Explore our Admissions process to learn how to join the HQA family."
      socialIcons={[FaFacebookF, FaInstagram, FaXTwitter]}
      bgImage="/donation/speakerbg.jpg"
    />
  );
}
