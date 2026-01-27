import HeroSection from "../common/HeroSection";

const Hero = () => {
  const menuItems = [
    { name: "Pre-School", link: "/pre-school" },
    { name: "Elementary-School", link: "/elementary-school" },
    { name: "Middle-School", link: "/middle-school" },
    { name: "High-School", link: "/high-school" },
  ];

  return (
    <div>
      <HeroSection
        bgImage="/about/hero.jpg"
        title={<>Latests News </>}
        menuItems={menuItems}
        desktopGap="gap-22"
      />
    </div>
  );
};

export default Hero;
