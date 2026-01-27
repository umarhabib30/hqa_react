import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import LeaderShipPagesCta from "../common/LeaderShipPagesCta";
export default function ContactPage() {
  return (
    <LeaderShipPagesCta
      title="Keep in Touch With Your HQA Family"
      description={
        <>
          Whether you’re across the globe or just around the corner, you remain
          an important part of our story. Share your latest news, reconnect with
          classmates, and rediscover the spirit of learning and faith that
          brought us together on the hilltop.
          <br />
          <br />
          Let’s continue this journey — together.
        </>
      }
      socialIcons={[FaFacebookF, FaInstagram, FaTwitter]}
      bgImage="/alumni/bg.jpg"
    />
  );
}
