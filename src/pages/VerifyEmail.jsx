import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { verifyEmail } from '../api'
import progress from '../assets/progress.svg'
import success from '../assets/success.svg'

const VerifyEmail = () => {
  const url = new URL(window.location.href)
  const [title, setTitle] = useState("Email Verification")
  const [message, setMessage] = useState("Verification in progress...")
  const [isVerified, setIsVerified] = useState(false)

  console.log(url.searchParams.get('signature'))


  const handleVerifyEmail = async () => {
    const apiUrl = `${url.searchParams.get('url')}&signature=${url.searchParams.get('signature')}`
    const res = await verifyEmail(apiUrl)
    if (res) {
      setIsVerified(true)
      setTitle('Email Verification Successful')
      setMessage('Email Verified')
      localStorage.setItem("isAuth", true)
    }
  }

  useEffect(() => {
    handleVerifyEmail()
  }, []);

  return (
    <>
    <div className="w-full lg:mt-[-40px]">
      <div className="w-full flex items-center px-10 lg:px-52">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <img src={ isVerified ? success : progress } alt="verify image" width={350} className="" />
          <div className="w-full content text-center mt-[-17px]">
              <h1 className="text-3xl mb-1 font-bold">{ title }</h1>
              <p className={`text-lg ${ isVerified ? 'text-green-400' : 'text-yellow-500 font-light animate-pulse' }`}>{ message }</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default VerifyEmail