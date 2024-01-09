import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './Components/Homepage';
import LoginSignup from './Components/LoginSignup';
import GamePage from './Components/GamePage';
import TradingViewWidget from './Components/Trade';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/profile" element={<LoginSignup />} />
				<Route path="/game" element={<GamePage />} />
				<Route path="/trading" element={<TradingViewWidget />} />
			</Routes>
		</Router>
	);
}

export default App;