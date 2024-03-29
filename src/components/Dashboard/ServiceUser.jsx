import React from "react";

const ServiceUser = () => {
  return (
    <>
      <div className="w-full" data-aos="flip-left" data-aos-duration="1000">
        <div className="w-full mt-10 mb-5 flex justify-center">
          <form className="w-full lg:px-10">
            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="name"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Service User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="dob"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Service User DOB
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="serviceusercontact"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Service User Contact (If child)
              </label>
              <input
                type="text"
                name="serviceusercontact"
                id="serviceusercontact"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="referralsource"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Referral Source
              </label>
              <input
                type="text"
                name="referralsource"
                id="referralsource"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="startdate"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Care Package Start Date
              </label>
              <input
                type="date"
                name="startdate"
                id="startdate"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="careers"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Number of careers
              </label>
              <input
                type="number"
                name="careers"
                id="careers"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="addressone"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Service User Address 1
              </label>
              <textarea
                id="addressone"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              ></textarea>
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="addresstwo"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Service User Address 2
              </label>
              <textarea
                id="addresstwo"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              ></textarea>
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="postcode"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Post Code
              </label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
              />
            </div>

            <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
              <label
                htmlFor="country"
                className="w-[26rem] font-bold uppercase text-sm text-gray-600"
              >
                Country
              </label>
              <select
                name="country"
                id="country"
                className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize"
              >
                <option value="England">England</option>
                <option value="Wales">Wales</option>
                <option value="Scotland">Scotland</option>
                <option value="N. Ireland">N. Ireland</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-400 p-2 my-4 uppercase text-sm font-bold text-white hover:translate-y-1 transition duration-700"
            >
              Add Service User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceUser;
