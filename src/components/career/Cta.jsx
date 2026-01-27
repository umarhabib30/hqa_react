import { FaArrowRight } from "react-icons/fa";
import LeaderShipPagesCta from "../common/LeaderShipPagesCta";

export default function LeadershipPage() {
  return (
    <LeaderShipPagesCta
      title="How to Apply"
      boldText="Ready to take the next step? Please send your resume to:"
      description={
        <>
          <p className="h2 italic"> Sr. Shamima Khalid</p>
          <a
            href="mailto:skhalid@hquranacademy.org"
            className=" h2 italic hover:underline"
          >
            skhalid@hquranacademy.org
          </a>
          <br />
          <br />
          <h2 className="h2 italic ">
            {" "}
            We will contact you if your qualifications align with our current
            needs.
          </h2>
        </>
      }
      bgImage="/memorizaation/cta.jpg"
    />
  );
}
