export default function Map() {
  return (
    <main>
      <section className="flex">
        <div className="flex mx-auto max-w-screen-xl gap-12 px-4 py-28 text-slate-400 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <h2 className="mx-auto text-4xl font-extrabold  md:text-5xl">
              ⚡⛳{" "}
              <span className="text-blue-600">
                Unlocking Market Secrets: Your Ultimate Guide to{" "}
              </span>
              📈{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
                Stock Trading Success
              </span>
            </h2>
            <div className="m-auto h-16 bg-gradient-to-tr from-[#E114E5] via-yellow-500 to-[#C084FC] blur-[118px]" />
          </div>
        </div>
      </section>

      {/* Mind-manp */}

      <section className="flex flex-col items-center justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-screen-2xl">
          {/* Price Action */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Price Action
            </h2>
            <h3>Structure</h3>
            <h3>📈 Trends 📉</h3>
            <h3>Candle Stick Pattern</h3>
            <h3>Support & Resistance</h3>
            <h3>📊 Volume</h3>
            <h3>⚠️ Breakout & False Breakout</h3>
            <h3>🕒 Multi Time Fram Analysis</h3>
          </div>

          {/* Psychology */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Pyschology
            </h2>

            <h3>😱 FOMO</h3>
            <h3>😨 Fear</h3>
            <h3>💰 Greed</h3>
            <h3>😎 Overconfidence</h3>
            <h3>😰 Panic</h3>
          </div>

          {/* Discipline */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Discipline
            </h2>

            <h3>⚖️ Risk-Reward Ratio</h3>
            <h3>❌ Stop Loss</h3>
            <h3>Diversification</h3>
            <h3>🛡️ Cover Order / Bracket Order</h3>
            <h3>✍ Journaling Trades</h3>
          </div>

          {/* Trading Strategies */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Trading Strategies
            </h2>

            <h3>✔️ Breakout</h3>
            <h3>👍 Pull Back</h3>
            <h3>⭐ Trapping Candle</h3>
          </div>

          {/* Stock Selection */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Stock Selection
            </h2>
            <h3>📦 Delivery Volume</h3>
            <h3>📊 Open Interest</h3>
            <h3>🏭 Sector-wise Performance</h3>
            <h3>📈 Top Gainers / 📉 Top Lossers</h3>
            <h3>52 Weeks High / Low</h3>
            <h3>📈 Long / 📉 Short Build (OI)</h3>
            <h3>Most Active Stock</h3>
            <h3>🌍📻 NEWS, 🗓️ Event & 📋Result</h3>
            <h3>Large Deals</h3>
            <h3>😊 Sentiments 😟</h3>
          </div>

          {/* Before Open Position */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Before Open Position
            </h2>
            <h3>⚖️ 1️⃣:2️⃣ Risk Reward Ratio 1:2</h3>
            <h3>📈📊 VWAP</h3>
            <h3>📊 Volume</h3>
            <h3>➗📏 Quantity=Risk/Difference</h3>
            <h3>Candle Stick Pattern</h3>
            <h3>📈 Trend 📉</h3>
            <h3>🏷️ Buyer / Seller Zone</h3>
            <h3>📈✨ EMA</h3>
            <h3>📊 Open Intrest</h3>
            <h3>📦📊 Delivery Percentage</h3>
          </div>

          {/* Global */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Global
            </h2>
            <h3>NIFTY 50</h3>
            <h3>NIFTY BANK</h3>
            <h3>📊📈 DOW 30</h3>
            <h3>📈 NASDAQ</h3>
            <h3>GIFTY</h3>
            <h3>FTSE 100</h3>
            <h3>CAC 40 & DAX</h3>
            <h3>NIKKEI 225</h3>
            <h3>Crude Oil</h3>
          </div>

          {/* Technical Analysis */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Technical Analysis
            </h2>
            <h3>📊📈 Chart Pattern</h3>
            <h3>📈 Indicators</h3>
          </div>

          {/* Fundametal Analysis */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Fundametal Analysis
            </h2>
            <h3>🏛️ Company Fundamentals</h3>
            <h3>💰 Financial Statements</h3>
            <h3>📈 Earnings Reports and Forecasts</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
