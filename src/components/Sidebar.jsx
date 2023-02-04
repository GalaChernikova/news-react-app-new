import { NavLink } from "react-router-dom";

function Sidebar(){
    return(
        <div className="flex flex-col max-w-xs w-full self-start my-5 font-sans text-slate-600 border-r border-zinc-200 pr-5">
            <h2 className="font-serif text-start text-2xl">Category</h2>


            <div className="flex flex-col mt-5">
              <NavLink to="/business" className="border-b border-zinc-200 py-2.5 w-full text-lg">Business</NavLink>  
              <NavLink to="/entertainment" className="border-b border-zinc-200 py-2.5 w-full text-lg">Entertainment</NavLink>  
              <NavLink to="/general" className="border-b border-zinc-200 py-2.5 w-full text-lg">General</NavLink>  
              <NavLink to="/health" className="border-b border-zinc-200 py-2.5 w-full text-lg">Health</NavLink>  
              <NavLink to="/science" className="border-b border-zinc-200 py-2.5 w-full text-lg">Science</NavLink>  
              <NavLink to="/Sports" className="border-b border-zinc-200 py-2.5 w-full text-lg">sports</NavLink>  
              <NavLink to="/technology" className="border-b border-zinc-200 py-2.5 w-full text-lg">Technology</NavLink>  
            </div>
            
        </div>
    )
}

export default Sidebar;