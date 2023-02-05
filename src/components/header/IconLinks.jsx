import { NavLink } from "react-router-dom";
import { ImHome, ImFilm, ImUser } from "react-icons/im";

export default function IconLinks() {
  return (
    <div className="flex justify-between max-w-xs w-full  lg:mx-8 lg:mb-8 md:w-full md:mx-0">
      <NavLink
        to="*"
        className="flex items-center justify-between w-20 sm:w-16"
      >
        <ImHome />
        HOME
      </NavLink>
      <NavLink
        to="/about"
        className="flex items-center justify-between w-20 sm:w-16"
      >
        <ImFilm />
        ABOUT
      </NavLink>
      <NavLink
        to="/login"
        className="flex items-center justify-between w-20 sm:w-16"
      >
        <ImUser />
        LOGIN
      </NavLink>
    </div>
  )
}
