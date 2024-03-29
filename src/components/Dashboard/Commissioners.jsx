import React from 'react'

const Commissioners = () => {
  return (
    <>
        <div className="w-full" data-aos="flip-right" data-aos-duration="1000">
            <div className="w-full mt-10 flex justify-center">
                <form className='w-full lg:px-10'>
                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="name" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Commissioner Name</label>
                        <input type="text" name="name" id="name" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                    </div>

                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="contact" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Commissioner Contact Person</label>
                        <input type="number" name="contact" id="contact" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                    </div>
                    
                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="contactposition" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Commissioner Contact Position</label>
                        <input type="text" name="contactposition" id="contactposition" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                    </div>
                    
                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="contacttel" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Commissioner Contact Tel</label>
                        <input type="number" name="contacttel" id="contacttel" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                    </div>
                   
                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="contactemail" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Commissioner Contact Email</label>
                        <input type="email" name="contactemail" id="contactemail" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                    </div>

                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="addressone" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Commissioner Address 1</label>
                        <textarea id="addressone" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'></textarea>
                    </div>
                    
                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="addresstwo" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Commissioner Address 2</label>
                        <textarea id="addresstwo" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'></textarea>
                    </div>

                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="postcode" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Post Code</label>
                        <input type="text" name="postcode" id="postcode" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                    </div>

                    <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                        <label htmlFor="country" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Country</label>
                        <select name="country" id="country" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                            <option value="England">England</option>
                            <option value="Wales">Wales</option>
                            <option value="Scotland">Scotland</option>
                            <option value="N. Ireland">N. Ireland</option>
                        </select>
                    </div>

                    {/* <button type="submit" className='w-full bg-indigo-400 p-2'></button> */}
                </form>
            </div>
        </div>
    </>
  )
}

export default Commissioners