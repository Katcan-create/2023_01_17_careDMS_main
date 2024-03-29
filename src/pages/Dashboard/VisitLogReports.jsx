import React, { useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import Navbar from "../../components/Dashboard/Navbar";
import Top from "../../components/Dashboard/Top";

const VisitLogReports = () => {
  const [areas, setAreas] = useState([]);

  const pushContent = () => {
    areas.push({ props: "" });

    console.log(areas);
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
                Visit Log Reports
              </h1>

              <hr className="mt-4" />

              <form className="w-full lg:px-10 mt-5" data-aos="flip-right" data-aos-duration="1000">
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="report-date"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Daily staff visit Report on Date
                  </label>
                  <input
                    type="date"
                    name="report-date"
                    id="report-date"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="staff-name"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Staff Name
                  </label>
                  <input
                    type="text"
                    name="staff-name"
                    id="staff-name"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="service-username"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Service User Name
                  </label>
                  <input
                    type="text"
                    name="service-username"
                    id="service-username"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="area"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Area
                  </label>
                  <select
                    name="area"
                    id="area"
                    required
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  >
                    <option selected disabled>
                      Select area
                    </option>
                    <option value="Breathing">Breathing</option>
                    <option value="Nutrition">Nutrition</option>
                    <option value="Continence">Continence</option>
                    <option value="Skin Integrity">Skin Integrity</option>
                    <option value="Employers Liability Insurance (£5m)">
                      Employers Liability Insurance (£5m)
                    </option>
                    <option value="Mobility">Mobility</option>
                    <option value="Communication">Communication</option>
                    <option value="Psychological/Emotional">
                      Psychological/Emotional
                    </option>
                    <option value="Cognition">Cognition</option>
                    <option value="Behaviour">Behaviour</option>
                    <option value="Drug therapies and medication: symptom control">
                      Drug therapies and medication: symptom control
                    </option>
                    <option value="Altered states of consciousness">
                      Altered states of consciousness
                    </option>
                  </select>
                </div>

                {/* <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="applicable"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                  Applicable / NA to Service User
                </label>
                <select
                  name="applicable"
                  id="applicable"
                  required
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                >
                  <option selected disabled>
                    Applicable / NA to Service User
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="n/a">N/A</option>
                </select>
              </div> */}

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="comments"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Comments
                  </label>
                  <textarea
                    name="comments"
                    id="comments"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 focus:placeholder:text-white"
                    placeholder="Comments"
                    required
                  ></textarea>
                </div>

                <div
                  onClick={pushContent}
                  className="w-36 flex gap-2 uppercase text-xs bg-blue-600 p-2 text-white font-extrabold cursor-pointer hover:translate-y-1 duration-700 hover:shadow-lg hover:bg-blue-500"
                >
                  <span>+</span>
                  <span>Add more areas</span>
                </div>

                {areas.map((area, index) => {
                  return (
                    <div key={index} className="my-5">
                      <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label
                          htmlFor="area"
                          className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                        >
                          Area
                        </label>
                        <select
                          name="area"
                          id="area"
                          required
                          className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                        >
                          <option selected disabled>
                            Select area
                          </option>
                          <option value="Breathing">Breathing</option>
                          <option value="Nutrition">Nutrition</option>
                          <option value="Continence">Continence</option>
                          <option value="Skin Integrity">Skin Integrity</option>
                          <option value="Employers Liability Insurance (£5m)">
                            Employers Liability Insurance (£5m)
                          </option>
                          <option value="Mobility">Mobility</option>
                          <option value="Communication">Communication</option>
                          <option value="Psychological/Emotional">
                            Psychological/Emotional
                          </option>
                          <option value="Cognition">Cognition</option>
                          <option value="Behaviour">Behaviour</option>
                          <option value="Drug therapies and medication: symptom control">
                            Drug therapies and medication: symptom control
                          </option>
                          <option value="Altered states of consciousness">
                            Altered states of consciousness
                          </option>
                        </select>
                      </div>

                      <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label
                          htmlFor="comments"
                          className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                        >
                          Comments
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 focus:placeholder:text-white"
                          placeholder="Comments"
                          required
                        ></textarea>
                      </div>
                    </div>
                  );
                })}

                <button
                  type="submit"
                  className="w-full bg-indigo-400 p-2 my-5 uppercase text-sm font-bold text-white hover:translate-y-1 transition duration-700"
                >
                  Upload Document
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitLogReports;
