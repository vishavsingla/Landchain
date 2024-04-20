import HeaderHome from "../Components/HeaderHome";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { loginUser } from "../utils/API/authAPI";
import { isLogin, logOut } from "../utils/cookieSetup";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Anti-Corrupto.png";
import landvideo from "../assets/land.mp4";

function Home() {
	const [isLoggedd, setisLoggedd] = useState(false);

	const navigate = useNavigate();
	useEffect(() => {
		const checkLoginSession = isLogin();
		if (checkLoginSession) {
			setisLoggedd(true);
		} else {
			setisLoggedd(false);
		}
	}, []);

	const handleLogout = () => {
		logOut();
		setisLoggedd(false);
		navigate("/login");
	};

	return (
		<>
			<video src={landvideo} autoPlay muted loop className="mt-14 bg-cover" />
			<div className="absolute top-0 left-0 h-screen ">
				<div className="p-3 bg-slate-300 w-screen opacity-95 flex flex-row justify-between items-center">
					{/* <div className=" h-1/6 bg-slate-800 "></div> */}

					{/* <div className="p-4 flex flex-row justify-between items-center"> */}
					<div className="flex flex-row text-gray-700 justify-center items-center rounded-lg font-bold hover:text-gray-900 ">
						<img src={logo} alt="Image" className="h-12" />
						<NavLink to={"/"}>Anti-Corruptō</NavLink>
					</div>

					<ul className="px-4 flex flex-row justify-end space-x-8  items-center">
						<li className=" hover:text-blue-600">
							<button>About</button>
						</li>
						<li className=" hover:text-blue-600">
							<NavLink to={"/dashboard"}>
								<button>Features</button>
							</NavLink>
						</li>
						<li className=" hover:text-blue-600 ">
							<button>Services</button>
						</li>
						<li className=" hover:text-blue-600">
							<button>Contact</button>
						</li>
						{/* <div className="border px-8  border-slate-300  bg-slate-800 text-white text-sm rounded-3xl p-2 hover:bg-gray-900">
							<NavLink to={"/login"}>Login</NavLink>
						</div> */}
					</ul>
					{/* {isLoggedd ? (
						<div className="border px-5  border-slate-300  bg-slate-800 text-white text-sm rounded-lg p-2 hover:bg-gray-900">
							<button onClick={() => handleLogout()}>Logout</button>
						</div>
					) : (
						<div className="border px-5  border-slate-300  bg-slate-800 text-white text-sm rounded-lg p-2 hover:bg-gray-900">
							<NavLink to={"/login"}>Login</NavLink>
						</div>
					)} */}
					{/* </div> */}
				</div>
				<div
					className="h-[780px] p-20 flex flex-col items-start justify-center bg-cover "
					// style={{
					// 	backgroundImage: `URL(
					//     "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					//   )`,
					// }}
				>
					<div className=" flex flex-col justify-center items-start ">
						<p className="text-gray-300 text-8xl font-bold drop-shadow-xl">
							Welcome.
						</p>
						<p className="text-gray-300 font-semibold p-4 text-bold drop-shadow-xl">
							Transforming Land Registry with Blockchain: Secure, Transparent,
							Immutable Ownership Records
						</p>
					</div>
					<div className="space-x-6 flex flex-row">
						<div className="ml-2 bg-slate-300 p-2 px-12 rounded-3xl font-bold text-md text-slate-700 hover:bg-black hover:text-amber-100 drop-shadow-xl">
							<NavLink to={"/signup"}>Sign Up</NavLink>
						</div>
						<div className="ml-2 bg-slate-300 p-2 px-12 rounded-3xl font-bold text-md text-slate-700 hover:bg-black hover:text-amber-100 drop-shadow-xl">
							<NavLink to={"/login"}>Login</NavLink>
						</div>
					</div>
					<div className="p-16"></div>
				</div>
			</div>
		</>
	);
}
export default Home;
