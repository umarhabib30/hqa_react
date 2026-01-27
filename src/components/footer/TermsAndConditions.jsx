import React from "react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white text-[#00285E] px-6 py-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-sm mb-8">Houston Quran Academy Website • Effective Date: 01/15/2026</p>

        <Section title="Introduction">
          These Terms and Conditions govern the use of the Houston Quran Academy website and its online services. By accessing or using this website, you agree to these terms.
        </Section>

        <Section title="1. Website Use">
          <p>This website is intended for:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Parents and guardians</li>
            <li>Students</li>
            <li>Staff and authorized users</li>
          </ul>
          <p className="mt-2">Users agree to use the website for lawful and school-related purposes only.</p>
        </Section>

        <Section title="2. Accuracy of Information">
          Houston Quran Academy strives to ensure accuracy of website content but does not guarantee that all information is current or error-free. Content may be updated at any time without notice.
        </Section>

        <Section title="3. Intellectual Property">
          All website content, including text, logos, images, documents, and graphics, is the property of Houston Quran Academy and may not be reproduced, distributed, or modified without written permission.
        </Section>

        <Section title="4. Online Forms and Submissions">
          Information submitted through online forms must be accurate and complete. Submission constitutes parental consent for use of the information for educational and administrative purposes, consistent with our Privacy Policy.
        </Section>

        <Section title="5. User Accounts and Security">
          Certain services may require access through the Monefaction platform. Users are responsible for maintaining account security and all activities conducted under their credentials.
        </Section>

        <Section title="6. Third-Party Links">
          This website may contain links to third-party websites. Houston Quran Academy is not responsible for the content, privacy practices, or policies of those sites.
        </Section>

        <Section title="7. Limitation of Liability">
          <ul className="list-disc ml-6 space-y-1">
            <li>Website downtime or technical interruptions</li>
            <li>Unauthorized access beyond reasonable security measures</li>
            <li>Damages resulting from misuse of the website or systems</li>
          </ul>
        </Section>

        <Section title="8. Privacy">
          Use of this website is subject to the Houston Quran Academy Privacy Policy, including FERPA and COPPA compliance.
        </Section>

        <Section title="9. Modifications to Terms">
          Houston Quran Academy reserves the right to modify these Terms and Conditions at any time. Continued use of the website constitutes acceptance of updated terms.
        </Section>

        <Section title="10. Governing Law">
          These Terms and Conditions are governed by the laws of the State of Texas, without regard to conflict-of-law principles.
        </Section>

        <Section title="11. Contact Information">
          <p>Houston Quran Academy</p>
          <p>Email: <a href="mailto:Admin@hquranacademy.org" className="underline">Admin@hquranacademy.org</a></p>
          <p>Phone: 281-717-4622</p>
        </Section>

        <footer className="mt-12 text-center text-sm border-t pt-4 border-[#00285E]">
          © {new Date().getFullYear()} Houston Quran Academy
        </footer>
      </div>
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2 border-l-4 border-[#00285E] pl-3">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}