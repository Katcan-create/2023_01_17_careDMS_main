import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import caredmslogo from '../assets/caredms.png'
import { logout } from "../api";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const setActive = (path, path2 = null) => {
    return "/" + path == pathname || "/" + path2 == pathname ? "ring-2 ring-green-300 rounded-lg p-2 shadow-lg" : null;
  };

  const handleLogout = async() => {
    const res = await logout()
    if (res.status === 204) {
      localStorage.setItem("isAuth", false)
      navigate('/sign-in')
    }
  }

  const handleTmpApp = () => {
    navigate('/provider/dashboard')
  }

  const setNavbar = () => {
    return window.location.pathname.includes("provider")
      ? "hidden"
      : null;
  };
  return (
    <>
      <div className={`w-full ${setNavbar()}`}>
        <div className="w-full flex justify-between px-5 md:px-16 py-12 items-center">
          <div className="logo email flex gap-1 divide-x items-center">
            <Link to='/' className="font-bold text-3xl">
              <img src={caredmslogo} alt="CareDMS logo" width={150} />
            </Link>
          </div>

          <div className="menu hidden lg:flex gap-8 text-gray-600 text-sm font-medium items-center z-50">
          <button
            onClick={handleTmpApp}
              className={`hover:text-green-800 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg ${setActive(
                ""
              )}`}
            >
              Enter App
            </button>
            <Link
              to="/about"
              className={`hover:text-green-800 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg ${setActive(
                "about"
              )}`}
            >
              About
            </Link>
            <Link
              to="/features"
              className={`hover:text-green-800 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg ${setActive(
                "features"
              )}`}
            >
              Product Features
            </Link>
            <Link
              to="/contact"
              className={`hover:text-green-800 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg ${setActive(
                "contact"
              )}`}
            >
              Contact
            </Link>

            <Link
              to="/sign-in"
              className={`hover:text-green-800 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg ${setActive(
                "sign-up", "sign-in"
              )}`}
            >
              Sign Up / Sign In
            </Link>

            <button
            onClick={handleLogout}
              className={`hover:text-green-800 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg ${setActive(
                "/logout"
              )}`}
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu */}

          {!MobileMenu ? (
            <HiMenuAlt3
              onClick={() => setMobileMenu(!MobileMenu)}
              size={23}
              className="lg:hidden cursor-pointer duration-1000"
            />
          ) : (
            <HiOutlineX
              onClick={() => setMobileMenu(!MobileMenu)}
              size={23}
              className="lg:hidden cursor-pointer duration-1000"
            />
          )}

          {MobileMenu ? (
            <div
              data-aos="fade-right"
              className="mobile__menu absolute top-0 bg-green-700 left-0 w-96 md:w-[50rem] h-screen z-50 text-white pt-10 px-10 rounded-tr-xl"
            >
              <div className="flex justify-between gap-20 text-green-300">
                <div className="gap-8 flex flex-col w-full">
                  <Link
                    to="/"
                    className="ring-2 rounded-lg p-2 text-white shadow-lg hover:text-blue-800 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/gdpr-policy"
                    className="hover:text-green-200 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg"
                  >
                    GDPR Policy
                  </Link>
                  <Link
                    to="/policy"
                    className="hover:text-green-200 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg"
                  >
                    Information Policy
                  </Link>
                  <Link
                    to="/privacy"
                    className="hover:text-green-200 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-green-200 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/faq"
                    className="hover:text-green-200 hover:font-medium duration-700 hover:ring-2 ring-green-300 hover:p-2 hover:rounded-lg"
                  >
                    FAQ
                  </Link>
                </div>

                <div>
                  <span
                    onClick={() => setMobileMenu(false)}
                    className="font-bold text-md duration-500 hover:text-red-300 shadow cursor-pointer"
                  >
                    &times;
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
