import { Route, Routes, useLocation } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { FooterCon } from "./components/FooterCon";
import { Home } from "./components/Home";
import ContactUs from "./components/ContactUs";
import { AboutUs } from "./components/AboutUs";
import { Description } from "./components/Description";
import Register from "./components/Register";
import Login from "./components/Login";
import Donate from "./components/Donate";
import AllCampaigns from "./components/AllCampaigns";
import { Description2 } from "./components/Description2";
import { Description3 } from "./components/Description3";
import { Description4 } from "./components/Description4";

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavAndFooter && <NavigationBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/description" element={<Description />} />
        <Route path="/description2" element={<Description2 />} />
        <Route path="/description3" element={<Description3 />} />
        <Route path="/description4" element={<Description4 />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/allcampaigns" element={<AllCampaigns />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {!hideNavAndFooter && <FooterCon />}
    </>
  );
}

export default App;