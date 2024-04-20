import React from "react";
import HeaderHome from "../Components/HeaderHome";

function Home() {
  return (
			<div className=" h-full ">
				<HeaderHome />
				<div
					className="h-[530px] flex flex-col items-center justify-center bg-cover "
					style={{
						backgroundImage: `URL(
            "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          )`,
					}}
				>
					<ul className=" flex flex-col justify-center items-center ">
						<li className=" text-4xl font">Anti-Corruptō</li>
						<li className=" font-semibold p-10 text-bold">
							"Transforming Land Registry with Blockchain: Secure, Transparent,
							Immutable Ownership Records"
						</li>
					</ul>
					<div>
						<button className=" bg-slate-800 h-16 w-60 rounded-xl font-bold text-lg text-slate-100 hover:bg-black hover:text-amber-100 hover:underline">
							Inspect Land
						</button>
					</div>
				</div>
				<div className=""></div>
			</div>
		);
}
export default Home;
