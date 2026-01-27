import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PopupModal from "./PopupModal";
import SplashLogo from "./splashLogoVariants";
import HeroAyatSection from "../home/HeroAyatSection";
import DesktopTopBar from "./DesktopTopBar";
import NavMenuOverlay from "./NavMenuOverlay";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    submenu: [
      { name: "Admission", path: "/admission" },
      { name: "Academics", path: "/academics" },
      { name: "Tuition-Fee", path: "/tuition-fee" },
      { name: "Leadership", path: "/leadership" },
      { name: "Scholarship", path: "/scholarship" },
      { name: "Faculty", path: "/faculty" },
      { name: "Athletics ", path: "/athletics" },
      { name: "Student Life", path: "/student-life" },
      { name: "FAQs", path: "/faqs" },
    ],
  },
  {
    name: "Admission",
    path: "/admission",
    submenu: [
      { name: "Inquire", path: "/inquire" },
      { name: "FAQs", path: "/faqs" },
      { name: "Enrollement", path: "/enrollement" },
      { name: "Tuition-Fee", path: "/tuition-fee" },
      { name: "Scholarship", path: "/scholarship" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    submenu: [
      { name: "Pre-School", path: "/pre-school" },
      { name: "Elementary-School", path: "/elementary-school" },
      { name: "Middle-School", path: "/middle-school" },
      { name: "High-School", path: "/high-school" },
    ],
  },
  {
    name: "Student Life",
    path: "/student-life",
    submenu: [
      { name: "Faculty", path: "/faculty" },
      { name: "Quran Memorization", path: "/memorization" },
      { name: "Athletics", path: "/athletics" },
      { name: "Leadership", path: "/leadership" },

      { name: "Clubs", path: "/clubs-and-organizations" },
      { name: "Donation", path: "/donation" },
    ],
  },
];

const quickLinks = [
  { name: "Calendar", path: "/schoolCalendar" },
  { name: "PTO", path: "/Pto" },
  { name: "Career", path: "/career" },
  { name: "School Store", path: "https://hqasis.com/shop" },
  { name: "Fundraiser ", path: "/donation" },
  { name: "Sponsorship", path: "/sponsorship" },
  { name: "Alumni", path: "/alumni" },
  { name: "Committee", path: "/committee" },
];

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function NavbarLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [ayatAnimationComplete, setAyatAnimationComplete] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const location = useLocation();

  // Effects for Splash, Popup, and routing
  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      const popupTimer = setTimeout(() => setShowPopup(true), 500);
      return () => clearTimeout(popupTimer);
    }
  }, [showSplash]);

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
    setHovered(null);
  }, [location.pathname]);

  // Scroll handler
  const handleScroll = useCallback(() => {
    if (!ayatAnimationComplete) return;
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    const progress = Math.min(
      window.scrollY / (heroSection.offsetHeight * 0.6),
      1
    );
  }, [ayatAnimationComplete]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handlers passed to children
  const closeMenus = () => {
    setIsOpen(false);
    setHovered(null);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <SplashLogo show={showSplash} />

      {!showSplash && (
        <div>
          <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="show"
            className="px-4 sm:px-6 md:px-8 py-4 bg-white relative z-50 font-serif"
          >
            <DesktopTopBar isOpen={isOpen} setIsOpen={setIsOpen} />

            <NavMenuOverlay
              isOpen={isOpen}
              menuItems={menuItems}
              quickLinks={quickLinks}
              hovered={hovered}
              setHovered={setHovered}
              closeMenus={closeMenus}
            />
          </motion.nav>

          <main className="px-8">
            <HeroAyatSection
              onAnimationComplete={() => setAyatAnimationComplete(true)}
            />
            <PopupModal show={showPopup} onClose={() => setShowPopup(false)} />
          </main>
        </div>
      )}
    </div>
  );
}
