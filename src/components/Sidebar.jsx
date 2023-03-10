import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col w-64 self-start my-5 font-sans text-slate-600 border-r border-zinc-200 pr-4 md:border-r-0 md:w-full">
      <h2 className="font-serif text-start text-2xl">Category</h2>

      <div className="flex flex-col mt-5">
        <NavLink
          to="/uk/general"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          General
        </NavLink>
        <NavLink
          to="/uk/business"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Business
        </NavLink>
        <NavLink
          to="/uk/entertainment"
          className="border-b border-zinc-200 py-2.5 w-full text-lg  hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Entertainment
        </NavLink>
        <NavLink
          to="/uk/health"
          className="border-b border-zinc-200 py-2.5 w-full text-lg  hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Health
        </NavLink>
        <NavLink
          to="/uk/science"
          className="border-b border-zinc-200 py-2.5 w-full text-lg  hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Science
        </NavLink>
        <NavLink
          to="/uk/sports"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Sports
        </NavLink>
        <NavLink
          to="/uk/tech"
          className="border-b border-zinc-200 py-2.5 w-full text-lg  hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Technology
        </NavLink>
      </div>

      <h2 className="font-serif text-start text-2xl mt-12">Source</h2>
      <div className="flex flex-col mt-5">
      <NavLink
          to="/cnn"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          CNN
        </NavLink>
        <NavLink
          to="/fox-news"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          Fox News
        </NavLink>
        <NavLink
          to="/bbc-news"
          className="border-b border-zinc-200 py-2.5 w-full text-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
        >
          BBC News
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
