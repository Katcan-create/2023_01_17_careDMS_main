import React from "react";
import contactSvg from "../assets/contact.svg";

const Contact = () => {
  const handleSubmit = () => {
    // submit code goes here
  };

  return (
    <>
      <div
        className="w-full px-5 md:px-12"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="w-full flex items-center gap-10 px-10">
        <div className="w-full image hidden lg:block">
            <img
              src={contactSvg}
              alt="login image"
              width={500}
              className="hover:animate-pulse rounded-full p-2"
            />
          </div>
          
          <div className="w-full">
            <h1 className="text-4xl font-bold">Contact</h1>
            <h2 className="text-md md:text-lg text-green-500 font-bold mt-1">
              Always here to hear from you
            </h2>

            <hr className="mt-5" />

            <div className="history mt-5 text-sm md:text-lg w-full">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="w-full grid md:grid-cols-2 gap-5 mb-5">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter name..."
                    className="text-sm ring-2 ring-green-300 p-2 rounded-md w-full focus:placeholder:text-white px-4 duration-700 outline-none focus:ring-green-500"
                  />

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email..."
                    className="text-sm ring-2 ring-green-300 p-2 rounded-md w-full focus:placeholder:text-white px-4 duration-700 outline-none focus:ring-green-500"
                  />
                </div>

                <textarea
                  name="message"
                  id="message"
                  className="text-sm ring-2 ring-green-300 p-2 rounded-md w-full focus:placeholder:text-white px-4 duration-700 outline-none focus:ring-green-500 h-48"
                  placeholder="Type message..."
                ></textarea>

                <button
                  type="submit"
                  className="bg-green-500 p-2 rounded-md w-full mt-3 text-white hover:bg-green-600 duration-500 hover:translate-y-1"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Contact;
