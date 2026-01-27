import HeroSection from "../common/HeroSection";

const Hero = () => {
  const menuItems = [
    { name: "Faculty", link: "/faculty" },
    { name: "Quran Memorization", link: "/memorization" },
    { name: "Athletics", link: "/athletics" },
    { name: "Student Life", link: "/student-life" },
    { name: "Career", link: "/career" },
    { name: "Clubs", link: "/clubs-and-organizations" },
  ];
  return (
    <div>
      <HeroSection
        bgImage="/about/hero.jpg"
        title={<>Athletics at HQA </>}
        menuItems={menuItems}
        desktopGap="gap-12"
      />
    </div>
  );
};

export default Hero;
