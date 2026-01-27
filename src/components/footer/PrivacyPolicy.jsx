import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#00285E] px-6 py-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm mb-8">
          Houston Quran Academy • Effective Date: 01/15/2026
        </p>

        <Section title="Introduction">
          Houston Quran Academy ("we," "our," or "us") is committed to
          protecting the privacy and personal information of our students,
          parents, guardians, staff, and website visitors. This Privacy Policy
          explains how information is collected, used, protected, and disclosed
          through our website and school-related services in compliance with
          FERPA and the Children’s Online Privacy Protection Act (COPPA).
        </Section>

        <Section title="1. Information We Collect">
          <SubTitle>a. Personal Information</SubTitle>
          <ul className="list-disc ml-6 space-y-1">
            <li>Parent/guardian names</li>
            <li>Student names, grade levels, and dates of birth</li>
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Mailing addresses</li>
            <li>Admissions, enrollment, and inquiry information</li>
          </ul>

          <SubTitle className="mt-4">b. Non-Personal Information</SubTitle>
          <ul className="list-disc ml-6 space-y-1">
            <li>Browser and device type</li>
            <li>IP address</li>
            <li>Website usage data</li>
          </ul>
        </Section>

        <Section title="2. How We Use Information">
          <ul className="list-disc ml-6 space-y-1">
            <li>Process admissions and enrollment</li>
            <li>Maintain academic and student records</li>
            <li>Communicate school-related updates</li>
            <li>Manage tuition and billing</li>
            <li>Comply with legal requirements</li>
          </ul>
        </Section>

        <Section title="3. Student Information & FERPA">
          Student records are maintained in compliance with FERPA and are used
          only for legitimate educational purposes. Access is limited to
          authorized personnel and is not disclosed without parental consent
          unless permitted by law.
        </Section>

        <Section title="4. COPPA Compliance">
          We do not knowingly collect personal information directly from
          children under 13 without verifiable parental consent. Parents may
          review, request deletion, or refuse further use of their child’s
          information by contacting school administration.
        </Section>

        <Section title="5. Monefaction School Management System">
          Houston Quran Academy uses Monefaction to securely manage enrollment,
          attendance, academic progress, communication, and billing. Monefaction
          operates as a school-authorized service provider under FERPA and
          COPPA.
        </Section>

        <Section title="6. Third-Party Service Providers">
          Trusted providers may be used for website hosting, secure
          communication, online forms, and payment processing. These providers
          are required to safeguard all information.
        </Section>

        <Section title="7. Cookies & Tracking">
          Cookies may be used to improve functionality and monitor traffic. We
          do not use cookies to collect personal information from children under
          13.
        </Section>

        <Section title="8. Data Security">
          Reasonable administrative, technical, and physical safeguards are used
          to protect personal information. No system is completely secure.
        </Section>

        <Section title="9. Information Sharing">
          We do not sell or rent information. Disclosure occurs only to
          authorized staff, approved providers, or when required by law.
        </Section>

        <Section title="10. Parental Rights">
          Parents may review records, request corrections, request deletion
          where permitted, or withdraw consent for future collection.
        </Section>

        <Section title="11. Policy Updates">
          This policy may be updated periodically. Changes will be posted with a
          revised effective date.
        </Section>

        <Section title="12. Contact Information">
          <p>Houston Quran Academy</p>
          <p>
            Email:{" "}
            <a href="mailto:Admin@hquranacademy.org" className="underline">
              Admin@hquranacademy.org
            </a>
          </p>
          <p>Phone: 281-717-4622</p>
        </Section>

        <footer className="mt-12 text-center text-sm border-t pt-4 border-[#00285E]">
          © {new Date().getFullYear()} Houston Quran Academy
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2 border-l-4 border-[#00285E] pl-3">
        {title}
      </h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function SubTitle({ children, className = "" }) {
  return <h3 className={`font-semibold mt-3 ${className}`}>{children}</h3>;
}
