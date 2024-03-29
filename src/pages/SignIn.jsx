import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCsrfToken, getToken, loginProvider } from "../api";
import login from "../assets/login.svg";

const SignIn = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState([]);
  const submitBtn = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    submitBtn.current.innerHTML = "Please wait...";
    submitBtn.current.classList.add("animate-pulse");

    const formData = new FormData();
    formData.append("email", fields.email);
    formData.append("password", fields.password);

    const res = await loginProvider(formData);
    if (res.status === 200) {
      submitBtn.current.innerHTML = "Login";
      submitBtn.current.classList.remove("animate-pulse");
      toast.success("Logged In successfully");
      localStorage.setItem("isAuth", true)
      window.location.href = '/provider/dashboard'
    } else {
      toast.error(res.response.data.message);
      submitBtn.current.innerHTML = "Login";
      submitBtn.current.classList.remove("animate-pulse");
    }

  };

  const handleGetToken = async () => {
    // const token = await getToken()
    const response = await getCsrfToken();
    // response.headers.set('X-CSRF-TOKEN', response.data)
    console.log(response.headers)
    // Cookies.set('X-CSRF-TOKEN', token.data);
  };


  useEffect(() => {
    handleGetToken();
  }, []);
  return (
    <>
      <div className="w-full lg:mt-[-50px]">
        <div className="w-full flex items-center px-10 lg:px-16">
          <div className="w-full image hidden lg:block">
            <img
              src={login}
              alt="login image"
              width={600}
              className="hover:animate-pulse rounded-full p-2"
            />
          </div>
          <div className="w-full flex flex-col gap-5 justify-center items-center lg:px-16">
            <FiUser
              size={60}
              className="text-white bg-green-400 rounded-full p-2 shadow-lg border-2 border-white duration-700 hover:scale-125"
            />
            <form className="w-full" onSubmit={handleLogin}>
              <label
                htmlFor="email"
                className="text-sm capitalize font-bold text-green-900"
              >
                Email address
              </label>
              <input
                type="email"
                required
                id="email"
                name="email"
                onChange={(e) => (fields.email = e.target.value)}
                placeholder="Enter email address"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              />

              <label
                htmlFor="password"
                className="text-sm capitalize font-bold text-green-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                name="password"
                onChange={(e) => (fields.password = e.target.value)}
                placeholder="Enter password"
                className="w-full px-5 p-2 ring-2 ring-gray-400 mb-5 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
              />
              <button
                ref={submitBtn}
                type="submit"
                className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-700 hover:shadow duration-700"
              >
                Login
              </button>
            </form>
            <div className="w-full flex justify-between">
              <Link
                to="/forgot-password"
                className="text-gray-500 text-sm hover:text-green-600 duration-500"
              >
                Forgot Password?
              </Link>
              <Link
                to="/sign-up"
                className="text-gray-500 text-sm hover:text-green-600 duration-500"
              >
                Not registered? Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
