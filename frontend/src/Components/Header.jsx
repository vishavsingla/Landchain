import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { loginUser } from "../utils/authAPI";
import { setSessionTocken, isLogin, logOut } from "../utils/cookieSetup";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedd, setisLoggedd] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setisLoggedd(true);
    } else {
      setisLoggedd(false);
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    logOut();
    setisLoggedd(false);
    navigate("/login");
  };
  return (
    <div className=" h-20 bg-slate-300 w-screen flex-row opacity-95">
      <div className=" h-1/6 bg-slate-800 "></div>

      <div className="p-4 flex flex-row justify-between items-center">
        <div className="pl-2 text-gray-700 rounded-lg font-bold hover:text-gray-900 ">
          <NavLink to={"/dashboard"}>Land Chain</NavLink>
        </div>

        <ul className="h-5/6 flex flex-row justify-center space-x-8  items-center">
          <li className="border pr-8 border-slate-300 h-1/2 border-r-slate-950 hover:text-blue-600 hover:border-r-blue-600">
            <button>Logo</button>
          </li>
          <li className="border pr-8 border-slate-300 h-1/2 border-r-slate-950  hover:text-blue-600 hover:border-r-blue-600">
            <NavLink to={"/dashboard"}>
              <button>Home</button>
            </NavLink>
          </li>
          <li className="border pr-8 border-slate-300 h-1/2 border-r-slate-950  hover:text-blue-600 hover:border-r-blue-600">
            <button>Services</button>
          </li>
          <li className="border  border-slate-300 h-1/2 pr-8  hover:text-blue-600">
            <button>Property</button>
          </li>
        </ul>
        {isLoggedd ? (
          <div className="border px-5  border-slate-300  bg-slate-800 text-white text-sm rounded-lg p-2 hover:bg-gray-900">
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        ) : (
          <div className="border px-5  border-slate-300  bg-slate-800 text-white text-sm rounded-lg p-2 hover:bg-gray-900">
            <NavLink to={"/login"}>Login</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
