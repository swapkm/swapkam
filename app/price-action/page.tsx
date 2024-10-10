export default function PriceAction() {
  return (
    <main>
      <section className="flex">
        <div className="flex mx-auto max-w-screen-xl gap-12 px-4 py-28 text-slate-400 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <h2 className="mx-auto text-4xl font-extrabold text-blue-600 md:text-5xl">
              Secret of{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
                Stock Market
              </span>
            </h2>
            <div className="m-auto h-16 bg-gradient-to-tr from-[#E114E5] via-yellow-500 to-[#C084FC] blur-[118px]" />
          </div>
        </div>
      </section>

      {/* Mind-manp */}

      <section className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full max-w-screen-2xl">
          {/* Price Action */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Price Action
            </h2>
            <ul className="list-none pl-0">
              <li>
                <h3>Market Structure</h3>
                <h3>Market trend</h3>
                <h3>Candle Stick Pattern</h3>
                <h3>Support & Resistance</h3>
                <h3>Market Volume</h3>
                <h3>Breakout & False Breakout</h3>
                <h3>Pullback</h3>
                <h3>Timeframe & Multime Fram Analysis</h3>
              </li>
            </ul>
          </div>

          {/* Psychology */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Pyschology
            </h2>
            <ul className="list-none pl-0">
              <li>
                <h3>Cognitive Biases</h3>
                <h3>Emotional Influences on Decision Making</h3>
                <ul>
                  <li>Emotions affect trading decisions</li>
                </ul>
                <h3>Common Psychological Biases</h3>
                <h3>Investor Emotions</h3>
                <h3>sychological Phases of Market Cycles</h3>
                <h3>The Role of Social Media and News</h3>
                <h3>Strategies for Managing Psychological Factors</h3>
              </li>
            </ul>
          </div>

          {/* Discipline */}
          <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5 p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Discipline
            </h2>
            <ul className="list-none pl-0">
              <li>
                <h3>Risk Management Protocols</h3>
                <ul>
                  <li>Understanding Risk Tolerance</li>
                  <li>Diversification</li>
                  <li>Stop-Loss Orders</li>
                  <li>Position Sizing</li>
                </ul>
                <h3>Overtrading and Undertrading</h3>

                <h3>Setting Realistic Goals</h3>
                <h3>Journaling Trades and Emotions</h3>
                <h3>Consistency in Trading</h3>
                <h3>Long-term Success</h3>
                <h3>Developing a Trading Plan</h3>
                <h3>Impulse Trading</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
