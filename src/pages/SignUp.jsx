import React, { useEffect, useRef, useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { getClassifications, getCsrfToken, registerProvider } from "../api";
import regImg from "../assets/reg.svg";
import Axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const SignUp = () => {
  const navigate = useNavigate();
  const [classifications, setClassifications] = useState([]);
  const [fields, setFields] = useState({});
  const [cls, setCls] = useState([]);
  const submitBtn = useRef();

  const handleCls = (e) => {
    if (e.target.checked === true) {
      if (!cls.includes(e.target.value)) {
        setCls(cls.concat(e.target.value));
      }
    } else {
      setCls(cls.filter((cls) => cls !== e.target.value));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    submitBtn.current.innerHTML = "Please wait...";
    submitBtn.current.classList.add("animate-pulse");

    const formData = new FormData();
    formData.append("first_name", fields.first_name);
    formData.append("last_name", fields.last_name);
    formData.append("email", fields.email);
    formData.append("password", fields.password);
    formData.append("password_confirmation", fields.password_confirmation);
    formData.append("phone_no", fields.phone_no);
    formData.append("classification[]", cls);
    formData.append("role", fields.role);
    formData.append("contact_address", fields.contact_address);
    formData.append("agency_name", fields.agency_name);
    formData.append("agency_address", fields.agency_address);
    formData.append("immediate_parent", fields.immediate_parent);
    formData.append("ultimate_parent", fields.ultimate_parent);
    formData.append("reg_no", fields.reg_no);
    formData.append("agency_phone_no", fields.agency_phone_no);

    const res = await registerProvider(formData);
    if (res.status === 201) {
      submitBtn.current.innerHTML = "Sign Up";
      submitBtn.current.classList.remove("animate-pulse");
      navigate("/email-notification", { state: { email: fields.email } });
    } else if (res.status === 204) {
      navigate("/email-notification", { state: { email: fields.email } });
    } else {
      toast.error(res.response.data.message);
      submitBtn.current.innerHTML = "Sign Up";
      submitBtn.current.classList.remove("animate-pulse");
    }
  };

  const handleGetClassifications = async () => {
    const res = await getClassifications();

    if (res.status === 200) {
      setClassifications(res.data);
    } else {
      console.log(res);
    }
  };

  // Get CSRF token
  const handleGetToken = async () => {
    await getCsrfToken();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleGetClassifications();
    handleGetToken();
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="w-full flex items-center px-10 lg:px-0">
          <div className="w-full image hidden lg:flex flex-col justify-center text-center bg-green-400 h-[800px] rounded-2xl shadow-lg border-r-4 border-white">
            {/* <h1 className="text-6xl mt-[-300px] text-white">Sign Up</h1> */}
            <img src={regImg} alt="login image" className="" />
          </div>
          <div className="w-full flex flex-col gap-5 justify-center items-center">
            <FiUser
              size={60}
              className="text-white bg-green-400 rounded-full p-2 shadow-lg border-2 border-white duration-700 hover:scale-125"
            />

            <form className="w-full lg:px-20" onSubmit={handleRegister}>
            <p className="mb-2 text-center text-green-500 text-sm">Labels with asterisk (*) are compulsory</p> <hr className="mb-3"/>
              {/* <label
                htmlFor="providername"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Provider Name
              </label>
              <input
                type="text"
                required
                id="providername"
                name="providername"
                onChange={(e) => (fields.agency_name = e.target.value)}
                placeholder="Name of Provider organisation"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              /> */}

              {/* <label
                htmlFor="phone"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Company registration number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                onChange={(e) => (fields.reg_no = e.target.value)}
                placeholder="Company registration number"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              /> */}

              {/* <label
                htmlFor="immediateparentcompany"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Name of immediate parent company (if part of a group structure)
              </label>
              <input
                type="text"
                required
                id="immediateparentcompany"
                name="immediateparentcompany"
                onChange={(e) => (fields.immediate_parent = e.target.value)}
                placeholder="Name of immediate parent company (if part of a group structure"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              /> */}

              {/* <label
                htmlFor="ultimateparentcompany"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Name of ultimate parent company (if part of a group structure)
              </label>

              <input
                type="text"
                name="ultimateparentcompany"
                id="ultimateparentcompany"
                required
                onChange={(e) => (fields.ultimate_parent = e.target.value)}
                placeholder="Name of ultimate parent company (if part of a group structure"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              /> */}

              {/* <label
                htmlFor="agency_phone_no"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Company Telephone Number
              </label>
              <input
                type="text"
                name="agency_phone_no"
                required
                id="agency_phone_no"
                onChange={(e) => (fields.agency_phone_no = e.target.value)}
                placeholder="Company Telephone Number"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              /> */}

              <label
                htmlFor="first_name"
                className="text-sm capitalize font-bold text-green-900"
              >
                *First Name
              </label>
              <input
                type="text"
                name="first_name"
                required
                id="first_name"
                placeholder="First Name"
                onChange={(e) => (fields.first_name = e.target.value)}
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              />

              <label
                htmlFor="last_name"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                onChange={(e) => (fields.last_name = e.target.value)}
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              />

              {/* <label
                htmlFor="position"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Position/Role in Organisation
              </label>
              <input
                type="text"
                name="position"
                required
                id="position"
                placeholder="Position/Role in Organisation"
                onChange={(e) => (fields.role = e.target.value)}
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              /> */}

              <label
                htmlFor="contactphone"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Telephone Number
              </label>
              <input
                type="text"
                name="contactphone"
                required
                id="contactphone"
                onChange={(e) => (fields.phone_no = e.target.value)}
                placeholder="Contact Telephone Number"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              />

              <label
                htmlFor="email"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="Email Address"
                onChange={(e) => (fields.email = e.target.value)}
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              />

              {/* <label
                htmlFor="address"
                className="text-sm capitalize font-bold text-green-900"
              >
                Contact address
              </label>
              <textarea
                name="address"
                id="address"
                onChange={(e) => (fields.contact_address = e.target.value)}
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
                placeholder="Contact address"
              ></textarea> */}

              {/* <label
                htmlFor="agency_address"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Registered company address
              </label>
              <textarea
                name="agency_address"
                required
                id="agency_address"
                onChange={(e) => (fields.agency_address = e.target.value)}
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
                placeholder="Registered company address"
              ></textarea> */}

              <label
                htmlFor="password"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Password
              </label>
              <input
                type="password"
                name="password"
                required
                id="password"
                onChange={(e) => (fields.password = e.target.value)}
                placeholder="Enter password"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-5 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              />

              <label
                htmlFor="password_confirmation"
                className="text-sm capitalize font-bold text-green-900"
              >
                *Confirm password
              </label>
              <input
                type="password"
                name="password_confirmation"
                required
                id="password_confirmation"
                onChange={(e) =>
                  (fields.password_confirmation = e.target.value)
                }
                placeholder="Confirm password"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-5 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              />

              <label className="text-gray-700">
                Please check in the relevant box(es) if any of the following
                classifications apply to your organisation: (Please select all
                that apply)
              </label>

              <div className="flex flex-col gap-3 my-5 w-full">
                {classifications.map((e, index) => {
                  return (
                    <div key={index} className="flex w-full gap-5">
                      <p className="text-green-500">{e.name}</p>
                      <input
                        onChange={handleCls}
                        value={e.id}
                        type="checkbox"
                        name="community"
                      />
                    </div>
                  );
                })}
              </div>

              <button
                ref={submitBtn}
                type="submit"
                className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-700 hover:shadow duration-700"
              >
                Sign Up
              </button>
            </form>
            <Link
              to="/sign-in"
              className="text-gray-500 text-sm hover:text-green-600 duration-500"
            >
              Have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
