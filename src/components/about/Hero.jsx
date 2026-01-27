import HeroSection from "../common/HeroSection";

const Hero = () => {
  const headings = [
    { name: "Admissions", link: "/admission" },
    { name: "Academics", link: "/academics" },
    { name: "Tuition Fee", link: "/tuition-fee" },
    { name: "Leadership", link: "/leadership" },
    { name: "Scholarship", link: "/scholarship" },
    { name: "Faculty & Staff Directory", link: "/faculty" },
    { name: "Quran Memorization Program", link: "/memorization" },
    { name: "Athletics at HQA", link: "/athletics" },
    { name: "Student Life", link: "/student-life" },
    { name: "History", link: "/history" },
    { name: "FAQs", link: "/faqs" },
  ];

  return (
    <div>
      <HeroSection
        bgImage="/about/hero.jpg"
        title="About Us"
        menuItems={headings}
        desktopGap="gap-4"
      />
    </div>
  );
};

export default Hero;
