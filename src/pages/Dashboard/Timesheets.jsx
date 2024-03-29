import React from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Top from "../../components/Dashboard/Top";

const Timesheets = () => {
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
                TimeSheets
              </h1>

              <hr className="mt-4" />

              <div className="overflow-auto rounded-lg shadow hover:shadow-lg duration-700 mt-5" data-aos="flip-right" data-aos-duration="1000">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b-2 b border-gray-200">
                    <tr>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Visit Id
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        User Id
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Visit Start
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Visit End
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Requested Approver
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Status
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Last Approval Action
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
                      <td className="p-3 text-sm text-gray-700">
                        23364
                      </td>
                      <td className="p-3 text-sm text-gray-700">12/12/2022</td>
                      <td className="p-3 text-sm text-gray-700">01/01/2023</td>
                      <td className="p-3 text-sm text-gray-700">John Smart</td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className=" rounded-lg text-[0.55rem] bg-green-200 p-1.5 uppercase font-bold tracking-wider text-green-800 bg-opacity-50">
                          Approved
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">15/05/2022</td>
                    </tr>

                    <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                      <td className="p-3 text-sm text-gray-700">
                        <span className="text-blue-500 hover:underline">
                          CTA-60223809
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        23364
                      </td>
                      <td className="p-3 text-sm text-gray-700">12/12/2022</td>
                      <td className="p-3 text-sm text-gray-700">01/01/2023</td>
                      <td className="p-3 text-sm text-gray-700">John Smart</td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className=" rounded-lg text-[0.55rem] p-1.5 uppercase font-bold tracking-wider text-indigo-800 bg-indigo-200 bg-opacity-50">
                          Submitted
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">15/05/2022</td>
                    </tr>

                    <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                      <td className="p-3 text-sm text-gray-700">
                        <span className="text-blue-500 hover:underline">
                          CTA-60223809
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        23364
                      </td>
                      <td className="p-3 text-sm text-gray-700">12/12/2022</td>
                      <td className="p-3 text-sm text-gray-700">01/01/2023</td>
                      <td className="p-3 text-sm text-gray-700">John Smart</td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className=" rounded-lg text-[0.55rem] p-1.5 uppercase font-bold tracking-wider text-red-800 bg-red-200 bg-opacity-50">
                          Failed
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">15/05/2022</td>
                    </tr>

                    <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                      <td className="p-3 text-sm text-gray-700">
                        <span className="text-blue-500 hover:underline">
                          CTA-60223809
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        23364
                      </td>
                      <td className="p-3 text-sm text-gray-700">12/12/2022</td>
                      <td className="p-3 text-sm text-gray-700">01/01/2023</td>
                      <td className="p-3 text-sm text-gray-700">John Smart</td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className=" rounded-lg text-[0.55rem] p-1.5 uppercase font-bold tracking-wider text-indigo-800 bg-indigo-200 bg-opacity-50">
                          Submitted
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">15/05/2022</td>
                    </tr>

                    <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                      <td className="p-3 text-sm text-gray-700">
                        <span className="text-blue-500 hover:underline">
                          CTA-60223809
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        23364
                      </td>
                      <td className="p-3 text-sm text-gray-700">12/12/2022</td>
                      <td className="p-3 text-sm text-gray-700">01/01/2023</td>
                      <td className="p-3 text-sm text-gray-700">John Smart</td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className=" rounded-lg text-[0.55rem] p-1.5 uppercase font-bold tracking-wider text-indigo-800 bg-indigo-200 bg-opacity-50">
                          Submitted
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">15/05/2022</td>
                    </tr>

                    <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                      <td className="p-3 text-sm text-gray-700">
                        <span className="text-blue-500 hover:underline">
                          CTA-60223809
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        23364
                      </td>
                      <td className="p-3 text-sm text-gray-700">12/12/2022</td>
                      <td className="p-3 text-sm text-gray-700">01/01/2023</td>
                      <td className="p-3 text-sm text-gray-700">John Smart</td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className=" rounded-lg text-[0.55rem] p-1.5 uppercase font-bold tracking-wider text-indigo-800 bg-indigo-200 bg-opacity-50">
                          Submitted
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">15/05/2022</td>
                    </tr>

                    <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                      <td className="p-3 text-sm text-gray-700">
                        <span className="text-blue-500 hover:underline">
                          CTA-60223809
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        23364
                      </td>
                      <td className="p-3 text-sm text-gray-700">12/12/2022</td>
                      <td className="p-3 text-sm text-gray-700">01/01/2023</td>
                      <td className="p-3 text-sm text-gray-700">John Smart</td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className=" rounded-lg text-[0.55rem] p-1.5 uppercase font-bold tracking-wider text-indigo-800 bg-indigo-200 bg-opacity-50">
                          Submitted
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700">15/05/2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timesheets;
