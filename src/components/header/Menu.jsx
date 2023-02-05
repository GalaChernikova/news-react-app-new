import Logo from './Logo'
import { NavLink } from "react-router-dom";
import CountrySelect from './CountrySelect';
import SearchForm from './SearchForm';
import IconLinks from './IconLinks';

function Menu() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-center border-b border-zinc-200 w-full mx-auto font-sans text-slate-600 md:hidden">
      <NavLink to="*">
        <Logo />
      </NavLink>
      
      <SearchForm />
      <CountrySelect />
      
      <IconLinks />
    </div>
  );
}

export default Menu;