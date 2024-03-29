import React, { useRef, useState } from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Top from "../../components/Dashboard/Top";

const Poc = () => {
  const notification = useRef();
  const [monSchedule, setMonSchedule] = useState([{ props: "" }]);
  const [isShow, setIsShow] = useState(true);
  const [day, setDay] = useState();
  const [state, setState] = useState(0);
  const [duration, setDuration] = useState(0);
  let choice = [];

  // Durations
  let [monDuration, setMonDuration] = useState(0);

  const handleSchedule = (e, _day) => {
    const status = e.target.checked;
    setDay(_day);

    status ? setIsShow(true) : setIsShow(false);
  };

  const handlePush = (_day) => {
    switch (_day) {
      case "mon":
        monSchedule.push({ props: "" });
        break;

      default:
        break;
    }
    setState(state + 1);
  };

  const handlePop = (_day, index) => {
    switch (_day) {
      case "mon":
        monSchedule.splice(index, 1);
        break;

      default:
        break;
    }

    setState(state + 1);
  };

  const daysDur = (e, _day) => {
    switch (_day) {
      case "mon":
        if (choice.includes(e)) {
          console.log("Exists>>>");
        } else {
          choice.push(e);
          monDuration += parseInt(e);
          console.log("durationMon :>> ", monDuration);
        }
        break;

      default:
        break;
    }
  };

  const timeConvert = () => {
    let saver = 0;
    saver += duration;
    let num = saver;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    let days = rhours / 24;
    let rdays = Math.floor(days);
    return (
      rdays + " day(s) " + rhours + " hour(s) and " + rminutes + " minute(s)."
    );
  };

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
                POC - Cost Calculator for Quick Quotes
              </h1>

              <hr className="mt-4" />

              <div
                className="w-full"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg my-4">
                  <div className={"flex justify-between items-start"}>
                    <h1
                      className={
                        "w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800"
                      }
                    >
                      Guidance for POC - COST CALCULATOR
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
                  <p className={"text-sm text-left"}>
                  POC cost calculator helps managers provide instant quotes to
                  commissioners/funders for care packages. Make sure commissioners
                  have provided you with the number of hours per week; day or
                  night job; the type of carer or healthcare professional. Using
                  your rate card this calculator will provide the weekly cost of
                  the care package{" "}
                    <br /> <br />
                    Please Note: Night time period starts from 11p.m to 6 a.m,
                unless the worker and employer agree a different night period.
                If they do, it must be 7 hours long and include midnight to 5am.
                It must be agreed in writing.
                  </p>
                </div>
                <div className="w-full mt-10 flex justify-center">
                  <form className="w-full lg:px-10">
                    <div className="group w-full flex flex-col items-start mb-10 gap-1">
                      <label
                        htmlFor="nocpr"
                        className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                      >
                        Number of health care professionals required
                      </label>
                      <input
                        type="number"
                        name="nocpr"
                        id="nocpr"
                        className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                      />
                    </div>

                    <h1 className="text-gray-600 font-bold uppercase text-sm mb-5">
                      Care Package Scheduling Details:
                    </h1>

                    <div className="group w-full flex items-start mb-5 gap-3">
                      <input
                        onClick={(e) => handleSchedule(e, "mon")}
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer shadow-2xl"
                        name="mon"
                        id="mon"
                      />

                      <label
                        htmlFor="mon"
                        className="text-sm uppercase text-gray-600"
                      >
                        Schedule
                      </label>
                    </div>

                    {isShow && day == "mon"
                      ? monSchedule.map((e, index) => {
                          return (
                            <div key={index} className="w-full pb-5">
                              <div className="w-full flex flex-col md:flex-row gap-3 items-center">
                                <div className="group w-full flex flex-col gap-1">
                                  <label
                                    htmlFor="cat"
                                    className="text-xs uppercase text-gray-600"
                                  >
                                    Select Category
                                  </label>
                                  <select
                                    name="cat"
                                    id="cat"
                                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                                  >
                                    <option value="Band 3 HCA">
                                      Band 3 HCA
                                    </option>
                                    <option value="Band 4 HCA">
                                      Band 4 HCA
                                    </option>
                                    <option value="LD Carer (Band 4)">
                                      LD Carer (Band 4)
                                    </option>
                                    <option value="RN Child /RSCN Nurse (Band 5)">
                                      RN Child /RSCN Nurse (Band 5)
                                    </option>
                                    <option value="RN - Mental Health or Learning Disability (Band 6 )">
                                      RN - Mental Health or Learning Disability
                                      (Band 6 )
                                    </option>
                                  </select>
                                </div>

                                <div className="group w-full flex flex-col gap-1">
                                  <label
                                    htmlFor="type"
                                    className="text-xs uppercase text-gray-600"
                                  >
                                    Select Job Type
                                  </label>
                                  <select
                                    name="type"
                                    id="type"
                                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                                  >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                  </select>
                                </div>

                                <div className="group w-full flex flex-col gap-1">
                                  <label
                                    htmlFor="type"
                                    className="text-xs uppercase text-gray-600"
                                  >
                                    Select Day
                                  </label>
                                  <select
                                    name="type"
                                    id="type"
                                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                                  >
                                    <option value="Mon">Monday</option>
                                    <option value="Tues">Tuesday</option>
                                    <option value="Wed">Wednesday</option>
                                    <option value="Thurs">Thursday</option>
                                    <option value="Fri">Friday</option>
                                    <option value="Sat">Saturday</option>
                                    <option value="Sun">Sunday</option>
                                  </select>
                                </div>

                                <div className="group w-full flex flex-col gap-1">
                                  <label
                                    htmlFor="time"
                                    className="text-xs uppercase text-gray-600"
                                  >
                                    Set time
                                  </label>
                                  <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                                  />
                                </div>

                                <div className="group w-full flex flex-col gap-1">
                                  <label
                                    htmlFor="duration"
                                    className="text-xs uppercase text-gray-600"
                                  >
                                    Set duration
                                  </label>
                                  <select
                                    onChange={(e) =>
                                      setDuration(e.target.value)
                                    }
                                    name="duration"
                                    id="duration"
                                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize"
                                  >
                                    <option value="30">30 minutes</option>
                                    <option value="60">60 minutes</option>
                                    <option value="90">90 minutes</option>
                                    <option value="120">120 minutes</option>
                                  </select>
                                </div>

                                <span
                                  onClick={() => handlePop("mon", index)}
                                  className="mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer"
                                >
                                  -
                                </span>
                              </div>
                            </div>
                          );
                        })
                      : null}

                    {isShow && day == "mon" ? (
                      <span
                        onClick={() => handlePush("mon")}
                        className="w-7 justify-center bg-blue-400 h-6 flex items-center p-2 font-bold text-white cursor-pointer"
                      >
                        +
                      </span>
                    ) : null}

                    <p className="font-bold my-5 float-right">
                      {timeConvert()}
                    </p>
                    <button
                    type="submit"
                    className="w-full bg-indigo-400 p-2 my-2 uppercase text-sm font-bold text-white hover:translate-y-1 transition duration-700"
                  >
                    Calculate
                  </button>

                  <p className="font-bold my-2 text-sm">
                      Estimated weekly pro: <b>$829</b>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poc;
