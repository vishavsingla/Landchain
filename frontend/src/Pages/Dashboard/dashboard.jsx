import React, { useState, useEffect, useContext } from "react";
import { MdLocationPin } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import cardData from "../../Components/cardData.json";
import Header from "../../Components/Header";
import { BiCategory } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { loginUser } from "../../utils/authAPI";
import { setSessionTocken, isLogin } from "../../utils/cookieSetup";
import { useNavigate } from "react-router-dom";
import { LandContext } from "../../context/LandContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const [isLoggedd, setisLoggedd] = useState(false);
  const { transactions, checkIfWalletIsConnect } = useContext(LandContext);

  const navigate = useNavigate();
  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setisLoggedd(true);
    } else {
      setisLoggedd(false);
      navigate("/login");
    }
  }, []);
  return (
    <div className="h-full flex items-center flex-col justify-start bg-cover">
      <Header />
      <div
        className="flex w-full h-96 bg-slate-700 object-fill bg-cover justify-center items-end"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(255, 255, 255)), url("https://images.unsplash.com/photo-1591389703635-e15a07b842d7?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <p className=" absolute top-48 bg-center text-white text-5xl pb-4 font-bold drop-shadow-xl">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Block Chain",
              4000, // wait 1s before replacing "Mice" with "Hamsters"
              "Tech Chain",
              1500,
              "Data Chain",
              1500,
              "Trust Chain",
              1500,
              "Secure Chain",
              1500,
              "Smart Chain",
              1500,
              "Land Chain",
              4000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "50px", display: "inline-block" }}
            className="drop-shadow-xl"
            repeat={Infinity}
          />
        </p>

        <div className="flex flex-col p-5 w-full items-center justify-center">
          <div className="flex flex-row mb-6 w-full justify-center items-center">
            <div
              className="h-12 p-4 flex flex-row ml-12 justify-center text-sm items-center bg-slate-800 rounded-xl cursor-pointer text-white shadow-xl"
              style={{ whiteSpace: "nowrap" }}
            >
              By Category
              <FaCaretDown className="text-white ml-2" />
            </div>
            <select
              className="absolute top-0 left-20 h-full w-auto opacity-0 cursor-pointer"
              style={{ zIndex: 10 }}
            >
              <option value="all">All Categories</option>
              <option value="category1">Location</option>
              <option value="category2">Area</option>
              <option value="category3">Type</option>
              <option value="category4">Price</option>
            </select>

            <input
              type="text"
              className="h-12 ml-2 pl-4 w-full rounded-l-xl border-2 border-r-0 shadow-xl"
              placeholder="Search for property by Location ,owner Name"
            />
            <div className="h-12 p-4 flex mr-14 justify-center items-center bg-slate-800 rounded-r-xl cursor-pointer text-white shadow-xl">
              Search
              <IoSearchSharp className="text-white ml-2" />
            </div>
          </div>

          <ul className="flex flex-row justify-center ">
            <button
              onClick={() => {
                navigate("/addland");
              }}
              className="flex flex-row  p-4 px-36 mr-8 w-16 rounded-md bg-slate-600 hover:bg-slate-800 justify-center text-white text-nowrap"
            >
              Add New Land
            </button>
            <button className="flex p-4 px-36 mr-8 w-16 rounded-md bg-slate-600 hover:bg-slate-800 text-white justify-center text-nowrap">
              Marketplace
            </button>
            <button className="flex p-4 px-36 mr-8 w-16 rounded-md bg-slate-600 hover:bg-slate-800 text-white justify-center text-nowrap">
              ews
            </button>
            <button className="flex p-4 px-36 rounded-md w-16 bg-slate-600 hover:bg-slate-800 text-white justify-center text-nowrap">
              ews
            </button>
          </ul>
        </div>
      </div>

      <p className="text-xl mt-8 m-4 font-bold">My Lands</p>

      {transactions.map((land, index) => (
        <div
          key={index}
          className="flex flex-col w-2/3 h-72 bg-slate-700 rounded-lg m-4 object-fill bg-cover  justify-between shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgb(255, 255, 255)), url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D})`,
          }}
        >
          <div>
            <p
              onClick={() => {
                navigate(`/transfer/${land.landId}`);
              }}
              className="px-4 pt-4 text-2xl font-bold"
            >
              {land.landId}
            </p>
            {land.landType === 0 ? (
              <p className="pl-4 ">Government</p>
            ) : land.landType == 1 ? (
              <p className="pl-4 ">Commercial</p>
            ) : land.landType == 2 ? (
              <p className="pl-4 ">Agricultural</p>
            ) : land.landType == 3 ? (
              <p className="pl-4 ">Industrial</p>
            ) : (
              <p className="pl-4 ">Residential</p>
            )}
            <p className="pl-4 ">Dimension : {land.dimensionOfLand}</p>
            <div className="flex flex-row">
              <p className="pl-4 ">{land.area},</p>
              <div className="flex flex-row items-center">
                <MdLocationPin className="ml-1" />
                <p>{land.location}</p>
              </div>
            </div>
          </div>
          <Link to={`/transfer/${land.landId}`}>
            <p className="p-4 text-lg font-bold">
              Owner: {land.currentOwner}
              <br></br>
              Current Rate: ₹{land.transferAmount.toString()}/-
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
