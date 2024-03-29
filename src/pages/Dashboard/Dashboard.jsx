import moment from "moment";
import React, { useRef, useState } from "react";
import Messages from "../../components/Dashboard/Messages";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import Top from "../../components/Dashboard/Top";

const Dashboard = () => {
  const notification = useRef();

  const closeNotification = () => {
    notification.current.parentNode.parentNode.remove();
  };

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
              <h1 className="text-3xl mt-3 uppercase text-center">
                Care Digital Management System
              </h1>
              <h2 className="text-center text-gray-500 text-sm mt-2">
                Dashboard
              </h2>
            </div>

            {/* Messsages from staffs */}
            <Messages />
          </div>

          {/* Side bar */}
          {/* <Sidebar /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
