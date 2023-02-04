import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import General from "./components/General";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto font-sans text-slate-600">
      <Menu />

      <div className="flex justify-between">
        <Sidebar />

        <Routes>
          <Route path="*"></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login />}></Route>


          <Route path="/general" element={<General />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
