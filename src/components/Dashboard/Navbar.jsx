import React, { useEffect, useState } from "react";
import {
  FiBarChart2,
  FiSettings,
  FiLayers,
  FiUser,
  FiCommand,
  FiMonitor,
  FiLogOut,
  FiFolder,
} from "react-icons/fi";
import { BsCalculator } from "react-icons/bs";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [openQp, setQp] = useState(false);
  const [openCpub, setCpub] = useState(false);
  const [openRota, setRota] = useState(false);
  const [openAdmin, setAdmin] = useState(false);
  const [openTec, setTec] = useState(false);
  const [openStaffs, setStaffs] = useState(false);
  const [openPlacements, setPlacements] = useState(false);
  const { pathname } = useLocation();

  const setActive = (path) => {
    return `/${path}` == pathname ? "bg-indigo-400 p-2" : null;
  };

  const setSubActive = (path) => {
    return `/${path}` == pathname ? "bg-indigo-400 p-2 text-white" : null;
  };

  useEffect(() => {
    pathname.includes("adult-domiciliary-care") ||
    pathname.includes("cyp-domiciliary-care") ||
    pathname.includes("residential-homes") ||
    pathname.includes("nursing-homes") ||
    pathname.includes("hospice-adult") ||
    pathname.includes("hospice-cyp") ||
    pathname.includes("residential-nursing-homes")
      ? setQp(true)
      : null;

    pathname.includes("timesheet") ||
    pathname.includes("scheduling-assistance") ||
    pathname.includes("visit-tracking") ||
    pathname.includes("visit-log-reports") 
      ? setRota(true)
      : null;

    pathname.includes("ratecards") || pathname.includes("agency-business-doc")
      ? setAdmin(true)
      : null;

      pathname.includes("care-manager") || pathname.includes("care-package-portfolio") ? setPlacements(true) : null;
  }, []);
  return (
    <>
      <div className="w-72 hidden lg:block h-screen">
        <div className="flex flex-col gap-10 bg-indigo-500 w-72 fixed min-h-screen px-5 pt-8 text-white">
          <Link to="/" className="text-3xl font-bold ml-2">
            CDMS.
          </Link>

          <div className="w-full links flex flex-col gap-3">
            <Link
              className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400  duration-700 p-2 ${setActive(
                "provider/dashboard"
              )}`}
              to="/provider/dashboard"
            >
              <FiBarChart2 size={19} />
              <h6>Dashboard</h6>
            </Link>

            <Link
              className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400  duration-700 p-2 ${setActive(
                "provider/poc"
              )}`}
              to="/provider/poc"
            >
              <BsCalculator size={19} />
              <h6>POC - Cost Calculator</h6>
            </Link>

            <button
              className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                "provider/care-manager"
              )}`}
              onClick={() => setPlacements(!openPlacements)}
            >
              <FiSettings size={19} />
              <h6>Placements/Care Packages</h6>
            </button>

            {/* Rota / Scheduler children */}
            {openPlacements ? (
              <div
                className="w-full bg-white text-slate-900 ml-2 p-3 flex flex-col rounded-lg gap-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  to="/provider/care-package-portfolio"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/care-package-portfolio"
                  )}`}
                >
                  Care Package Portfolio
                </Link>

                <Link
                  to="/provider/care-manager"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/care-manager"
                  )}`}
                >
                  Add New Care Package
                </Link>
              </div>
            ) : null}

            <button
              className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                "provider/adult-domiciliary-care"
              )}`}
              onClick={() => setRota(!openRota)}
            >
              <FiFolder size={19} />
              <h6>Rota / scheduler</h6>
            </button>

            {/* Rota / Scheduler children */}
            {openRota ? (
              <div
                className="w-full bg-white text-slate-900 ml-2 p-3 flex flex-col rounded-lg gap-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  to="/provider/rota/scheduling-assistance"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/rota/scheduling-assistance"
                  )}`}
                >
                  Scheduling Assistance
                </Link>

                <Link
                  to="/provider/rota/visit-tracking"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/rota/visit-tracking"
                  )}`}
                >
                  Visits Tracking
                </Link>

                <Link
                  to="/provider/rota/timesheet"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/rota/timesheet"
                  )}`}
                >
                  Timesheets
                </Link>

                <Link
                  to="/provider/rota/visit-log-reports"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/rota/visit-log-reports"
                  )}`}
                >
                  Visits Log Reports
                </Link>
              </div>
            ) : null}

            <button
              className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                "provider/adult-domiciliary-care"
              )}`}
              onClick={() => setQp(!openQp)}
            >
              <FiLayers size={19} />
              <h6>Quality & Performance</h6>
            </button>

            {/* Q & P children */}
            {openQp ? (
              <div
                className="w-full bg-white text-slate-900 ml-2 p-3 flex flex-col rounded-lg gap-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  to="/provider/adult-domiciliary-care"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/adult-domiciliary-care"
                  )}`}
                >
                  Adult Domiciliary Care
                </Link>

                <Link
                  to="/provider/residential-homes"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/residential-homes"
                  )}`}
                >
                  Residential Homes
                </Link>

                <Link
                  to="/provider/nursing-homes"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/nursing-homes"
                  )}`}
                >
                  Nursing Homes
                </Link>

                <Link
                  to="/provider/hospice-adult"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/hospice-adult"
                  )}`}
                >
                  Hospice (Adult)
                </Link>

                <Link
                  to="/provider/hospice-cyp"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/hospice-cyp"
                  )}`}
                >
                  Hospice (CYP)
                </Link>

                <Link
                  to="/provider/residential-nursing-homes"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/residential-nursing-homes"
                  )}`}
                >
                  Residential & Nursing Homes
                </Link>

                <Link
                  to="/provider/cyp-domiciliary-care"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/cyp-domiciliary-care"
                  )}`}
                >
                  Children and Young People Domiciliary care
                </Link>
              </div>
            ) : null}

            <button
              className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                "provider/administration"
              )}`}
              onClick={() => setAdmin(!openAdmin)}
            >
              <FiUser size={19} />
              <h6>Administration</h6>
            </button>

            {/* Administration children */}
            {openAdmin ? (
              <div
                className="w-full bg-white text-slate-900 ml-2 p-3 flex flex-col rounded-lg gap-4 h-60 overflow-y-auto"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  to="/provider/admin/agency-business-doc"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/admin/agency-business-doc"
                  )}`}
                >
                  Agency Business Documentation
                </Link>

                <Link
                  to="/provider/admin/ratecards"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/admin/ratecards"
                  )}`}
                >
                  Agency Rate Card / Price List
                </Link>

                <Link
                  onClick={() => setStaffs(!openStaffs)}
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/admin"
                  )}`}
                >
                  Staffs / Employees' Documents
                </Link>

                {/* Inner sub menu */}

                {openStaffs ? (
                  <div
                    className="bg-indigo-400 p-1 pl-2 ml-3 flex divide-y gap-2 flex-col rounded"
                  >
                    <Link
                      to="/provider/staff-doc"
                      className={`text-sm text-white hover:p-1 duration-700 rounded-md hover:text-indigo-100 font-bold ${setSubActive(
                        "provider/staff-doc"
                      )}`}
                    >
                      Staff addresses & Contacts
                    </Link>

                    <Link
                      to="/provider/admin"
                      className={`text-sm text-white hover:p-1 duration-700 rounded-md hover:text-indigo-100 font-bold ${setSubActive(
                        "provider/admin"
                      )}`}
                    >
                      Staff Clinical Qualifications
                    </Link>

                    <Link
                      to="/provider/admin"
                      className={`text-sm capitalize text-white hover:p-1 duration-700 rounded-md hover:text-indigo-100 font-bold ${setSubActive(
                        "provider/admin"
                      )}`}
                    >
                      staff job category
                    </Link>

                    <Link
                      to="/provider/admin"
                      className={`text-sm capitalize text-white hover:p-1 duration-700 rounded-md hover:text-indigo-100 font-bold ${setSubActive(
                        "provider/admin"
                      )}`}
                    >
                      certificates
                    </Link>

                    <Link
                      to="/provider/admin"
                      className={`text-sm capitalize text-white hover:p-1 duration-700 rounded-md hover:text-indigo-100 font-bold ${setSubActive(
                        "provider/admin"
                      )}`}
                    >
                      qualifying trainings
                    </Link>

                    <Link
                      to="/provider/admin"
                      className={`text-sm capitalize text-white hover:p-1 duration-700 rounded-md hover:text-indigo-100 font-bold ${setSubActive(
                        "provider/admin"
                      )}`}
                    >
                      dates of recurring trainings
                    </Link>

                    <Link
                      to="/provider/admin"
                      className={`text-sm capitalize text-white hover:p-1 duration-700 rounded-md hover:text-indigo-100 font-bold ${setSubActive(
                        "provider/admin"
                      )}`}
                    >
                      CVs
                    </Link>
                  </div>
                ) : null}
              </div>
            ) : null}

            <button
              className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                "provider/tech-enabled-care"
              )}`}
              onClick={() => setTec(!openTec)}
            >
              <FiMonitor size={19} />
              <h6>WIP</h6>
            </button>

            {/* Technology Enabled Care children */}
            {openTec ? (
              <div
                className="w-full bg-white text-slate-900 ml-2 p-3 flex flex-col rounded-lg gap-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  to="/provider/adult-domiciliary-care"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/adult-domiciliary-care"
                  )}`}
                >
                  WIP 1
                </Link>

                <Link
                  to="/provider/residential-homes"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/residential-homes"
                  )}`}
                >
                  WIP 2
                </Link>

                <Link
                  to="/provider/nursing-homes"
                  className={`text-sm hover:bg-indigo-400 hover:p-2 duration-700 rounded-md hover:text-white font-bold ${setSubActive(
                    "provider/nursing-homes"
                  )}`}
                >
                  WIP 3
                </Link>
              </div>
            ) : null}
          </div>

          {/* Logout Options */}
          <Link className="w-full flex items-center text-sm gap-2 p-2 mt-32 duration-700 hover:bg-red-400">
            <FiLogOut />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      <div className="mobile lg:hidden">
        <HiMenuAlt2
          size={25}
          className="font-bold absolute mt-8 ml-4 text-indigo-500 cursor-pointer"
          onClick={() => setMobileMenu(!MobileMenu)}
        />
        {MobileMenu ? (
          <div
            data-aos="fade-right"
            className="mobile__menu absolute top-0 bg-indigo-700 left-0 w-80 md:w-[45rem] h-screen z-50 text-white pt-10 px-10 lg:hidden"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-3xl text-center font-bold">CDMS.</h1>
              <HiOutlineX
                onClick={() => setMobileMenu(!MobileMenu)}
                size={23}
                className="cursor-pointer duration-1000"
              />
            </div>

            <div className="w-full links flex flex-col gap-3 mt-5">
              <Link
                className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400  duration-700 p-2 ${setActive(
                  "dashboard"
                )}`}
                to="/dashboard"
              >
                <FiBarChart2 size={19} />
                <h6>Dashboard</h6>
              </Link>

              <Link
                className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                  ""
                )}`}
                to="/care-manager"
              >
                <FiSettings size={19} />
                <h6>Care Manager</h6>
              </Link>

              <Link
                className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                  ""
                )}`}
                to="/"
              >
                <FiCommand size={19} />
                <h6>Care Packages Under Bid</h6>
              </Link>

              <Link
                className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                  ""
                )}`}
                to="/"
              >
                <FiLayers size={19} />
                <h6>Q & P Monitoring</h6>
              </Link>

              <Link
                className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                  ""
                )}`}
                to="/"
              >
                <FiUser size={19} />
                <h6>Administration</h6>
              </Link>

              <Link
                className={`w-full link flex items-center text-[0.85rem] font-bold gap-2 hover:bg-indigo-400 duration-700 p-2 ${setActive(
                  ""
                )}`}
                to="/"
              >
                <FiMonitor size={19} />
                <h6>Technology Enabled Care</h6>
              </Link>
            </div>

            {/* Logout Options */}
            <Link className="w-full flex items-center text-sm gap-2 p-2 mt-60 duration-700 hover:bg-red-400">
              <FiLogOut />
              <span>Logout</span>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
