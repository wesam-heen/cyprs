import "./App.css";
import Home from "./Pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Navagation from "./components/Navagation/Navagation";
import OurServicesPage from "./Pages/ourServices/OurServicesPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cyprs from './Pages/Programs/Components/cyprs/Cyprs'
import ContactUsMobile from "./components/contactUsMobile/ContactUsMobile";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Navagation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ourservices" element={<OurServicesPage/>}/>
        <Route path='/programs/cyprs' element={<Cyprs/>}/>
      </Routes>
      <ContactUsMobile/>
      <Footer/>
    </div>
  );
};

export default App;
