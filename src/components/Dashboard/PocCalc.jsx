import React from "react";

const PocCalc = () => {
  return (
    <>
      <div className="w-full" data-aos="flip-left" data-aos-duration="1000">
        <div className="w-full mt-10 flex justify-center">
          <form className="w-full lg:px-10">
            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="username"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Service Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="service-user-id"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Service User Id
              </label>
              <input
                type="number"
                name="service-user-id"
                id="service-user-id"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="standard-weekly-cost"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Estimated standard weekly cost
              </label>
              <input
                type="text"
                name="standard-weekly-cost"
                id="standard-weekly-cost"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="1-day"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Estimated Weekly Cost with 1-day Bank Holiday
              </label>
              <input
                type="text"
                name="1-day"
                id="1-day"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="2-days"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Estimated Weekly Cost with 2-days Bank Holiday
              </label>
              <input
                type="text"
                name="2-days"
                id="2-days"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-400 p-2 my-5 uppercase text-sm font-bold text-white hover:translate-y-1 transition duration-700"
            >
              Calculate
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PocCalc;
