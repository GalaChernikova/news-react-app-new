import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col w-64 self-start my-5 font-sans text-slate-600 border-r border-zinc-200 pr-4">
      <h2 className="font-serif text-start text-2xl">Category</h2>

      <div className="flex flex-col mt-5">
        <NavLink
          to="/general"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          General
        </NavLink>
        <NavLink
          to="/business"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Business
        </NavLink>
        <NavLink
          to="/entertainment"
          className="border-b border-zinc-200 py-2.5 w-full text-lg  hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Entertainment
        </NavLink>
        <NavLink
          to="/health"
          className="border-b border-zinc-200 py-2.5 w-full text-lg  hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Health
        </NavLink>
        <NavLink
          to="/science"
          className="border-b border-zinc-200 py-2.5 w-full text-lg  hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Science
        </NavLink>
        <NavLink
          to="/sports"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Sports
        </NavLink>
        <NavLink
          to="/technology"
          className="border-b border-zinc-200 py-2.5 w-full text-lg  hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Technology
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
