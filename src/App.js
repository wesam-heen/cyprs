import "./App.css";
import Home from "./Pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Navagation from "./components/Navagation/Navagation";
import OurServicesPage from "./Pages/ourServices/OurServicesPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cyprs from './Pages/Programs/Components/cyprs/Cyprs'
import CyprsBenifites from './Pages/Programs/Components//cyprs/cyprsbenifites/CyprsBenifites'
import ContactUsMobile from "./components/contactUsMobile/ContactUsMobile";
import CyprsInvestment from "./Pages/Programs/Components/cyprs/CyprsInvestment/CyprsInvestment";
import ProceduresCyprs from "./Pages/Programs/Components/cyprs/ProceduresCyprs/ProceduresCyprs";
import CyprsAbout from "./Pages/Programs/Components/cyprs/CyprsAbout/CyprsAbout";
import Dominica from "./Pages/Programs/Components/Dominica/Dominica";
import DominicaAbout from "./Pages/Programs/Components/Dominica/DominicaAbout/DominicaAbout";
import DominicaBenifites from "./Pages/Programs/Components/Dominica/DominicaBenifites/DominicaBenifites";
import DominicaInvestment from "./Pages/Programs/Components/Dominica/DominicaInvestment/DominicaInvestment";
import DominicaProcedures from "./Pages/Programs/Components/Dominica/DominicaProcedures/DominicaProcedures";
import Nevis from "./Pages/Programs/Components/Nevis/Nevis";
import NevisAbout from "./Pages/Programs/Components/Nevis/NevisAbout/NevisAbout";
import NevisBenifites from "./Pages/Programs/Components/Nevis/NevisBenifites/NevisBenifites";
import NevisInvestment from "./Pages/Programs/Components/Nevis/NevisInvestment/NevisInvestment";
import NevisProcedures from "./Pages/Programs/Components/Nevis/NevisProcedures/NevisProcedures";
import Antigua from "./Pages/Programs/Components/Antigua/Antigua ";
import AntiguaAbout from "./Pages/Programs/Components/Antigua/AntiguaAbout/AntiguaAbout";
import AntiguaBenifites from "./Pages/Programs/Components/Antigua/AntiguaBenifites/AntiguaBenifites";
import AntiguaInvestment from "./Pages/Programs/Components/Antigua/AntiguaInvestment/AntiguaInvestment";
import AntiguaProcedures from "./Pages/Programs/Components/Antigua/AntiguaProcedures/AntiguaProcedures";
import Saint from "./Pages/Programs/Components/Saint/Saint";
import SaintAbout from "./Pages/Programs/Components/Saint/SaintAbout/SaintAbout";
import SaintBenifites from "./Pages/Programs/Components/Saint/SaintBenifites/SaintBenifites";
import SaintInvestment from "./Pages/Programs/Components/Saint/SaintInvestment/SaintInvestment";
import SaintProcedures from "./Pages/Programs/Components/Saint/SaintProcedures/SaintProcedures";
import Grenada from "./Pages/Programs/Components/Grenada/Grenada";
import GrenadaAbout from "./Pages/Programs/Components/Grenada/GrenadaAbout/GrenadaAbout";
import GrenadaBenifites from "./Pages/Programs/Components/Grenada/GrenadaBenifites/GrenadaBenifites";
import GrenadaInvestment from "./Pages/Programs/Components/Grenada/GrenadaInvestment/GrenadaInvestment";
import GrenadaProcedures from "./Pages/Programs/Components/Grenada/GrenadaProcedures/GrenadaProcedures";
import Vanuatu from "./Pages/Programs/Components/Vanuatu/Vanuatu";
import VanuatuAbout from "./Pages/Programs/Components/Vanuatu/VanuatuAbout/VanuatuAbout";
import VanuatuBenifites from "./Pages/Programs/Components/Vanuatu/VanuatuBenifites/VanuatuBenifites";
import VanuatuInvestment from "./Pages/Programs/Components/Vanuatu/VanuatuInvestment/VanuatuInvestment";
import VanuatuProcedures from "./Pages/Programs/Components/Vanuatu/VanuatuProcedures/VanuatuProcedures";
import Greece from "./Pages/Programs/Components/Greece/Greece";
import GreeceAbout from "./Pages/Programs/Components/Greece/GreeceAbout/GreeceAbout";
import GreeceBenifites from "./Pages/Programs/Components/Greece/GreeceBenifites/GreeceBenifites";
import GreeceInvestment from "./Pages/Programs/Components/Greece/GreeceInvestment/GreeceInvestment";
import GreeceProcedures from "./Pages/Programs/Components/Greece/GreeceProcedures/GreeceProcedures";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Navagation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ourservices" element={<OurServicesPage/>}/>
        <Route path='/programs/cyprs' element={<Cyprs/>}>
        <Route path='about' element={<CyprsAbout/>}/>
        <Route path='benefits' element={<CyprsBenifites/>}/>
        <Route path='investment' element={<CyprsInvestment/>}/>
        <Route path='Procedures' element={<ProceduresCyprs/>}/>
       </Route>
       <Route path='/programs/Dominica' element={<Dominica/>}>
       <Route path='about' element={<DominicaAbout/>}/>
       <Route path='benefits' element={<DominicaBenifites/>}/>
       <Route path='investment' element={<DominicaInvestment/>}/>
       <Route path='Procedures' element={<DominicaProcedures/>}/>
       </Route>
       <Route path='/programs/Nevis' element={<Nevis/>}>
       <Route path='about' element={<NevisAbout/>}/>
       <Route path='benefits' element={<NevisBenifites/>}/>
       <Route path='investment' element={<NevisInvestment/>}/>
       <Route path='Procedures' element={<NevisProcedures/>}/>
       </Route>
       <Route path='/programs/Antigua' element={<Antigua/>}>
       <Route path='about' element={<AntiguaAbout/>}/>
       <Route path='benefits' element={<AntiguaBenifites/>}/>
       <Route path='investment' element={<AntiguaInvestment/>}/>
       <Route path='Procedures' element={<AntiguaProcedures/>}/>
       </Route>
       <Route path='/programs/Saint' element={<Saint/>}>
       <Route path='about' element={<SaintAbout/>}/>
       <Route path='benefits' element={<SaintBenifites/>}/>
       <Route path='investment' element={<SaintInvestment/>}/>
       <Route path='Procedures' element={<SaintProcedures/>}/>
       </Route> 
       <Route path='/programs/Grenada' element={<Grenada/>}>
       <Route path='about' element={<GrenadaAbout/>}/>
       <Route path='benefits' element={<GrenadaBenifites/>}/>
       <Route path='investment' element={<GrenadaInvestment/>}/>
       <Route path='Procedures' element={<GrenadaProcedures/>}/>
       </Route> 
       <Route path='/programs/Vanuatu' element={<Vanuatu/>}>
       <Route path='about' element={<VanuatuAbout/>}/>
       <Route path='benefits' element={<VanuatuBenifites/>}/>
       <Route path='investment' element={<VanuatuInvestment/>}/>
       <Route path='Procedures' element={<VanuatuProcedures/>}/>
       </Route> 
       <Route path='/programs/Greece' element={<Greece/>}>
       <Route path='about' element={<GreeceAbout/>}/>
       <Route path='benefits' element={<GreeceBenifites/>}/>
       <Route path='investment' element={<GreeceInvestment/>}/>
       <Route path='Procedures' element={<GreeceProcedures/>}/>
       </Route> 
      </Routes>
      <ContactUsMobile/>
      <Footer/>
    </div>
  );
};

export default App;
