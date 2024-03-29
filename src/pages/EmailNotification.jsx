import React, { useEffect, useRef } from "react";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getCsrfToken, resendEmailCode } from "../api";
import verify from "../assets/verify.svg";

const EmailNotification = () => {
  const location = useLocation()
  const resendBtn = useRef()

  const resendCode = async() => {
    resendBtn.current.innerHTML = 'Please wait...'
    const res = await resendEmailCode();
    console.log(res);
    if (res.status === 202) {
      toast.success('Link has been sent successfully')
      resendBtn.current.innerHTML = 'Resend link'
    } else {
      toast.error(res.response.data.message)
      resendBtn.current.innerHTML = 'Resend link'
    }
  }

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
            <img src={verify} alt="verify image" width={460} className="" />
            <div className="w-full content text-center mt-[-17px]">
                <h1 className="text-3xl mb-1 font-bold">Verify your email address</h1>
                <p className="text-lg">A verification link has been sent to <i>{ location.state.email }</i></p>
                <p className="text-sm text-gray-500">Didn't receive link? <button ref={resendBtn} className="text-green-500" onClick={resendCode}>Resend link</button></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailNotification;
