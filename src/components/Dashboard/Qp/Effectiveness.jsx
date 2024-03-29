import React, { useRef, useState } from "react";

const Effectiveness = () => {
  const [active, setActive] = useState("audits");
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

  const Audits = () => {
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
                htmlFor="noarc"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Number of Audits/Quality Reviews carried out (provide details in
                exceptions template)
              </label>
              <input
                type="number"
                name="noarc"
                id="noarc"
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

  const Prom = () => {
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
                htmlFor="prom"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                PROM (where applicable)
              </label>
              <input
                type="text"
                name="prom"
                id="prom"
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
      <div className="w-full" data-aos="flip-right" data-aos-duration="1000">
        <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg my-4">
          <div className={"flex justify-between items-start"}>
            <h1
              className={
                "w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800"
              }
            >
              Guidance for Effectiveness
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
            Clinical effectiveness is defined as "the application of the best
            knowledge, derived from research, clinical experience, and patient
            preferences to achieve optimum processes and outcomes of care for
            patients. The process involves a framework of informing, changing,
            and monitoring practice." (Department of Health, 1996). Clinical
            effectiveness is about improving patients' total experience of
            healthcare and is an essential part of improving and assuring
            quality. The aim of clinical effectiveness is to use evidence to
            improve the effectiveness of clinical practice and service delivery.{" "}
            <br /> <br />
            Reporting Requirements: <br />
            1. Dashboard reporting - Total number of audits carried out in the
            reporting period. For example documentation/record keeping or
            continuity of care. Where Patient Reported Outcome Measures (PROMs)
            are being used please provide results in the quality dashboard with
            further details in the exceptions template. <br /> <br />
            2. Additional reporting - Other evidence-based practice activities,
            audit calendar (please provide a commentary on these activities in
            the exceptions template).
          </p>
        </div>
        <div className="w-full">
          <div className="menu flex justify-end gap-4 uppercase text-xs pt-5 text-gray-400">
            <h1
              onClick={() => activateMenu("audits")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "audits"
              )}`}
            >
              Audits
            </h1>

            <h1
              onClick={() => activateMenu("prom")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "prom"
              )}`}
            >
              PROM (where applicable)
            </h1>
          </div>

          {/* Content */}
          {active === "audits" ? <Audits /> : null}
          {active === "prom" ? <Prom /> : null}
        </div>
      </div>
    </>
  );
};

export default Effectiveness;
