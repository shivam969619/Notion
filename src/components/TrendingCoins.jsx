import { useState, useEffect } from "react";

function TrendingCoins() {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        const trendingCoins = data.coins.slice(0, 3);

        const formattedCoinsData = trendingCoins.map((coin) => ({
          symbol: coin.item.symbol.toUpperCase(),
          name: coin.item.name,
          img: coin.item.large,
          changePercentage:
            coin.item.data.price_change_percentage_24h.usd.toFixed(2),
        }));

        setCoinsData(formattedCoinsData);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  return (
    <div className=" lg:h-[300px] bg-white lg:ml-4 mt-4 rounded-lg px-8 pt-5">
      <div className="text-2xl font-semibold text-[#0F1629]">
        Trending Coins (24h)
      </div>
      <div className="mt-4">
        {coinsData.map((coin, index) => (
          <Coin
            key={index}
            symbol={coin.symbol}
            name={coin.name}
            img={coin.img}
            changePercentage={coin.changePercentage}
          />
        ))}
      </div>
    </div>
  );
}

function Coin({ symbol, name, img, changePercentage }) {
  const isPositiveChange = parseFloat(changePercentage) >= 0;

  return (
    <div className="flex my-2 justify-between text-center py-1">
      <div className="flex pt-1">
        <div>
          <img src={img} className="w-6 rounded-full" alt="Coin icon" />
        </div>
        <div className="text-[#0F1629] ml-1 ">
          {name} ({symbol})
        </div>
      </div>
      <div
        className={`flex items-center justify-center rounded-lg p-2 h-8 ml-10 ${
          isPositiveChange ? "bg-green-300/20" : "bg-red-300/20"
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-4 fill-current ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
          style={{ transform: isPositiveChange ? "" : "rotate(180deg)" }}
        >
          <polygon points="0,100 50,0 100,100" />
        </svg>
        <span
          className={`ml-2 text-sm font-bold ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
        >
          {changePercentage}%
        </span>
      </div>
    </div>
  );
}

export default TrendingCoins;