import React from 'react'
import main_logo from '../assets/StockArenaLogo.png'
import account_icon from '../assets/account.svg'
import TradingViewWidget from './Trade'

const GamePage = () => {

		return (
		<div className="h-[100vh] w-[100vw] px-2 py-4 pt-3 bg-custom-blue max-sm:bg-red-600 flex flex-col items-center">
		<div className='flex flex-row items-center justify-center mt-[2%]'>
			<img src={main_logo} alt="logo" className="w-[30%] mt-[-3%] ml-[4.6%]" />
			<div className="flex flex-row flex-wrap items-center justify-center w-[15%] ml-[20%] mr-[-30%]">
				<div className='accountimg_ hover:scale-150 p-3'>
					 <img src={account_icon} alt="pfp" className="w-[23%]"/>
						<div className='dropdown_ h-[50px] w-[800px] bg-custom-lighterblue scale-50 mt-[2%] flex flex-col items-center justify-center rounded-xl overflow-hidden'>
							<div className='logindiv_ flex items-center justify-center text-custom-greenyellow text-[20px] w-[100%] h-[100%]'>
								<button>ACCOUNT</button>
							</div>
						</div>
				</div>
			</div>
		</div>
		< TradingViewWidget/>
		</div>
	)
}

export default GamePage