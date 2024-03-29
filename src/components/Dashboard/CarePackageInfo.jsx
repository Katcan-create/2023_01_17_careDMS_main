import React, { useEffect, useState } from 'react'

const CarePackageInfo = () => {
  const [monSchedule, setMonSchedule] = useState([{ props: '' }])
  const [tuesSchedule, setTuesSchedule] = useState([{ props: '' }])
  const [wedSchedule, setWedSchedule] = useState([{ props: '' }])
  const [thursSchedule, setThursSchedule] = useState([{ props: '' }])
  const [friSchedule, setFriSchedule] = useState([{ props: '' }])
  const [satSchedule, setSatSchedule] = useState([{ props: '' }])
  const [sunSchedule, setSunSchedule] = useState([{ props: '' }])
  const [bhSchedule, setBhSchedule] = useState([{ props: '' }])
  const [isShow, setIsShow] = useState(false)
  const [day, setDay] = useState()
  const [state, setState] = useState(0)
  const [duration, setDuration] = useState(0)
  let choice = [];

  // Durations
  let [monDuration, setMonDuration] = useState(0)

  const handleSchedule = (e, _day) => {
    const status = e.target.checked
    setDay(_day)

    status ? setIsShow(true) : setIsShow(false)
  }

  const handlePush = (_day) => {
    switch (_day) {
      case 'mon':
        monSchedule.push({ props: '' })
        break;

        case 'tues':
          tuesSchedule.push({ props: '' })
          break;

        case 'wed':
          wedSchedule.push({ props: '' })
          break;

        case 'thurs':
          thursSchedule.push({ props: '' })
          break;

        case 'fri':
          friSchedule.push({ props: '' })
          break;

        case 'sat':
          satSchedule.push({ props: '' })
          break;

        case 'sun':
          sunSchedule.push({ props: '' })
          break;

        case 'bh':
          bhSchedule.push({ props: '' })
          break;

        default:
          break
    }
    setState(state + 1)
  }
  
  const handlePop = (_day, index) => {
    switch (_day) {
      case 'mon':
        monSchedule.splice(index, 1)
        break;

        case 'tues':
          tuesSchedule.splice(index, 1)
          break;

        case 'wed':
          wedSchedule.splice(index, 1)
          break;

        case 'thurs':
          thursSchedule.splice(index, 1)
          break;

        case 'fri':
          friSchedule.splice(index, 1)
          break;

        case 'sat':
          satSchedule.splice(index, 1)
          break;

        case 'sun':
          sunSchedule.splice(index, 1)
          break;

        case 'bh':
          bhSchedule.splice(index, 1)
          break;

        default:
          break
    }

    setState(state + 1)
  }

  const daysDur = (e, _day) => {
    switch (_day) {
      case 'mon':
        if (choice.includes(e)) {
          console.log('Exists>>>');
        } else {
          choice.push(e)
          monDuration += parseInt(e);
          console.log('durationMon :>> ', monDuration);
        }
        break;

        case 'tues':
          tuesSchedule.splice(index, 1)
          break;

        case 'wed':
          wedSchedule.splice(index, 1)
          break;

        case 'thurs':
          thursSchedule.splice(index, 1)
          break;

        case 'fri':
          friSchedule.splice(index, 1)
          break;

        case 'sat':
          satSchedule.splice(index, 1)
          break;

        case 'sun':
          sunSchedule.splice(index, 1)
          break;

        case 'bh':
          bhSchedule.splice(index, 1)
          break;

        default:
          break;
  }
}

  const timeConvert = () => {
    let saver = 0
    saver += duration
    let num = saver;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    let days = (rhours / 24);
    let rdays = Math.floor(days);
    return rdays + " day(s) " + rhours + " hour(s) and " + rminutes + " minute(s).";
  }

  useEffect(() => {
    // console.log(timeConvert(3000))
  }, [state]);

  return (
    <>
        <div className="w-full" data-aos="flip-right" data-aos-duration="1000">
            <div className="w-full mt-10 flex justify-center">
                <form className='w-full lg:px-10'>
                    <div className="group w-full flex flex-col items-start mb-10 gap-1">
                        <label htmlFor="nocpr" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Number of health care professionals required</label>
                        <input type="number" name="nocpr" id="nocpr" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                    </div>

                    <h1 className='text-gray-600 font-bold uppercase text-sm mb-5'>Care Package Scheduling Details:</h1>

                    <div className="group w-full flex items-start mb-5 gap-3">
                        <input onClick={(e) => handleSchedule(e, 'mon')} type="checkbox" className='appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer shadow-2xl' name="mon" id="mon" />

                        <label htmlFor="mon" className='text-sm uppercase text-gray-600'>Schedule for monday</label>
                    </div>

                    { isShow && day == 'mon' ? (
                      monSchedule.map((e, index) => {
                        return (
                          <div key={index} className='w-full pb-5'>
                          <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="cat" className='text-xs uppercase text-gray-600'>Select Category</label>
                                <select name="cat" id="cat" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="Band 3 HCA">Band 3 HCA</option>
                                  <option value="Band 4 HCA">Band 4 HCA</option>
                                  <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                                  <option value="RN Child /RSCN Nurse (Band 5)">RN Child /RSCN Nurse (Band 5)</option>
                                  <option value="RN - Mental Health or Learning Disability (Band 6 )">RN - Mental Health or Learning Disability (Band 6 )</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="type" className='text-xs uppercase text-gray-600'>Select Job Type</label>
                                <select name="type" id="type" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="time" className='text-xs uppercase text-gray-600'>Set time</label>
                                <input type="time" name="time" id="time" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="duration" className='text-xs uppercase text-gray-600'>Set duration</label>
                                <select onChange={(e) => daysDur(e.target.value, 'mon')} name="duration" id="duration" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                                  <option value="30">30 minutes</option>
                                  <option value="60">60 minutes</option>
                                  <option value="90">90 minutes</option>
                                  <option value="120">120 minutes</option>
                                </select>
                            </div>

                            <span onClick={() => handlePop('mon', index)} className='mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer'>-</span>
                           
                          </div>
                        </div>
                        )
                      })
                    ) : null}

                    { isShow && day == 'mon' ? (<span onClick={() => handlePush('mon')} className='w-7 justify-center bg-blue-400 mb-3 h-6 flex items-center p-2 font-bold text-white cursor-pointer'>+</span>) : null }

                    <div className="group w-full flex items-start mb-5 gap-3">
                        <input onClick={(e) => handleSchedule(e, 'tues')} type="checkbox" className='appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer' name="tues" id="tues" />

                        <label htmlFor="tues" className='text-sm uppercase text-gray-600'>Schedule for tuesday</label>
                    </div>


                    { isShow && day == 'tues' ? (
                      tuesSchedule.map((e, index) => {
                        return (
                          <div key={index} className='w-full pb-5'>
                          <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="cat" className='text-xs uppercase text-gray-600'>Select Category</label>
                                <select name="cat" id="cat" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="Band 3 HCA">Band 3 HCA</option>
                                  <option value="Band 4 HCA">Band 4 HCA</option>
                                  <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                                  <option value="RN Child /RSCN Nurse (Band 5)">RN Child /RSCN Nurse (Band 5)</option>
                                  <option value="RN - Mental Health or Learning Disability (Band 6 )">RN - Mental Health or Learning Disability (Band 6 )</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="type" className='text-xs uppercase text-gray-600'>Select Job Type</label>
                                <select name="type" id="type" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="time" className='text-xs uppercase text-gray-600'>Set time</label>
                                <input type="time" name="time" id="time" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="duration" className='text-xs uppercase text-gray-600'>Set duration</label>
                                <select onChange={(e) => setDuration(e.target.value)} name="duration" id="duration" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                                  <option value="30">30 minutes</option>
                                  <option value="60">60 minutes</option>
                                  <option value="90">90 minutes</option>
                                  <option value="120">120 minutes</option>
                                </select>
                            </div>

                            <span onClick={() => handlePop('tues', index)} className='mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer'>-</span>
                           
                          </div>
                        </div>
                        )
                      })
                    ) : null}

                     { isShow && day == 'tues' ? (<span onClick={() => handlePush('tues')} className='w-7 justify-center bg-blue-400 mb-3 h-6 flex items-center p-2 font-bold text-white cursor-pointer'>+</span>) : null }

                    <div className="group w-full flex items-start mb-5 gap-3">
                        <input onClick={(e) => handleSchedule(e, 'wed')} type="checkbox" className='appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer' name="wed" id="wed" />

                        <label htmlFor="wed" className='text-sm uppercase text-gray-600'>Schedule for wednesday</label>
                    </div>


                    { isShow && day == 'wed' ? (
                      wedSchedule.map((e, index) => {
                        return (
                          <div key={index} className='w-full pb-5'>
                          <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="cat" className='text-xs uppercase text-gray-600'>Select Category</label>
                                <select name="cat" id="cat" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="Band 3 HCA">Band 3 HCA</option>
                                  <option value="Band 4 HCA">Band 4 HCA</option>
                                  <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                                  <option value="RN Child /RSCN Nurse (Band 5)">RN Child /RSCN Nurse (Band 5)</option>
                                  <option value="RN - Mental Health or Learning Disability (Band 6 )">RN - Mental Health or Learning Disability (Band 6 )</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="type" className='text-xs uppercase text-gray-600'>Select Job Type</label>
                                <select name="type" id="type" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="time" className='text-xs uppercase text-gray-600'>Set time</label>
                                <input type="time" name="time" id="time" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="duration" className='text-xs uppercase text-gray-600'>Set duration</label>
                                <select onChange={(e) => setDuration(e.target.value)} name="duration" id="duration" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                                  <option value="30">30 minutes</option>
                                  <option value="60">60 minutes</option>
                                  <option value="90">90 minutes</option>
                                  <option value="120">120 minutes</option>
                                </select>
                            </div>

                            <span onClick={() => handlePop('wed', index)} className='mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer'>-</span>
                           
                          </div>
                        </div>
                        )
                      })
                    ) : null}

                    { isShow && day == 'wed' ? (<span onClick={() => handlePush('wed')} className='w-7 justify-center bg-blue-400 mb-3 h-6 flex items-center p-2 font-bold text-white cursor-pointer'>+</span>) : null }

                    <div className="group w-full flex items-start mb-5 gap-3">
                        <input onClick={(e) => handleSchedule(e, 'thurs')} type="checkbox" className='appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer' name="thurs" id="thurs" />

                        <label htmlFor="thurs" className='text-sm uppercase text-gray-600'>Schedule for thursday</label>
                    </div>


                    { isShow && day == 'thurs' ? (
                      thursSchedule.map((e, index) => {
                        return (
                          <div key={index} className='w-full pb-5'>
                          <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="cat" className='text-xs uppercase text-gray-600'>Select Category</label>
                                <select name="cat" id="cat" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="Band 3 HCA">Band 3 HCA</option>
                                  <option value="Band 4 HCA">Band 4 HCA</option>
                                  <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                                  <option value="RN Child /RSCN Nurse (Band 5)">RN Child /RSCN Nurse (Band 5)</option>
                                  <option value="RN - Mental Health or Learning Disability (Band 6 )">RN - Mental Health or Learning Disability (Band 6 )</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="type" className='text-xs uppercase text-gray-600'>Select Job Type</label>
                                <select name="type" id="type" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="time" className='text-xs uppercase text-gray-600'>Set time</label>
                                <input type="time" name="time" id="time" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="duration" className='text-xs uppercase text-gray-600'>Set duration</label>
                                <select onChange={(e) => setDuration(e.target.value)} name="duration" id="duration" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                                  <option value="30">30 minutes</option>
                                  <option value="60">60 minutes</option>
                                  <option value="90">90 minutes</option>
                                  <option value="120">120 minutes</option>
                                </select>
                            </div>

                            <span onClick={() => handlePop('thurs', index)} className='mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer'>-</span>
                           
                          </div>
                        </div>
                        )
                      })
                    ) : null}

                    { isShow && day == 'thurs' ? (<span onClick={() => handlePush('thurs')} className='w-7 justify-center bg-blue-400 mb-3 h-6 flex items-center p-2 font-bold text-white cursor-pointer'>+</span>) : null }

                    <div className="group w-full flex items-start mb-5 gap-3">
                        <input onClick={(e) => handleSchedule(e, 'fri')} type="checkbox" className='appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer' name="fri" id="fri" />

                        <label htmlFor="fri" className='text-sm uppercase text-gray-600'>Schedule for friday</label>
                    </div>


                    { isShow && day == 'fri' ? (
                      friSchedule.map((e, index) => {
                        return (
                          <div key={index} className='w-full pb-5'>
                          <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="cat" className='text-xs uppercase text-gray-600'>Select Category</label>
                                <select name="cat" id="cat" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="Band 3 HCA">Band 3 HCA</option>
                                  <option value="Band 4 HCA">Band 4 HCA</option>
                                  <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                                  <option value="RN Child /RSCN Nurse (Band 5)">RN Child /RSCN Nurse (Band 5)</option>
                                  <option value="RN - Mental Health or Learning Disability (Band 6 )">RN - Mental Health or Learning Disability (Band 6 )</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="type" className='text-xs uppercase text-gray-600'>Select Job Type</label>
                                <select name="type" id="type" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="time" className='text-xs uppercase text-gray-600'>Set time</label>
                                <input type="time" name="time" id="time" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="duration" className='text-xs uppercase text-gray-600'>Set duration</label>
                                <select onChange={(e) => setDuration(e.target.value)} name="duration" id="duration" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                                  <option value="30">30 minutes</option>
                                  <option value="60">60 minutes</option>
                                  <option value="90">90 minutes</option>
                                  <option value="120">120 minutes</option>
                                </select>
                            </div>

                            <span onClick={() => handlePop('fri', index)} className='mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer'>-</span>
                           
                          </div>
                        </div>
                        )
                      })
                    ) : null}

                    { isShow && day == 'fri' ? (<span onClick={() => handlePush('fri')} className='w-7 justify-center bg-blue-400 mb-3 h-6 flex items-center p-2 font-bold text-white cursor-pointer'>+</span>) : null }

                    <div className="group w-full flex items-start mb-5 gap-3">
                        <input onClick={(e) => handleSchedule(e, 'sat')} type="checkbox" className='appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer' name="sat" id="sat" />

                        <label htmlFor="sat" className='text-sm uppercase text-gray-600'>Schedule for saturday</label>
                    </div>

                    { isShow && day == 'sat' ? (
                      satSchedule.map((e, index) => {
                        return (
                          <div key={index} className='w-full pb-5'>
                          <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="cat" className='text-xs uppercase text-gray-600'>Select Category</label>
                                <select name="cat" id="cat" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="Band 3 HCA">Band 3 HCA</option>
                                  <option value="Band 4 HCA">Band 4 HCA</option>
                                  <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                                  <option value="RN Child /RSCN Nurse (Band 5)">RN Child /RSCN Nurse (Band 5)</option>
                                  <option value="RN - Mental Health or Learning Disability (Band 6 )">RN - Mental Health or Learning Disability (Band 6 )</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="type" className='text-xs uppercase text-gray-600'>Select Job Type</label>
                                <select name="type" id="type" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="time" className='text-xs uppercase text-gray-600'>Set time</label>
                                <input type="time" name="time" id="time" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="duration" className='text-xs uppercase text-gray-600'>Set duration</label>
                                <select onChange={(e) => setDuration(e.target.value)} name="duration" id="duration" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                                  <option value="30">30 minutes</option>
                                  <option value="60">60 minutes</option>
                                  <option value="90">90 minutes</option>
                                  <option value="120">120 minutes</option>
                                </select>
                            </div>

                            <span onClick={() => handlePop('sat', index)} className='mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer'>-</span>
                           
                          </div>
                        </div>
                        )
                      })
                    ) : null}

                    { isShow && day == 'sat' ? (<span onClick={() => handlePush('sat')} className='w-7 justify-center bg-blue-400 mb-3 h-6 flex items-center p-2 font-bold text-white cursor-pointer'>+</span>) : null }

                    <div className="group w-full flex items-start mb-5 gap-3">
                        <input onClick={(e) => handleSchedule(e, 'sun')} type="checkbox" className='appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer' name="sun" id="sun" />

                        <label htmlFor="sun" className='text-sm uppercase text-gray-600'>Schedule for sunday</label>
                    </div>

                    { isShow && day == 'sun' ? (
                      sunSchedule.map((e, index) => {
                        return (
                          <div key={index} className='w-full pb-5'>
                          <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="cat" className='text-xs uppercase text-gray-600'>Select Category</label>
                                <select name="cat" id="cat" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="Band 3 HCA">Band 3 HCA</option>
                                  <option value="Band 4 HCA">Band 4 HCA</option>
                                  <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                                  <option value="RN Child /RSCN Nurse (Band 5)">RN Child /RSCN Nurse (Band 5)</option>
                                  <option value="RN - Mental Health or Learning Disability (Band 6 )">RN - Mental Health or Learning Disability (Band 6 )</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="type" className='text-xs uppercase text-gray-600'>Select Job Type</label>
                                <select name="type" id="type" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="time" className='text-xs uppercase text-gray-600'>Set time</label>
                                <input type="time" name="time" id="time" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="duration" className='text-xs uppercase text-gray-600'>Set duration</label>
                                <select onChange={(e) => setDuration(e.target.value)} name="duration" id="duration" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                                  <option value="30">30 minutes</option>
                                  <option value="60">60 minutes</option>
                                  <option value="90">90 minutes</option>
                                  <option value="120">120 minutes</option>
                                </select>
                            </div>

                            <span onClick={() => handlePop('sun', index)} className='mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer'>-</span>
                           
                          </div>
                        </div>
                        )
                      })
                    ) : null}

                    { isShow && day == 'sun' ? (<span onClick={() => handlePush('sun')} className='w-7 justify-center bg-blue-400 mb-3 h-6 flex items-center p-2 font-bold text-white cursor-pointer'>+</span>) : null }

                    {/* <div className="group w-full flex items-start mb-5 gap-3">
                        <input onClick={(e) => handleSchedule(e, 'bh')} type="checkbox" className='appearance-none h-5 w-5 border border-gray-300 checked:bg-indigo-400 rounded transition duration-500 checked:border-indigo-600 cursor-pointer' name="bh" id="bh" />

                        <label htmlFor="bh" className='text-sm uppercase text-gray-600'>Schedule for bank holiday</label>
                    </div>

                    { isShow && day == 'bh' ? (<span onClick={() => handlePush('bh')} className='w-7 justify-center bg-blue-400 mb-3 h-6 flex items-center p-2 font-bold text-white cursor-pointer'>+</span>) : null }

                    { isShow && day == 'bh' ? (
                      bhSchedule.map((e, index) => {
                        return (
                          <div key={index} className='w-full pb-5'>
                          <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="cat" className='text-xs uppercase text-gray-600'>Select Category</label>
                                <select name="cat" id="cat" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="Band 3 HCA">Band 3 HCA</option>
                                  <option value="Band 4 HCA">Band 4 HCA</option>
                                  <option value="LD Carer (Band 4)">LD Carer (Band 4)</option>
                                  <option value="RN Child /RSCN Nurse (Band 5)">RN Child /RSCN Nurse (Band 5)</option>
                                  <option value="RN - Mental Health or Learning Disability (Band 6 )">RN - Mental Health or Learning Disability (Band 6 )</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="type" className='text-xs uppercase text-gray-600'>Select Job Type</label>
                                <select name="type" id="type" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="time" className='text-xs uppercase text-gray-600'>Set time</label>
                                <input type="time" name="time" id="time" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400' />
                            </div>

                            <div className="group w-full flex flex-col gap-1">
                                <label htmlFor="duration" className='text-xs uppercase text-gray-600'>Set duration</label>
                                <select onChange={(e) => setDuration(e.target.value)} name="duration" id="duration" className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 capitalize">
                                  <option value="30">30 minutes</option>
                                  <option value="60">60 minutes</option>
                                  <option value="90">90 minutes</option>
                                  <option value="120">120 minutes</option>
                                </select>
                            </div>

                            <span onClick={() => handlePop('bh', index)} className='mt-5 bg-red-400 h-5 flex items-center p-2 font-bold text-white cursor-pointer'>-</span>
                           
                          </div>
                        </div>
                        )
                      })
                    ) : null} */}

                      <p className='font-bold my-5 float-right'>{ timeConvert() }</p>
                    {/* <button type="submit" className='w-full bg-indigo-400 p-2'></button> */}
                </form>
            </div>
        </div>
    </>
  )
}

export default CarePackageInfo