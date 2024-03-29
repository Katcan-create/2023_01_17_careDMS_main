import moment from 'moment';
import React, { useState } from 'react'

const Top = () => {
    const [time, setTime] = useState(moment().format("h:mm:ss a"));

    setInterval(() => {
      setTime(moment().format("h:mm:ss A"));
    }, 1000);
  return (
    <>
        <div className="top w-full flex justify-between items-center mb-10">
            <div className="date flex flex-col items-start ml-6">
              <h1 className="">Today's Date</h1>
              <span className="text-xs text-gray-400">
                {moment().format("MMMM Do, YYYY")}
              </span>
            </div>

            {/* Time */}
            <div className="time flex flex-col">
              <span className="text-lg p-2 rounded text-white bg-slate-800">
                {time}
              </span>
            </div>
          </div>
          {/* <hr className="mt-4" /> */}
    </>
  )
}

export default Top