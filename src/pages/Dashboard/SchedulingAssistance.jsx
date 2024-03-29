import React from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Top from "../../components/Dashboard/Top";

const SchedulingAssistance = () => {
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
                Scheduling Assistance
              </h1>

              <hr className="mt-4" />
              {/* 
              <div className="overflow-x-auto rounded-lg shadow hover:shadow-lg duration-700 mt-5">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b-2 b border-gray-200 w-full">
                    <tr>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Client Id
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        First Name
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Surname
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Sex
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Date of birth
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Start Date
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Location / Cluster
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Post Code
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Referral Source
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Case Worker / Team
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        PO Allocated
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Days with SPT / PO Team
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y">
                    <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                      <td className="p-3 text-sm text-gray-700">
                        <span className="text-blue-500 hover:underline">
                          CTA-60223809
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">Authority</td>
                      <td className="p-3 text-sm text-gray-700">Eden</td>
                      <td className="p-3 text-sm text-gray-700">Male</td>
                      <td className="p-3 text-sm text-gray-700">01/01/2023</td>
                      <td className="p-3 text-sm text-gray-700">677262</td>
                      <td className="p-3 text-sm text-gray-700">Essex North</td>
                      <td className="p-3 text-sm text-gray-700">RM16 4RS</td>
                      <td className="p-3 text-sm text-gray-700">Hospital</td>
                      <td className="p-3 text-sm text-gray-700">Anne Young</td>
                      <td className="p-3 text-sm text-gray-700">Patricia Smith</td>
                      <td className="p-3 text-sm text-gray-700">2</td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className=" rounded-lg text-[0.55rem] bg-green-200 p-1.5 uppercase font-bold tracking-wider text-green-800 bg-opacity-50">
                          Approved
                        </span>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div> */}

              <div
                className="grid md:grid-cols-2 gap-4 w-full my-5"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="w-full rounded-lg shadow p-4 hover:shadow-lg duration-700 cursor-auto bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-indigo-500 text-md font-bold uppercase">
                      Client Identity: 112342
                    </p>
                    <span className="bg-indigo-500 text-white uppercase text-[0.65rem] hover:text-gray-500 duration-500 cursor-pointer p-1 rounded">
                      Band 3 HCA
                    </span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex w-full justify-between">
                    <p className="text-sm text-gray-400 mb-2">
                      Start Time:{" "}
                      <span className="text-indigo-400">12:30 PM</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      Duration:{" "}
                      <span className="text-indigo-400">1hrs</span>
                    </p>
                  </div>

                  <div className="flex w-full justify-between">
                    <p className="text-sm text-gray-400 mb-2">
                      Location:{" "}
                      <span className="text-indigo-400">ESSEX NORTH</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      Postcode:{" "}
                      <span className="text-indigo-400">RMS16 4RS</span>
                    </p>
                  </div>

                  <div className="flex w-full justify-between">
                    <p className="text-sm text-gray-400 mb-2">
                      Referral Source:{" "}
                      <span className="text-indigo-400">Hospital</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      Case Worker / Team:{" "}
                      <span className="text-indigo-400">Anne Young</span>
                    </p>
                  </div>

                  <div className="flex w-full justify-between">
                    <p className="text-sm text-gray-400 mb-2">
                      PO Allocated:{" "}
                      <span className="text-indigo-400">Patricia Smith</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      Days with SPT / PO Team:{" "}
                      <span className="text-indigo-400">2</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* <h1 className="text-xl font-bold">Eden Shaw</h1>
                    <p className="text-black">Male</p> */}
                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                      <select
                        name="staff"
                        id="staff"
                        required
                        className="w-full ring-1 p-2 rounded-full duration-500 outline-none px-3 text-sm focus:ring-indigo-400"
                      >
                        <option defaultValue selected disabled>
                          Assign Staff
                        </option>
                        <option value="Staff 1">Staff 1</option>
                        <option value="Staff 2">Staff 2</option>
                        <option value="Staff 3">Staff 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulingAssistance;
