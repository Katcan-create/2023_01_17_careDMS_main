import React from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Top from "../../components/Dashboard/Top";

const RateCards = () => {
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
                Rate Cards / Price List
              </h1>

              <hr className="mt-4" />

              <form className="w-full lg:px-10 mt-5" data-aos="flip-right"
                data-aos-duration="1000">

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="category"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Job Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  >
                    <option value="Band 3 HCA">Band 3 HCA</option>
                    <option value="Band 4 HCA">Band 4 HCA</option>
                    <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                    <option value="RN Child /RSCN Nurse (Band 5)">
                      RN Child /RSCN Nurse (Band 5)
                    </option>
                    <option value="RN - Mental Health or Learning Disability (Band 6 )">
                      RN - Mental Health or Learning Disability (Band 6 )
                    </option>
                  </select>
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="rate-day"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Day of week
                  </label>
                  <select
                    name="rate-day"
                    id="rate-day"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  >
                    <option selected disabled>
                      Rate Day
                    </option>
                    <option value="Mon">Monday</option>
                    <option value="Tues">Tuesday</option>
                    <option value="Wed">Wednesday</option>
                    <option value="Thurs">Thursday</option>
                    <option value="Fri">Friday</option>
                    <option value="Sat">Saturday</option>
                    <option value="Sun">Sunday</option>
                  </select>
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="job-type"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Job type (am/pm)
                  </label>
                  <select
                    name="job-type"
                    id="job-type"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>


                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="hourly-rate"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Hourly Rate
                  </label>
                  <input
                    type="text"
                    name="hourly-rate"
                    id="hourly-rate"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>

                <button type="submit" className='w-full bg-indigo-400 p-2 my-5 uppercase text-sm font-bold text-white hover:translate-y-1 transition duration-700'>Upload Rate</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateCards;
