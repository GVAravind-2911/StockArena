// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
	const container = useRef();

	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
        {
          "symbols": [
            [
              "Apple",
              "AAPL|1D"
            ],
            [
              "Google",
              "GOOGL|1D"
            ],
            [
              "Microsoft",
              "MSFT|1D"
            ],
            [
              "NASDAQ:META|1D"
            ],
            [
              "NSE:NIFTY|1D"
            ],
            [
              "BSE:SENSEX|1D"
            ],
            [
              "ECONOMICS:INGDP|1D"
            ],
			[
				"BSE:BHEL|1D"
			]
          ],
          "chartOnly": false,
          "width": 1000,
          "height": 500,
          "locale": "in",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;

		const existingScript = container.current.querySelector(
			'script[src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"]',
		);
		if (existingScript) {
			container.current.replaceChild(script, existingScript);
		} else {
			container.current.appendChild(script);
		}
	}, []);

	return (
		<div className="tradingview-widget-container" ref={container}>
			<div className="tradingview-widget-container__widget rounded-full" />
		</div>
	);
}

export default memo(TradingViewWidget);
