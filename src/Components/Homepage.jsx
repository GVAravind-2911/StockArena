import React from "react";
import { useNavigate } from "react-router-dom";
import main_logo from "../assets/StockArenaLogo.png";
import account_icon from "../assets/account.svg";

const Homepage = () => {
	const navigate = useNavigate();
	const routeChange = () => {
		const path = "/profile";
		navigate(path);
	};

	return (
		<div className="h-screen w-screen px-2 py-4 pt-3 bg-custom-blue max-sm:bg-red-600 flex flex-col items-center">
			<div className="flex flex-row items-center justify-center mt-[2%]">
				<img
					src={main_logo}
					alt="logo"
					className="w-[30%] mt-[-3%] ml-[4.6%]"
				/>
				<div className="flex flex-row flex-wrap items-center justify-center w-[15%] ml-[20%] mr-[-30%]">
					<div className="accountimg_ hover:scale-150 p-3">
						<img src={account_icon} alt="pfp" className="w-[23%]" />
						<div className="dropdown_ h-[50px] w-[800px] bg-custom-lighterblue scale-50 mt-[2%] flex flex-col items-center justify-center rounded-xl overflow-hidden">
							<div className="logindiv_ flex items-center justify-center text-custom-greenyellow text-[20px] w-[100%] h-[100%]">
								<button onClick={routeChange}>LOGIN/SIGNUP</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="intro-page-container_ flex flex-col justify-center items-center h-[70%]">
				<div className="whitespace-pre-line font-sf-mono text-slate-300 text-center text-[30px]">
					30 Minutes, 10 Stocks, 1 Winner
					<br />
					Conquer markets, emerge victorious in the Stock Arena!
				</div>
				<div className="open_button_ flex flex-row justify-center items-center mt-[5%] bg-custom-lighterblue pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-2xl transition-all hover:scale-110 duration-200">
				<button className="open_ text-custom-greenyellow text-[30px] font-bold cursor-default">JOIN NOW</button>
			</div>
			</div>
		</div>
	);
};

export default Homepage;
