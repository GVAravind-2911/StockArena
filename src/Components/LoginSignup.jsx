import React, { useState } from "react";
import main_logo from "../assets/StockArenaLogo.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import user_icon from "../assets/person.png";

const LoginSignup = () => {
	const [action, setAction] = useState("SIGN UP");
	return (
		<div className="h-[100vh] w-[100vw] px-2 py-4 pt-3 bg-custom-blue max-sm:bg-red-600 flex flex-col items-center">
			<div className="flex flex-row items-center justify-center mt-[2%]">
				<img
					src={main_logo}
					alt="logo"
					className="w-[80%] mt-[-3.4%] ml-[4%]"
				/>
				<div className="flex flex-row flex-wrap items-center justify-center w-[15%] ml-[20%] mr-[-30%]"></div>
			</div>
			<div className="userlogin_ flex flex-col items-center w-[30%] h-[70%] bg-custom-lighterblue rounded-xl pt-3 mt-[3%]">
				<div className="flex items-center head_ flex-col">
					<div className="heading_ text-custom-greenyellow items-center text-[40px]">
						{action}
					</div>
					<div className="underline_ w-[75px] h-[6px] bg-purple-600"></div>
				</div>
				<div className="inputs_ mt-[5%] items-center justify-center flex-col h-[30%]">
					{action === "LOGIN" ? (
						<div className="mt-[12%]"></div>
					) : (
						<div className="input_ flex items-center justify-start flex-row gap-4 w-[300px] bg-slate-300 h-[50%] mb-[20px] rounded-xl">
							<img src={user_icon} className="ml-[20px]" />
							<input
								type="text"
								className="bg-transparent border-0 outline-0 text-[20px]"
								placeholder="Name"
							/>
						</div>
					)}
					<div className="input_ flex items-center justify-start flex-row gap-4 w-[300px] bg-slate-300 h-[50%] mb-[20px] rounded-xl">
						<img src={email_icon} className="ml-[20px]" />
						<input
							type="email"
							className="bg-transparent border-0 outline-0 text-[20px]"
							placeholder="Mail ID"
						/>
					</div>
					<div className="input_ flex items-center justify-start flex-row gap-4 w-[300px] bg-slate-300 h-[50%] mb-[20px] rounded-xl">
						<img src={password_icon} className="ml-[20px]" />
						<input
							type="password"
							className="bg-transparent border-0 outline-0 text-[20px]"
							placeholder="Password"
						/>
					</div>
				</div>
				<div className="submit_container_ flex flex-row gap-3 mt-[130px]">
					<div
						className={
							action === "LOGIN"
								? "submit_ flex justify-center items-center w-[150px] text-gray-500 bg-custom-yellow p-[8px] rounded-3xl text-[19px] font-bold cursor-pointer"
								: "submit_ flex justify-center items-center w-[150px] text-slate-100 bg-purple-900 p-[8px] rounded-3xl text-[19px] font-bold cursor-pointer"
						}
						onClick={() => {
							setAction("SIGN UP");
						}}
					>
						SIGN UP
					</div>
					<div
						className={
							action === "SIGN UP"
								? "submit_ flex justify-center items-center w-[150px] text-gray-500 bg-custom-yellow p-[8px] rounded-3xl text-[19px] font-bold cursor-pointer"
								: "submit_ flex justify-center items-center w-[150px] text-slate-100 bg-purple-900 p-[8px] rounded-3xl text-[19px] font-bold cursor-pointer"
						}
						onClick={() => {
							setAction("LOGIN");
						}}
					>
						LOGIN
					</div>
				</div>
			</div>
		</div>
	);
};
export default LoginSignup;
