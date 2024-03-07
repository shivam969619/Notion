import { useState, useEffect } from "react";
import YouCard from "../components/Youcard";
const Suggestion = () => {
  const [Crypto, setCrypto] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json()) // Parse JSON response
      .then((data) => setCrypto(data.coins))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-white h-max mt-10 lg:p-14 p-8">
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <div className="mt-4 flex justify-between overflow-x-scroll overflow-auto">
          {Crypto.slice(0, 5).map((crypto, index) => (
            <YouCard key={index} cryptoData={crypto.item} />
          ))}
        </div>

        <div className="text-[#202020] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div className="mt-4 flex justify-between overflow-x-auto">
          {Crypto.slice(1, 6).map((crypto, index) => (
            <YouCard key={index} cryptoData={crypto.item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
