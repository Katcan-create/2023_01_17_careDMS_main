import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Typed from 'react-typed'

const Hero = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className="w-full px-10 lg:px-32 md:pt-10 lg:pt-16">
            <div className="w-full flex items-center lg:gap-10">
                <div className="text w-full" data-aos="zoom-out-right" data-aos-duration="2000">
                    <span className='text-2xl'>Welcome to </span>
                    
                    <Typed 
                    className='text-2xl text-green-600 font-extrabold'
                        strings={['CDMS']}
                        typeSpeed={100}
                        backSpeed={90}
                        loop
                    />
                    <h2 className='text-4xl md:text-6xl mt-3 font-bold pb-2 pr-2 text-orangee-600'>Care Digital <br /> Management System</h2>

                    <p className='mt-5 text-gray-500 text-sm'>Confidently grow and manage your home care agency with Care Digital Management System. Streamline your day-to-day operations and promote efficiency with flexible features in a single, easy-to-use solution built for your business.</p>

                    <button onClick={() => navigate('/sign-in')} className='bg-green-500 text-white flex items-center p-3 mt-3 rounded justify-between hover:bg-green-700 hover:shadow duration-700'>
                        <span className='text-xs'>Get Started</span>
                        <HiArrowSmRight />
                    </button>
                </div>

                <div className="image hidden lg:block bg-gradient-to-l from-orange-300 tp h-[27rem] mt-[-20px] w-[35rem] rounded-lg">
                    <img className='rounded-t-lg rounded-b-full shadow-2xl' src="https://media.istockphoto.com/id/1267079105/photo/im-going-to-help-you-get-through-this.jpg?b=1&s=170667a&w=0&k=20&c=mUcr9yusV9IYwiEAnLKKj4FoM5NK8dPj7sDax9wE_3M=" alt="imae" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero