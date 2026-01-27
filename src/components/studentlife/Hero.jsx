import HeroSection from "../common/HeroSection";

const Hero = () => {
  const menuItems = [
    // { name: "Faculty", link: "/faculty" },
    { name: "Academics", link: "/academics" },

    { name: "Quran Memorization", link: "/memorization" },
    { name: "Athletics", link: "/athletics" },
    { name: "Student Life", link: "/student-life" },
    // { name: "Career", link: "/career" },
    { name: "Scholarship", link: "/scholarship" },

    { name: "Clubs", link: "/clubs-and-organizations" },
  ];
  return (
    <div>
      <HeroSection
        bgImage="/faculty/hero.jpg"
        title={
          <>
            {" "}
            Student Life at Houston <br /> Quran Academy{" "}
          </>
        }
        menuItems={menuItems}
        desktopGap="gap-12"
      />
    </div>
  );
};

export default Hero;
