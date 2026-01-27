import HeroSection from "../common/HeroSection";

const Hero = () => {
  const menuItems = [
    { name: "Inquire", link: "/inquire" },
    { name: "Enrollment", link: "/enrollement" }, 
    { name: "FAQs", link: "/faqs" },
    { name: "Tuition Fee", link: "/tuition-fee" },
    { name: "Scholarship", link: "/scholarship" },
  ];

  return (
    <div>
      <HeroSection
        bgImage="/about/hero.jpg"
        title="Inquire About Admission
"
        menuItems={menuItems}
        desktopGap="gap-18"
      />
    </div>
  );
};

export default Hero;
