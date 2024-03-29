import React, { useRef } from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Top from "../../components/Dashboard/Top";

const CarePackagePortfolio = () => {
  const notification = useRef();

  const closeNotification = () => {
    notification.current.parentNode.parentNode.remove();
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
                Care Packages Awarded
              </h1>

              <hr className="mt-4" />

              <div
                className="overflow-auto rounded-lg shadow hover:shadow-lg duration-700 mt-5"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                {/* Notification */}
                <div
                  className="w-full notification bg-yellow-100 p-5 rounded shadow-lg"
                  data-aos="fade-in"
                  data-aos-duration="3000"
                >
                  <div className={"flex justify-between items-start"}>
                    <h1
                      className={
                        "w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800"
                      }
                    >
                      GENERAL INFORMATION
                    </h1>
                    <span
                      className={
                        "text-2xl text-red-400 cursor-pointer hover:scale-150 duration-700"
                      }
                      onClick={closeNotification}
                      ref={notification}
                    >
                      &times;
                    </span>
                  </div>
                  <div className="overflow-auto rounded-lg shadow hover:shadow-lg duration-700">
                    <table className="w-full">
                      <thead className="bg-white border-b-2 b border-gray-200">
                        <tr>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Job Category
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Job Category Fullname
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Rate Day
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Job Type
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Hourly Rate
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y">
                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">HCA band 3</span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Health care Assistant band 3
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>

                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">HCA band 4</span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Health care Assistant band 4
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>

                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">
                              Career LD band 3
                            </span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Career Learning Disability band 3
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>

                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">
                              Career LD band 4
                            </span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Career Learning Disability band 4
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>

                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">RSCN band 5</span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Registered Sick Child Nurse band 5
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>

                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">RSCN band 6</span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Registered Sick Child Nurse band 6
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>

                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">
                              RN MH or LD band 6
                            </span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Registered Nurse Mental Health or Learning
                            Disability band 6
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>

                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">RN band 5</span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Registered Nurse band 5
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>

                        <tr className="duration-700 hover:shadow-xl hover:cursor-pointer">
                          <td className="p-3 text-sm text-gray-700">
                            <span className="hover:underline">RN band 6</span>
                          </td>
                          <td className="p-3 text-sm text-blue-500">
                            Registered Nurse band 6
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Mon / Tues / Wed / Thurs / Fri / Sat / Sun
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="rounded-lg text-[0.55rem] bg-slate-800 p-1.5 uppercase font-bold tracking-wider text-white">
                              AM / PM
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-100 border-b-2 b border-gray-200">
                    <tr>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        User Id
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Username
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Commissioner Name
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        No of Careers
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Other 1
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Other 2
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Other 3
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
                        Elect Project
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
                        Elect Project
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
                        Elect Project
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
                        Elect Project
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
                        Elect Project
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
                        Elect Project
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
                        Elect Project
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

export default CarePackagePortfolio;
