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
        title="          HQA Improvement Committee

 "
        menuItems={menuItems}
        desktopGap="gap-22"
      />
    </div>
  );
};

export default Hero;
