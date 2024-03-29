import React from "react";
import aboutImg from "../assets/about.svg";
import logo from "../assets/caredms.png";
import staff from "../assets/staff.svg";

const About = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col lg:flex-row items-center px-10 lg:px-16">
          <div className="w-full image">
            <img
              src={aboutImg}
              alt="login image"
              width={700}
              className="hover:animate-pulse rounded-full p-2"
            />
          </div>

          <div className="w-full">
            <h1 className="text-3xl lg:text-5xl mb-2 text-green-500"><span className="italic text-4xl lg:text-5xl mr-1">A</span>bout Us</h1>
            <p className="mb-3">
              CareDMS is a space where you confidently grow and manage your home
              care agency with Care Digital Management System. Streamline your
              day-to-day operations and promote efficiency with flexible
              features in a single, easy-to-use solution built for your
              business.
            </p>
            <p>
              <span className="text-green-500">Cedoz</span> is a registered
              Crown Commercial Service Supplier, providing its SaaS services,
              through the following platforms: • G-Cloud 13, and • Digital
              Outcomes and Specialists 5
            </p>
          </div>
        </div>

        <hr className="mx-10 my-5" />

        <div className="grid lg:grid-cols-3 px-10 py-10 gap-4">
          <div className="core bg-gray-100 p-5 rounded-lg hover:shadow-md duration-500 hover:-translate-y-2">
            <div className="w-full flex justify-between items-center py-1">
              <h1 className="text-green-700 mb-2 text-2xl">Our Core Values</h1>
              <img
                src={logo}
                alt="CareDMS Logo"
                width={100}
                className="mt-[-18px]"
              />
            </div>
            <hr className="mb-2" />
            <p>
              Digital transformation of businesses and organizations is a great
              opportunity to create value for both industry and society. Rapid
              advances in digital technology are redefining our world, and
              companies that fail to adapt will fail. We support organisations
              in the following areas: <br /> · Build efficiency · Improve
              accuracy · Free-up resources ·Become agile
            </p>
          </div>
          <div className="mission bg-gray-100 p-5 rounded-lg hover:shadow-md duration-500 hover:-translate-y-2">
            <div className="w-full flex justify-between items-center py-1">
              <h1 className="text-green-700 mb-2 text-2xl">Our Mission</h1>
              <img
                src={logo}
                alt="CareDMS Logo"
                width={100}
                className="mt-[-18px]"
              />
            </div>
            <hr className="mb-2" />
            <p>
              Assist organisations to integrate digital technology into all
              areas of their business, thus, enabling the delivery of
              consistent, and efficient service to their customers.
            </p>
          </div>
          <div className="stragegies bg-gray-100 p-5 rounded-lg hover:shadow-md duration-500 hover:-translate-y-2">
            <div className="w-full flex justify-between items-center py-1">
              <h1 className="text-green-700 mb-2 text-2xl">Strategies</h1>
              <img
                src={logo}
                alt="CareDMS Logo"
                width={100}
                className="mt-[-18px]"
              />
            </div>
            <hr className="mb-2" />
            <p>
              We review and assess processes to gain greater insight into
              operations and customer relationships. We then work with IT-design
              architects, developers, and infrastructure engineers to design and
              build integrated digital system; test, deploy, implement, secure
              and monitor the system.
            </p>
          </div>
        </div>

        <hr className="mx-10 my-5" />

        <div className="w-full flex flex-col lg:flex-row px-10 items-center">
        <div className="content">
          <h1 className="text-3xl lg:text-4xl mb-2 text-green-500 capitalize"><span className="italic text-4xl lg:text-5xl mr-1">S</span>taff and change management</h1>
          <p>
          We adhere to international restructuring
          plans, including staff assessment, re-training, to enable appropriate
          redeployment or appropriate placement of human resources.  As IT
          professionals, we constantly assess and train our staff. This feeds
          into our placement and recruitment services.
        </p>
        </div>
          <img src={staff} alt="Staff Image" width={500} />
        </div>
      </div>
    </>
  );
};

export default About;
