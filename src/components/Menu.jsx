import Logo from './Logo'
import { NavLink } from "react-router-dom";
import { ImHome, ImFilm, ImNewspaper, ImUser } from "react-icons/im";
import Country from "./Country";

function Menu() {
  return (
    <div className="flex items-center justify-between border-b border-zinc-200 w-full mx-auto font-sans text-slate-600">
      <Logo />
      <Country />

      <div className="flex justify-between max-w-lg w-full">
        <NavLink to="*" className="flex items-center justify-between w-20">
          <ImHome />
          HOME
        </NavLink>
        <NavLink to="/about" className="flex items-center justify-between w-20">
          <ImFilm />
          ABOUT
        </NavLink>
        <NavLink
          to="/videos"
          className="flex items-center justify-between w-20"
        >
          <ImNewspaper /> VIDEOS
        </NavLink>
        <NavLink
          to="/videos"
          className="flex items-center justify-between w-20"
        >
          <ImUser />
          LOGIN
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;