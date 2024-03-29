import moment from "moment";
import React, { useState } from "react";
import CarePackageInfo from "../../components/Dashboard/CarePackageInfo";
import Commissioners from "../../components/Dashboard/Commissioners";
import Navbar from "../../components/Dashboard/Navbar";
import PocCalc from "../../components/Dashboard/PocCalc";
import ServiceUser from "../../components/Dashboard/ServiceUser";
import Top from "../../components/Dashboard/Top";

const CareManager = () => {
  const [isCarePackagePortfolio, setIsCarePackagePortfolio] = useState(true);
  const [isCommissioner, setIsCommissioner] = useState(true);
  const [isServiceUser, setIsServiceUser] = useState(false);
  const [isCarePackageInfo, setIsCarePackageInfo] = useState(false);
  const [isPoc, setIsPoc] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [manager, setManager] = useState("carepackageportfolio");

  const openManager = (manager) => {
    setIsCarePackagePortfolio(false);
    setIsCommissioner(false);
    setIsServiceUser(false);
    setIsCarePackageInfo(false);
    setIsPoc(false);
    setIsSaved(false);

    switch (manager) {
      case "carepackageportfolio":
        setIsCarePackagePortfolio(true);
        setManager("carepackageportfolio");
        break;
      
        case "commssioner":
        setIsCommissioner(true);
        setManager("commssioner");
        break;

      case "serviceuser":
        setIsServiceUser(true);
        setManager("serviceuser");
        break;

      case "carepackageinfo":
        setIsCarePackageInfo(true);
        setManager("carepackageinfo");
        break;

      case "poc":
        setIsPoc(true);
        setManager("poc");
        break;
      
        case "saved":
        setIsSaved(true);
        setManager("saved");
        break;

      default:
        break;
    }
  };

  const setActive = (menu) => {
    return menu == manager ? "bg-indigo-400 text-white" : null;
  };
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full flex">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="body w-full px-10 lg:pl-24 pr-10 pt-7 min-h-screen">
            <Top />

            {/* Body */}
            <div className="mt-2 w-full">
              <h1 className="text-3xl text-slate-800 mt-3 uppercase text-center">
                Placements / Care Packages Awarded
              </h1>
              {/* <h2 className="text-center text-gray-500 text-sm mt-2">Dashboard</h2> */}
            </div>

            {/* Main - Submenu */}

            <div className="w-full submenu flex gap-2 justify-center mt-4 items-center">
              <span>-</span>
              
              <button
                onClick={() => openManager("commssioner")}
                className={`uppercase duration-700 hover:text-black text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "commssioner"
                )}`}
              >
                Commissioner Details
              </button>
              <button
                onClick={() => openManager("serviceuser")}
                className={`uppercase duration-700 hover:text-black text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "serviceuser"
                )}`}
              >
                Service User Details
              </button>
              <button
                onClick={() => openManager("carepackageinfo")}
                className={`uppercase duration-700 hover:text-black text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "carepackageinfo"
                )}`}
              >
                Care Package Info
              </button>
              <button
                onClick={() => openManager("poc")}
                className={`uppercase duration-700 hover:text-black text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "poc"
                )}`}
              >
                POC Calc  
              </button>
              
              <button
                onClick={() => openManager("saved")}
                className={`uppercase duration-700 hover:text-black text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "saved"
                )}`}
              >
                Other
              </button>
              <span>-</span>
            </div>

            <hr className="mt-4" />

            {/* Main - Submenu - Content */}
            {isCommissioner ? <Commissioners /> : null}
            {isServiceUser ? <ServiceUser /> : null}
            {isCarePackageInfo ? <CarePackageInfo /> : null}
            {isPoc ? <PocCalc /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareManager;
