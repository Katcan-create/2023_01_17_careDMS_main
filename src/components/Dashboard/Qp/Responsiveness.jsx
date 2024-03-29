import React, { useRef, useState } from "react";

const Responsiveness = () => {
  const [active, setActive] = useState("doc");
  const notification = useRef();

  const activateMenu = (menu) => {
    setActive(menu);
  };

  const decActive = (menu) => {
    return menu === active
      ? "border-b-2 border-slate-700 text-slate-700"
      : null;
  };

  const closeNotification = () => {
    notification.current.parentNode.parentNode.remove();
  };

  const Doc = () => {
    return (
      <div className="w-full py-5">
        <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
          <div className={"flex justify-between items-start"}>
            <h1
              className={
                "w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800"
              }
            >
              Guidance for Duty of Candour
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
            The introduction of Regulation 20 (Duty of Candour) is a direct
            response to recommendation 181 of the Francis Inquiry Report into
            Mid Staffordshire NHS Foundation Trust, which recommended that a
            statutory duty of candour be introduced for health and care
            providers. Since November 2014, recording of duty of candour became
            a legal requirement. The family should be informed within 10 working
            days of a moderate to severe harm or death to a service user. <br />{" "}
            <br />
            Reporting Requirements: <br />
            1. Dashboard reporting - Total number of audits carried out in the
            reporting period. For example documentation/record keeping or
            continuity of care. Where Patient Reported Outcome Measures (PROMs)
            are being used please provide results in the quality dashboard with
            further details in the exceptions template. <br /> <br /> 2.
            Additional reporting - Other evidence-based practice activities,
            audit calendar (please provide a commentary on these activities in
            the exceptions template).
          </p>
        </div>

        <div className="w-full si__content py-5">
          <form className={"w-full"}>
            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="date"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Date entry
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="nomh"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Number of Moderate Harm/% compliance with Duty of candour
              </label>
              <input
                type="number"
                name="nomh"
                id="nomh"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="nosh"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Number of Severe Harm/% compliance with Duty of candour
              </label>
              <input
                type="number"
                name="nosh"
                id="nosh"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <button
              type="submit"
              className={
                "uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105"
              }
            >
              Save record
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Complaints = () => {
    return (
      <div className="w-full py-5">
        <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
          <div className={"flex justify-between items-start"}>
            <h1
              className={
                "w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800"
              }
            >
              Guidance for Complaints
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
            A complaint can be any expression of dissatisfaction or where a
            concern has not been locally resolved. The provider should have a
            policy in place for the effective management of complaints to ensure
            that they are compliant with the 3 working day timescale for
            acknowledging and 25 working day timescale for responding to
            complaints. <br /> <br /> Reporting Requirements: <br /> 1. Dashboard reporting - Total
            number of complaints received, percentage acknowledged within 3
            working days of receipt and percentage responded to within 25
            working days. <br /> <br /> 2. Additional reporting - Quarterly report detailing
            the emerging themes and trends from complaints, including actions
            put in place to address these. The report could also include
            compliments received.
          </p>
        </div>

        <div className="w-full si__content py-5">
          <form className={"w-full"}>
            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="date"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Date entry
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="tnocr"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Total number of complaints received
              </label>
              <input
                type="number"
                name="tnocr"
                id="tnocr"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="percentacknowledged"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                % Acknowledged in 3 working days
              </label>
              <input
                type="text"
                name="percentacknowledged"
                id="percentacknowledged"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="percentresponded"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                % Responded to in 25 working days
              </label>
              <input
                type="text"
                name="percentresponded"
                id="percentresponded"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <button
              type="submit"
              className={
                "uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105"
              }
            >
              Save record
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Compliments = () => {
    return (
      <div className="w-full py-5">
        <div className="w-full si__content py-5">
          <form className={"w-full"}>
            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="date"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Date entry
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="totalnocr"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Total number of complaints received
              </label>
              <input
                type="number"
                name="totalnocr"
                id="totalnocr"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <button
              type="submit"
              className={
                "uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105"
              }
            >
              Save record
            </button>
          </form>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="w-full" data-aos="flip-left" data-aos-duration="1000">
        <div className="w-full">
          <div className="menu flex justify-end gap-4 uppercase text-xs pt-5 text-gray-400">
            <h1
              onClick={() => activateMenu("doc")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "doc"
              )}`}
            >
              Duty of Candour
            </h1>

            <h1
              onClick={() => activateMenu("complaints")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "complaints"
              )}`}
            >
              Complaints
            </h1>

            <h1
              onClick={() => activateMenu("compliments")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "compliments"
              )}`}
            >
              Compliments
            </h1>
          </div>

          {/* Content */}
          {active === "doc" ? <Doc /> : null}
          {active === "complaints" ? <Complaints /> : null}
          {active === "compliments" ? <Compliments /> : null}
        </div>
      </div>
    </>
  );
};

export default Responsiveness;
