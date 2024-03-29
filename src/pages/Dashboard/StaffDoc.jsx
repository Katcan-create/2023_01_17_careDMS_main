import React from 'react'
import Navbar from '../../components/Dashboard/Navbar';
import Top from '../../components/Dashboard/Top';

const StaffDoc = () => {
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
              Staff / Employee Documents
            </h1>

            <hr className="mt-4" />

            <form className="w-full lg:px-10 mt-5" data-aos="flip-right"
                data-aos-duration="1000">
              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="staff-name"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                  Staff Name
                </label>
                <input
                  type="text"
                  name="staff-name"
                  id="staff-name"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label htmlFor="sex" className="w-[26rem] font-bold uppercase text-sm text-gray-600">Sex</label>
                <select
                  name="sex"
                  id="sex"
                  required
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="staff-address"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                  Staff Address
                </label>
                <textarea
                  name="staff-address"
                  id="staff-address"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 focus:placeholder:text-white"
                  placeholder="staff-address"
                  required
                ></textarea>
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="staff-tel"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                  Staff Telephone
                </label>
                <input
                  type="text"
                  name="staff-tel"
                  id="staff-tel"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="staff-email"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                  Staff Email
                </label>
                <input
                  type="email"
                  name="staff-email"
                  id="staff-email"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>
              
              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="staff-clinical-qualification"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                  Staff Clinical Qualifications
                </label>
                <input
                  type="email"
                  name="staff-clinical-qualification"
                  id="staff-clinical-qualification"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label htmlFor="staff-job-cat" className="w-[26rem] font-bold uppercase text-sm text-gray-600">Staff Job Category</label>
                <select
                  name="staff-job-cat"
                  id="staff-job-cat"
                  required
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label htmlFor="staff-cert" className="w-[26rem] font-bold uppercase text-sm text-gray-600">Staff Certificate</label>
                <select
                  name="staff-cert"
                  id="staff-cert"
                  required
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                >
                  <option value="Bsc">Bsc</option>
                  <option value="HND">HND</option>
                </select>
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label htmlFor="staff-qt" className="w-[26rem] font-bold uppercase text-sm text-gray-600">Staff Qualifying Trainings</label>
                
                <input
                  type="text"
                  name="staff-qt"
                  id="staff-qt"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>
              
              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label htmlFor="staff-cv" className="w-[26rem] font-bold uppercase text-sm text-gray-600">Staff CV</label>
                
                <input
                  type="file"
                  name="staff-cv"
                  id="staff-cv"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label htmlFor="other-doc" className="w-[26rem] font-bold uppercase text-sm text-gray-600">Other Relevant Document</label>
                
                <input
                  type="file"
                  name="other-doc"
                  id="other-doc"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label htmlFor="pay" className="w-[26rem] font-bold uppercase text-sm text-gray-600">Staff Hourly Agreed Pay Rate</label>
                
                <input
                  type="text"
                  name="pay"
                  id="pay"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-400 p-2 my-5 uppercase text-sm font-bold text-white hover:translate-y-1 transition duration-700"
              >
                Upload Document
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default StaffDoc