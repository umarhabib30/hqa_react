import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/MainNavbar/Navbar";
import Footer from "../components/footer/Footer";
import RedFooter from "../components/footer/RedFooter";
import MobileFooter from "../components/footer/MobileFooter";

const MainLayout = () => {
  const location = useLocation();

  const redFooterRoutes = [
    "/enrollement",
    "/inquire",
    "/faqs",
    "/scholarship",
    "/pre-school",
    "/middle-school",

    "/high-school",
    "/elementary-school",
  ];

  const showRedFooter = redFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        {showRedFooter ? <RedFooter /> : <Footer />}
      </div>

      {/* Mobile Footer */}
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </>
  );
};

export default MainLayout;
