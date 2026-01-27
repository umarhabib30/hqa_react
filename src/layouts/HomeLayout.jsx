import { Outlet } from "react-router-dom";
import NavbarLayout from "../components/HomeNavbar/HomeNavbar";
import Footer from "../components/footer/Footer";
import MobileFooter from "../components/footer/MobileFooter";

const HomeLayout = () => (
  <>
    <NavbarLayout />
    <main>
      <Outlet />
    </main>

    <div className="hidden md:block">
      <Footer />
    </div>
    <div className="block md:hidden">
      <MobileFooter />
    </div>
  </>
);

export default HomeLayout;
