import { NavigationBar } from "./components/NavigationBar"
import { FooterCon } from "./components/FooterCon"
import { Home } from "./components/Home"
import { Route, Routes } from "react-router-dom"
import { ContactUs } from "./components/ContactUs"
import { AboutUs } from "./components/AboutUs"
import { Description } from './components/Description';

function App() {
  

  return (
   <>
   
   <NavigationBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>

    </Routes>

      
      <FooterCon />
   
   
      
    </>
  )
}

export default App
