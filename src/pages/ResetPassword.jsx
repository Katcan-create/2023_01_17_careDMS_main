import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getCsrfToken, resetPassword } from "../api";
import reset from "../assets/reset.svg";

const ResetPassword = () => {
  const submitBtn = useRef();
  const [fields, setFields] = useState([]);
  const url = new URL(window.location.href)

  const handleSubmit = async (e) => {
    e.preventDefault();

    submitBtn.current.innerHTML = "Please wait...";
    submitBtn.current.classList.add("animate-pulse");

    const formData = new FormData();
    formData.append("password", fields.password);
    formData.append("password_confirmation", fields.confirmpassword);
    formData.append("token", url.searchParams.get("token"));
    formData.append("email", url.searchParams.get("email"));

    const res = await resetPassword(formData);
    if (res.status === 200) {
        submitBtn.current.innerHTML = "Reset Password";
        submitBtn.current.classList.remove("animate-pulse");
        toast.success(res.data.message);
      } else {
        toast.error(res.response.data.message);
        submitBtn.current.innerHTML = "Reset Password";
        submitBtn.current.classList.remove("animate-pulse");
      }
  };

  // Get CSRF token
  const handleGetToken = async () => {
    await getCsrfToken();
  };

  useEffect(() => {
    handleGetToken();
  }, []);

  return (
    <>
      <div className="w-full lg:mt-[-40px]">
        <div className="w-full flex items-center px-10 lg:px-52">
          <div className="w-full flex flex-col gap-5 justify-center items-center">
            <img src={reset} alt="verify image" width={280} className="" />
            <div className="w-full content text-center lg:mt-[-17px]">
              <h1 className="text-3xl mb-3 font-bold">Reset your password</h1>
              <form onSubmit={handleSubmit} className="lg:px-52">
                <input
                  type="password"
                  required
                  name="password"
                  onChange={(e) => (fields.password = e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
                />

                <input
                  type="password"
                  required
                  name="password"
                  onChange={(e) => (fields.confirmpassword = e.target.value)}
                  placeholder="Confirm password"
                  className="w-full px-5 p-2 ring-2 ring-gray-400 mb-4 rounded duration-500 focus:ring-green-400 focus:placeholder:text-white outline-none"
                />
                <button
                  ref={submitBtn}
                  type="submit"
                  className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-700 hover:shadow duration-700"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
