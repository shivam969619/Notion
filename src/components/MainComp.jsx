import About from "./About";
import Promotion from "./Promotion";
import Crypto from "../components/Crypto";
import Page from "./Page";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import ToggleSection from "./Change";
import Tokenomics from "../components/Tokenomics";
import TrendingCoins from "../components/TrendingCoins";
import Team from "../components/TeamCard";
import Suggestion from "./Suggestion";

function MainComp() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <Page />

      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
          <Crypto />
          <ToggleSection />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <Promotion />
          <TrendingCoins />
        </div>
      </div>
      <Suggestion />
    </div>
  );
}

export default MainComp;
