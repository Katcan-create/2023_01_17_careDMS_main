import React, { useRef, useState } from "react";

const WellLed = () => {
  const [active, setActive] = useState("workforce");
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

  const Workforce = () => {
    return (
      <div className="w-full py-5">
        <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
          <div className={"flex justify-between items-start"}>
            <h1
              className={
                "w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800"
              }
            >
              Guidance for Workforce
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
            There is a correlation between human resources metrics (workforce)
            and the impact on a provider’s overall performance and key areas of
            risk. Poor workforce metrics may result in a rise in the number of
            incidents, complaints low staff morale etc. which ultimately impact
            on patient experience of the service. <br /> <br /> Reporting
            Requirements: <br /> 1. Dashboard reporting - Staff sickness &
            absence rate, vacancy rate, Appraisal rates and Mandatory &
            Statutory training (Mast). The main areas under the Mast are: Health
            & Safety, Fire Training, Basic life support, Information Governance
            and safeguarding children and adult training. Depending on the
            service type, there may be other training that the service would
            deem mandatory for staff. These need to be reflected in the
            organisation's guidance/policy on training. <br /> <br /> 2.
            Additional reporting - Quarterly report that includes commentary on
            the areas above, as well as the cover arrangements for vacancies
            like bank/agency use and clinical supervision arrangements.
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
                htmlFor="sbr"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Sickness absence rate
              </label>
              <input
                type="number"
                name="sbr"
                id="sbr"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="ara"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Appraisal Rate - Annual
              </label>
              <input
                type="text"
                name="ara"
                id="ara"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="mastra"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Mandatory and Statutory Training rate - Annual
              </label>
              <input
                type="text"
                name="mastra"
                id="mastra"
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

  const StaffSurvey = () => {
    return (
      <div className="w-full py-5">
        <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
          <div className={"flex justify-between items-start"}>
            <h1
              className={
                "w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800"
              }
            >
              Guidance for Staff Survey
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
            Staff surveys should be carried out to collect the experiences and
            opinions of the staff on a range of matters e.g. job satisfaction,
            health & well-being, leadership, raising concerns, personal
            development etc. Staff surveys should be completed at least once a
            year and the provider will be expected to include the findings in
            their quality report to commissioners when completed. The timescale
            for completion of these will be negotiated with each provider. <br /> <br />
            Reporting Requirements: <br /> 1. Dashboard reporting - Total number of
            staff, and response rate to the survey. <br /> <br /> 2. Additional reporting – An
            annual report with details findings from the survey to include
            themes/issues identified and actions to address them.
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
                htmlFor="tnossa"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Total number of staff surveyed - Annual
              </label>
              <input
                type="number"
                name="tnossa"
                id="tnossa"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="rr"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Response rate
              </label>
              <input
                type="text"
                name="rr"
                id="rr"
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
        <div className="w-full">
          <div className="menu flex justify-end gap-4 uppercase text-xs pt-5 text-gray-400">
            <h1
              onClick={() => activateMenu("workforce")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "workforce"
              )}`}
            >
              Workforce
            </h1>

            <h1
              onClick={() => activateMenu("staffsurvey")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "staffsurvey"
              )}`}
            >
              Staff Survey
            </h1>
          </div>

          {/* Content */}
          {active === "workforce" ? <Workforce /> : null}
          {active === "staffsurvey" ? <StaffSurvey /> : null}
        </div>
      </div>
    </>
  );
};

export default WellLed;
