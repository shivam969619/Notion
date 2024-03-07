import React, { useState } from "react";
import Koinx from "../../public/koinx.png";
import { FaHamburger } from "react-icons/fa";
const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!Open);
  };
  return (
    <div className="lg:h-20 h-16 flex items-center justify-between shadow-[#1026490F]/10  shadow-md bg-[#FFFFFF]  w-screen">
      <div>
        <img src={Koinx} alt="Logo" className="w-24 h-6 lg:ml-14 ml-4"></img>
      </div>

      <div className="hidden lg:flex items-center">
        <div className="text-lg font-semibold text-[#0F1629] mr-6">
          Crypto Taxes
        </div>
        <div className="text-lg font-semibold text-[#0F1629] mr-6">
          Free Tools
        </div>
        <div className="text-lg font-semibold text-[#0F1629] mr-6">
          Resource Center{" "}
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-14">
            Get Started
          </button>
        </div>
      </div>

      <div className="lg:hidden mr-4">
        <FaHamburger onClick={toggle} />
      </div>

      {/* Popup menu */}
      {Open && (
        <div className="lg:hidden absolute top-20 right-0 mt-2 mr-2 bg-white rounded-md shadow-md py-5">
          <div className="text-lg font-semibold text-[#0F1629] px-4 py-2">
            <div className="cursor-pointer mb-2">Crypto Taxes</div>
            <div className="cursor-pointer mb-2">Free Tools</div>
            <div className="cursor-pointer">Resource Center</div>
            <div>
              <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-14 mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
