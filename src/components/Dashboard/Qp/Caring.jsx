import React, { useRef, useState } from "react";

const Caring = () => {
  const [active, setActive] = useState("patientExp");
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

  const PatientExp = () => {
    return (
      <div className="w-full py-5">
        <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
          <div className={"flex justify-between items-start"}>
            <h1
              className={
                "w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800"
              }
            >
              Guidance for Patient Experience
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
            One of the key quality indicators is evidence of a positive
            experience of the service from the patient's point of view. This can
            be obtained via a patient experience survey which providers are
            expected to for their service. The Friends and Family Test has been
            introduced in large provider organisations but has not yet been
            introduced for smaller providers. Providers are encouraged to design
            or use an exsisitng patient experience survey that asks for feedback
            under each of the CQC categories of caring, responsiveness, safety,
            effectiveness and well led. Frequency of survey will depend on
            service type however we will ask for an annual update as a minimum. <br /> <br />
            Reporting Requirements: <br /> 1. Dashboard reporting - Total number of
            questionnaires distributed to patients, percentage of response
            received and percentage of positive responses. <br /> <br />  2. Additional
            reporting - Patient survey report of emerging themes and trends,
            issues raised positive and negative and evidence that patient
            feedback has been used to improve services.
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
                htmlFor="noqda"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Number of questionnaires distributed - Annually
              </label>
              <input
                type="number"
                name="noqda"
                id="noqda"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="rra"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Response rate - Annual
              </label>
              <input
                type="text"
                name="rra"
                id="rra"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="percentpr"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                % Positive responses
              </label>
              <input
                type="text"
                name="percentpr"
                id="percentpr"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="vr"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Vacancy rate
              </label>
              <input
                type="text"
                name="vr"
                id="vr"
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
              onClick={() => activateMenu("patientExp")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "patientExp"
              )}`}
            >
              Patient Experience
            </h1>
          </div>

          {/* Content */}
          {active === "patientExp" ? <PatientExp /> : null}
        </div>
      </div>
    </>
  );
};

export default Caring;
