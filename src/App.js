import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/header/About";
import CNN from "./components/source/CNN";
import GeneralUK from "./components/country/UK/GeneralUK";
import Login from "./components/header/Login";
import Main from "./components/Main";
import Menu from "./components/header/Menu";
import Sidebar from "./components/Sidebar";
import FoxNews from "./components/source/FoxNews";
import BBCNews from "./components/source/BBCNews";
import BusinessUK from "./components/country/UK/BusinessUK";
import EntertUK from "./components/country/UK/EntertUK";
import HealthUK from "./components/country/UK/HealthUK";
import ScienceUK from "./components/country/UK/ScienceUK";
import SportsUK from "./components/country/UK/SportsUK";
import TechUK from "./components/country/UK/TechUK";
import GeneralAus from "./components/country/Aus/GeneralAus";
import GeneralFr from "./components/country/Fr/GeneralFr";
import GeneralInd from "./components/country/Ind/GeneralInd";
import GeneralRus from "./components/country/Rus/GeneralRus";
import GeneralUSA from "./components/country/USA/GeneralUSA";
import MobNav from "./components/header/MobNav";

function App() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto font-sans text-slate-600 xl:m-5">
      <MobNav />
      <Menu />

      <div className="flex justify-between">
        <div className="md:hidden">
          <Sidebar />
        </div>
        
        <Routes>
          <Route path="*" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/uk/general" element={<GeneralUK />}></Route>
          <Route path="/uk/business" element={<BusinessUK />}></Route>
          <Route path="/uk/entertainment" element={<EntertUK />}></Route>
          <Route path="/uk/health" element={<HealthUK />}></Route>
          <Route path="/uk/science" element={<ScienceUK />}></Route>
          <Route path="/uk/sports" element={<SportsUK />}></Route>
          <Route path="/uk/tech" element={<TechUK />}></Route>

          <Route path="/aus/general" element={<GeneralAus />}></Route>

          <Route path="/fr/general" element={<GeneralFr />}></Route>

          <Route path="/ind/general" element={<GeneralInd />}></Route>

          <Route path="/rus/general" element={<GeneralRus />}></Route>

          <Route path="/usa/general" element={<GeneralUSA />}></Route>

          <Route path="/cnn" element={<CNN />}></Route>
          <Route path="/fox-news" element={<FoxNews />}></Route>
          <Route path="/bbc-news" element={<BBCNews />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
