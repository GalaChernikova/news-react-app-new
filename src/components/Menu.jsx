import Logo from './Logo'
import { NavLink } from "react-router-dom";
import { ImHome, ImFilm, ImNewspaper, ImUser } from "react-icons/im";
import CountrySelect from './CountrySelect';
import SearchForm from './SearchForm';

function Menu() {
  return (
    <div className="flex items-center justify-between border-b border-zinc-200 w-full mx-auto font-sans text-slate-600">
      <NavLink to="*">
        <Logo />
      </NavLink>
      
      <SearchForm />
      <CountrySelect />
      
      <div className="flex justify-between max-w-xs w-full">
        <NavLink to="*" className="flex items-center justify-between w-20">
          <ImHome />
          HOME
        </NavLink>
        <NavLink to="/about" className="flex items-center justify-between w-20">
          <ImFilm />
          ABOUT
        </NavLink>
        <NavLink
          to="/login"
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