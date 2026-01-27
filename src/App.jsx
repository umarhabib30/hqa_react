import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SchoolCalendar from "./components/calender/SchoolCalendar";
import ScrollToTop from "./components/common/ScrollToTop";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import TermsAndConditions from "./components/footer/TermsAndConditions";
import HomeLayout from "./layouts/HomeLayout";
import MainLayout from "./layouts/MainLayout";
import Committee from "./pages/Committee";
import EventDetail from "./pages/EventDetailPage";
import News from "./pages/News";
import Pto from "./pages/Pto";
import Reservation from "./pages/Reservation";
import SponsorShip from "./pages/SponsorShip";
import Support from "./pages/Support";
import Form from "./components/donationForm/Form";

// --- Lazy load pages ---
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Admission = lazy(() => import("./pages/Admission"));
const Academics = lazy(() => import("./pages/Academics"));
const Enrollement = lazy(() => import("./pages/Enrollement"));
const PreSchool = lazy(() => import("./pages/PreSchool"));
const Tuition = lazy(() => import("./pages/Tution"));
const Inquire = lazy(() => import("./pages/Inquire"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Scholarship = lazy(() => import("./pages/Scholarship"));
const LeaderShip = lazy(() => import("./pages/LeaderShip"));
const History = lazy(() => import("./pages/Histroy"));
const Memorization = lazy(() => import("./pages/Memorization"));
const MiddleSchool = lazy(() => import("./pages/MiddelSchool"));
const HighSchool = lazy(() => import("./pages/HighSchool"));
const Elementary = lazy(() => import("./pages/Elementry"));
const StudentLife = lazy(() => import("./pages/StudentLife"));
const Athletics = lazy(() => import("./pages/Athelatics"));
const Faculty = lazy(() => import("./pages/Faculty"));
const Clubs = lazy(() => import("./pages/Clubs"));
const Alumni = lazy(() => import("./pages/Alumni"));
const Career = lazy(() => import("./pages/Career"));
const Donation = lazy(() => import("./pages/Donation"));

// --- Preload  routes ---
const preloadRoutes = () => {
  import("./pages/About");
  import("./pages/Academics");
  import("./pages/StudentLife");
  import("./pages/Admission");
};

const App = () => {
  useEffect(() => {
    const timer = setTimeout(preloadRoutes, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={null}>
        <Routes>
          {/* Home Layout */}
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Main Layout */}
          <Route element={<MainLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/inquire" element={<Inquire />} />
            <Route path="/enrollement" element={<Enrollement />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/tuition-fee" element={<Tuition />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/pre-school" element={<PreSchool />} />
            <Route path="/leadership" element={<LeaderShip />} />
            <Route path="/history" element={<History />} />
            <Route path="/memorization" element={<Memorization />} />
            <Route path="/middle-school" element={<MiddleSchool />} />
            <Route path="/high-school" element={<HighSchool />} />
            <Route path="/elementary-school" element={<Elementary />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/athletics" element={<Athletics />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/clubs-and-organizations" element={<Clubs />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/career" element={<Career />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/sponsorship" element={<SponsorShip />} />
            <Route path="/support" element={<Support />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/pto" element={<Pto />} />
            <Route path="/schoolCalendar" element={<SchoolCalendar />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />

            <Route path="/events/:slug" element={<EventDetail />} />
            <Route path="/news/:id" element={<News />} />
          </Route>

          {/* Standalone routes */}
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/donation-form" element={<Form />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
