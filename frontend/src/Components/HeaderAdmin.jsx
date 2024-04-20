import React from "react";
import { NavLink } from "react-router-dom";

function HeaderAdmin() {
  return (
    <div className=" h-20 bg-slate-300 w-screen flex-row opacity-90 absolute top-0">
      <div className=" h-1/6 bg-slate-800 "></div>

      <div className="p-4 flex flex-row justify-between items-center">
        <div className="pl-2 text-gray-700 rounded-lg font-bold hover:text-gray-900 ">
          <NavLink to={"/dashboard"}>Land Chain</NavLink>
        </div>

        <ul className="h-5/6 flex flex-row justify-center space-x-8  items-center">
          <li className="border pr-8 border-slate-300 h-1/2 border-r-slate-950 hover:text-blue-600 hover:border-r-blue-600">
            <NavLink to={"/"}>
              <button>Home</button>
            </NavLink>
          </li>
          <li className="border pr-8 border-slate-300 h-1/2 border-r-slate-950  hover:text-blue-600 hover:border-r-blue-600">
            <NavLink to={"/addland"}>
              <button>ADD Land</button>
            </NavLink>
          </li>
          <li className="border pr-8 border-slate-300 h-1/2  hover:text-blue-600 ">
            <NavLink to={"/transfer"}>
              <button>Transfer Land</button>
            </NavLink>
          </li>
          {/* <li className="border  border-slate-300 h-1/2 pr-8  hover:text-blue-600">
						<button>Profile</button>
					</li> */}
        </ul>

        <div className="border px-5  border-slate-300  bg-slate-800 text-white text-sm rounded-lg p-2 hover:bg-gray-900">
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
