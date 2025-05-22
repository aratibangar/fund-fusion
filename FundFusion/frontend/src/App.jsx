import { NavigationBar } from "./components/NavigationBar";
import { FooterCon } from "./components/FooterCon";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import { AboutUs } from "./components/AboutUs";
import { Description } from "./components/Description";
import Register from "./components/Register";
import Login from "./components/Login";
import { Donate } from "./components/Donate";
function App() {
 
  return (
   <>
   
   <NavigationBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
<Route path="/description" element={<Description />} />
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/donate" element={<Donate/>}/>
      
    </Routes>

      
      <FooterCon />
   
   
      
    </>
  )
}

export default App
