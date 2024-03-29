import React from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Top from "../../components/Dashboard/Top";

const AgencyBusinessDoc = () => {
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
                Agency Business Document
              </h1>

              <hr className="mt-4" />

              <form className="w-full lg:px-10 mt-5" data-aos="flip-right"
                data-aos-duration="1000">
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="doc-name"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Document Name
                  </label>
                  <select
                    name="doc-name"
                    id="doc-name"
                    required
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  >
                    <option selected disabled>
                      Select name of document
                    </option>
                    <option value="Certificate of Incorporation">
                      Certificate of Incorporation
                    </option>
                    <option value="Band 4 HCA">Band 4 HCA</option>
                    <option value="Care Quality Commission (CQC) Certificate of Registration ">
                      Care Quality Commission (CQC) Certificate of Registration{" "}
                    </option>
                    <option value="Indemnity Insurance Policy (i.e. £5M)">
                      Indemnity Insurance Policy (i.e. £5M)
                    </option>
                    <option value="Employers Liability Insurance (£5m)">
                      Employers Liability Insurance (£5m)
                    </option>
                    <option value="Public Indemnity">Public Indemnity</option>
                    <option value="Incident Reporting & Serious Incident Policy">
                      Incident Reporting & Serious Incident Policy
                    </option>
                    <option value="Counter Fraud and Corruption Policy response">
                      Counter Fraud and Corruption Policy response
                    </option>
                    <option value="Safeguarding Children and Young People Policy">
                      Safeguarding Children and Young People Policy
                    </option>
                    <option value="Safeguarding Adults Policy including Prevent">
                      Safeguarding Adults Policy including Prevent
                    </option>
                    <option value="Contingency and Business Continuity Policy">
                      Contingency and Business Continuity Policy
                    </option>
                    <option value="Health and Safety Policy and Procedure">
                      Health and Safety Policy and Procedure
                    </option>
                    <option value="Accident Incident Near Miss reporting Policy - RIDDOR">
                      Accident Incident Near Miss reporting Policy - RIDDOR
                    </option>
                    <option value="COVID Risk Assessment & PPE Policy">
                      COVID Risk Assessment & PPE Policy
                    </option>
                    <option value="Infection Control">Infection Control</option>
                    <option value="Management & Information Governance">
                      Management & Information Governance
                    </option>
                    <option value="Complaints Policy">Complaints Policy</option>
                    <option value="Admissions to Care Homes Policy">
                      Admissions to Care Homes Policy
                    </option>
                    <option value="Equality, Diversity & Inclusion">
                      Equality, Diversity & Inclusion
                    </option>
                  </select>
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="embedded"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Documents embedded(Y/N)
                  </label>
                  <select
                    name="embedded"
                    id="embedded"
                    required
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  >
                    <option selected disabled>
                      Documents embedded(Y/N)
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="contract-type"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    If contract (Is it signed) Y/N/N_A
                  </label>
                  <select
                    name="contract-type"
                    id="contract-type"
                    required
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="n/a">N/A</option>
                  </select>
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="embedded-doc"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Embedded document
                  </label>
                  <input
                    type="file"
                    name="embedded-doc"
                    id="embedded-doc"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>

                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="comments"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                    Comments
                  </label>
                  <textarea
                    name="comments"
                    id="comments"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 focus:placeholder:text-white"
                    placeholder="Comments"
                    required
                  ></textarea>
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
  );
};

export default AgencyBusinessDoc;
