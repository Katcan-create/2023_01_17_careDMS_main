import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { getCsrfToken, sendPasswordResetLink } from "../api";
import forgot from "../assets/forgot.svg";

const ForgotPassword = () => {
  const submitBtn = useRef();
  const [email, setEmail] = useState()

  // Handle reset password link submission
  const handleSubmit = async(e) => {
    e.preventDefault()

    submitBtn.current.innerHTML = "Please wait...";
    submitBtn.current.classList.add("animate-pulse");

    const formData = new FormData();
    formData.append("email", email);
    
    const res = await sendPasswordResetLink(formData);
    console.log(res);
    if (res.status === 200) {
        submitBtn.current.innerHTML = "Reset Password";
        submitBtn.current.classList.remove("animate-pulse");
        toast.success(res.data.message);
      } else {
        toast.error(res.response.data.message);
        submitBtn.current.innerHTML = "Reset Password";
        submitBtn.current.classList.remove("animate-pulse");
      }
  }

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
            <img src={forgot} alt="verify image" width={280} className="" />
            <div className="w-full content text-center lg:mt-[-17px]">
              <h1 className="text-3xl mb-3 font-bold">Forgot your password</h1>
              <form onSubmit={handleSubmit} className="lg:px-48">
              <input
                type="email"
                required
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
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

export default ForgotPassword;
