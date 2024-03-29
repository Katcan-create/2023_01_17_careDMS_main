import React, { useEffect } from 'react'
import './App.css'
import Index from './Route/Index'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './bootstrap'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { callUser } from './api'

AOS.init();

function App() {

  // useEffect(() => {
  //   const calluserHandle = async() => {
  //     const user = await callUser();
  //     if (user.status === 200) {
  //       localStorage.setItem("isAuth", true)
  //     } else {
  //       localStorage.setItem("isAuth", false)
  //     }
  //   }
  //   setTimeout(() => {
  //     calluserHandle()
  //   }, 1000);
  // }, [])

  return (
    <div className="App">
      <ToastContainer />
      <Index />
    </div>
  )
}

export default App
