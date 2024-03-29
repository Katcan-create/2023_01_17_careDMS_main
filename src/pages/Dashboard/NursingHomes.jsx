import React, { useState } from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Top from "../../components/Dashboard/Top";
import Safety from "../../components/Dashboard/Qp/Safety.jsx";
import Effectiveness from "../../components/Dashboard/Qp/Effectiveness";
import Responsiveness from "../../components/Dashboard/Qp/Responsiveness";
import WellLed from "../../components/Dashboard/Qp/WellLed";
import Caring from "../../components/Dashboard/Qp/Caring";
import Quantitative from "../../components/Dashboard/Qp/Quantitative";

const NursingHomes = () => {
  const [type, setType] = useState("safety");

  const setActive = (_type) => {
    return _type === type ? "bg-indigo-400 text-white" : null;
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
                NURSING HOMES
              </h1>
              {/* <h2 className="text-center text-gray-500 text-sm mt-2">Dashboard</h2> */}
            </div>

            {/* Main - Submenu */}

            <div className="w-full submenu flex gap-2 justify-center mt-4 items-center">
              <span>-</span>
              <button
                onClick={() => setType("safety")}
                className={`uppercase duration-700 hover:text-black text-xs md:text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "safety"
                )}`}
              >
                Safety
              </button>
              <button
                onClick={() => setType("effectiveness")}
                className={`uppercase duration-700 hover:text-black text-xs md:text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "effectiveness"
                )}`}
              >
                Effectiveness
              </button>
              <button
                onClick={() => setType("responsiveness")}
                className={`uppercase duration-700 hover:text-black text-xs md:text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "responsiveness"
                )}`}
              >
                Responsiveness
              </button>
              <button
                onClick={() => setType("wellled")}
                className={`uppercase duration-700 hover:text-black text-xs md:text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "wellled"
                )}`}
              >
                Well Led
              </button>

              <button
                onClick={() => setType("caring")}
                className={`uppercase duration-700 hover:text-black text-xs md:text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "caring"
                )}`}
              >
                Caring
              </button>

              <button
                onClick={() => setType("quantitative")}
                className={`uppercase duration-700 hover:text-black text-xs md:text-sm font-extrabold p-2 hover:bg-indigo-200 ${setActive(
                  "quantitative"
                )}`}
              >
                Quantitative
              </button>
              <span>-</span>
            </div>

            <hr className="mt-4" />

            {/* Main - Submenu - Content */}
            {type === "safety" ? <Safety /> : null}
            {type === "effectiveness" ? <Effectiveness /> : null}
            {type === "responsiveness" ? <Responsiveness /> : null}
            {type === "wellled" ? <WellLed /> : null}
            {type === "caring" ? <Caring /> : null}
            {type === "quantitative" ? <Quantitative /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default NursingHomes;
