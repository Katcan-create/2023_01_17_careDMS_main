import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'

const Footer = () => {

    const setFooter = () => {
        return window.location.pathname.includes("provider")
          ? "hidden"
          : null;
      };

  return (
    <>
    <div className={`w-full bg-green-500 mt-14 ${setFooter()}`}>
        <div className="w-full hidden md:flex py-10 px-20 text-white justify-between items-start">
            <div className="flex flex-col gap-3">
                <h1 className='text-lg font-bold'>Care DMS</h1> <hr className='mb-4' />
                <p className='w-80 text-sm'>CareDMS is a space where you confidently grow and manage your home care agency with Care Digital Management System. Streamline your day-to-day operations and promote efficiency with flexible features in a single, easy-to-use solution built for your business.</p>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className='text-lg font-bold capitalize'>Care Management</h1> <hr className='mb-4' />
                <Link to='/' className='text-sm text-green-200 hover:text-white duration-500'>Finance</Link>
                <Link to='/' className='text-sm text-green-200 hover:text-white duration-500'>Auditing</Link>
                <Link to='/' className='text-sm text-green-200 hover:text-white duration-500'>People</Link>
                <Link to='/' className='text-sm text-green-200 hover:text-white duration-500'>Roster</Link>
            </div>
            
            <div className="flex flex-col gap-3">
                <h1 className='text-lg font-bold'>Quick Links</h1> <hr className='mb-4' />
                <Link to='/gdpr-policy' className='text-sm text-green-200 hover:text-white duration-500'>Gdpr Policy</Link>
                <Link to='/privacy' className='text-sm text-green-200 hover:text-white duration-500'>Privacy Policy</Link>
                <Link to='/policy' className='text-sm text-green-200 hover:text-white duration-500'>Information Policy</Link>
                <Link to='/faq' className='text-sm text-green-200 hover:text-white duration-500'>FAQs</Link>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className='text-lg font-bold capitalize'>Follow Us</h1> <hr className='mb-4' />
                <Link to='/' className='text-sm text-green-200 hover:text-white duration-500'>Facebook</Link>
                <Link to='/' className='text-sm text-green-200 hover:text-white duration-500'>Instagram</Link>
                <Link to='/' className='text-sm text-green-200 hover:text-white duration-500'>Twitter</Link>
                <Link to='/' className='text-sm text-green-200 hover:text-white duration-500'>LinkedIn</Link>
            </div>
        </div>  <hr />
        <div className='flex items-center justify-between py-4 px-14 text-green-200 hover:text-white duration-500 text-xs'>
            <p>&copy; 2022 CareDMS. All Rights Reserved</p>
            <div className="flex items-center gap-2">
                <FiCheckCircle size={13} />
                <p>Security Guaranteed</p>
            </div>
        </div>
    </div>
</>
  )
}

export default Footer