import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AddLand from "./Pages/Dashboard/AddLand";
import ViewLand from "./Pages/Dashboard/ViewLand";
import TransferLand from "./Pages/Dashboard/TransferLand";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Market from "./Pages/Dashboard/Market";
import Chat from "./Pages/Chat";
import Cases from "./Pages/Cases";

function App() {
	return (
			<BrowserRouter className="flex items-center justify-center">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/addland" element={<AddLand />} />
					<Route path="/View" element={<ViewLand />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/Market" element={<Market />} />
					<Route path="/transfer/:id" element={<TransferLand />} />
					<Route path="/cases" element={<Cases />} />
				</Routes>
			</BrowserRouter>
	);
}

export default App;
