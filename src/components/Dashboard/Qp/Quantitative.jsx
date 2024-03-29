import React, { useRef, useState } from "react";

const Quantitative = () => {
    const [active, setActive] = useState("nocpb");
    const notification = useRef();
  
    const activateMenu = (menu) => {
      setActive(menu);
    };
  
    const decActive = (menu) => {
      return menu === active
        ? "border-b-2 border-slate-700 text-slate-700"
        : null;
    };
  
    const closeNotification = () => {
      notification.current.parentNode.parentNode.remove();
    };

    // NB: ===== Components names are abbreviations to the full name of menus =====

    const Nocpb = () => {
      return (
        <div className="w-full py-5">

          <div className="w-full si__content py-5">
            <form className={"w-full"}>
  
              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="bouroughA"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                 Enter Bourough A
                </label>
                <input
                  type="number"
                  name="bouroughA"
                  id="bouroughA"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>

              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="bouroughB"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                 Enter Bourough B
                </label>
                <input
                  type="number"
                  name="bouroughB"
                  id="bouroughB"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>
              
              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="bouroughC"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                 Enter Bourough C
                </label>
                <input
                  type="number"
                  name="bouroughC"
                  id="bouroughC"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>
              
              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="bouroughD"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                 Enter Bourough D
                </label>
                <input
                  type="number"
                  name="bouroughD"
                  id="bouroughD"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>
              
              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="bouroughE"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                 Enter Bourough E
                </label>
                <input
                  type="number"
                  name="bouroughE"
                  id="bouroughE"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>
              
              <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                <label
                  htmlFor="bouroughF"
                  className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                >
                 Enter Bourough F
                </label>
                <input
                  type="number"
                  name="bouroughF"
                  id="bouroughF"
                  className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                />
              </div>
  
              <button
                type="submit"
                className={
                  "uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105"
                }
              >
                Save record
              </button>
            </form>
          </div>
        </div>
      );
    };

    const Tnos = () => {
        return (
          <div className="w-full py-5">
  
            <div className="w-full si__content py-5">
              <form className={"w-full"}>
    
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughA"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough A
                  </label>
                  <input
                    type="number"
                    name="bouroughA"
                    id="bouroughA"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
  
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughB"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough B
                  </label>
                  <input
                    type="number"
                    name="bouroughB"
                    id="bouroughB"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughC"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough C
                  </label>
                  <input
                    type="number"
                    name="bouroughC"
                    id="bouroughC"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughD"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough D
                  </label>
                  <input
                    type="number"
                    name="bouroughD"
                    id="bouroughD"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughE"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough E
                  </label>
                  <input
                    type="number"
                    name="bouroughE"
                    id="bouroughE"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughF"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough F
                  </label>
                  <input
                    type="number"
                    name="bouroughF"
                    id="bouroughF"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
    
                <button
                  type="submit"
                  className={
                    "uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105"
                  }
                >
                  Save record
                </button>
              </form>
            </div>
          </div>
        );
      };

      const Nosnf = () => {
        return (
          <div className="w-full py-5">
  
            <div className="w-full si__content py-5">
              <form className={"w-full"}>
    
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughA"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough A
                  </label>
                  <input
                    type="number"
                    name="bouroughA"
                    id="bouroughA"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
  
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughB"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough B
                  </label>
                  <input
                    type="number"
                    name="bouroughB"
                    id="bouroughB"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughC"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough C
                  </label>
                  <input
                    type="number"
                    name="bouroughC"
                    id="bouroughC"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughD"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough D
                  </label>
                  <input
                    type="number"
                    name="bouroughD"
                    id="bouroughD"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughE"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough E
                  </label>
                  <input
                    type="number"
                    name="bouroughE"
                    id="bouroughE"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughF"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough F
                  </label>
                  <input
                    type="number"
                    name="bouroughF"
                    id="bouroughF"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
    
                <button
                  type="submit"
                  className={
                    "uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105"
                  }
                >
                  Save record
                </button>
              </form>
            </div>
          </div>
        );
      };

      const Posnf = () => {
        return (
          <div className="w-full py-5">
  
            <div className="w-full si__content py-5">
              <form className={"w-full"}>
    
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughA"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough A
                  </label>
                  <input
                    type="number"
                    name="bouroughA"
                    id="bouroughA"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
  
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughB"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough B
                  </label>
                  <input
                    type="number"
                    name="bouroughB"
                    id="bouroughB"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughC"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough C
                  </label>
                  <input
                    type="number"
                    name="bouroughC"
                    id="bouroughC"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughD"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough D
                  </label>
                  <input
                    type="number"
                    name="bouroughD"
                    id="bouroughD"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughE"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough E
                  </label>
                  <input
                    type="number"
                    name="bouroughE"
                    id="bouroughE"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughF"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough F
                  </label>
                  <input
                    type="number"
                    name="bouroughF"
                    id="bouroughF"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
    
                <button
                  type="submit"
                  className={
                    "uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105"
                  }
                >
                  Save record
                </button>
              </form>
            </div>
          </div>
        );
      };

      const Noswswl = () => {
        return (
          <div className="w-full py-5">
  
            <div className="w-full si__content py-5">
              <form className={"w-full"}>
    
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughA"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough A
                  </label>
                  <input
                    type="number"
                    name="bouroughA"
                    id="bouroughA"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
  
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughB"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough B
                  </label>
                  <input
                    type="number"
                    name="bouroughB"
                    id="bouroughB"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughC"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough C
                  </label>
                  <input
                    type="number"
                    name="bouroughC"
                    id="bouroughC"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughD"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough D
                  </label>
                  <input
                    type="number"
                    name="bouroughD"
                    id="bouroughD"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughE"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough E
                  </label>
                  <input
                    type="number"
                    name="bouroughE"
                    id="bouroughE"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
                
                <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                  <label
                    htmlFor="bouroughF"
                    className="w-[26rem] font-bold uppercase text-sm text-gray-600"
                  >
                   Enter Bourough F
                  </label>
                  <input
                    type="number"
                    name="bouroughF"
                    id="bouroughF"
                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400"
                  />
                </div>
    
                <button
                  type="submit"
                  className={
                    "uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105"
                  }
                >
                  Save record
                </button>
              </form>
            </div>
          </div>
        );
      };
  return (
    <>
      <div className="w-full" data-aos="flip-right" data-aos-duration="1000">
        <div className="w-full">
          <div className="menu flex justify-end gap-4 uppercase text-[0.69rem] pt-5 text-gray-400">
            <h1
              onClick={() => activateMenu("nocpb")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "nocpb"
              )}`}
            >
              Number of CYP per borough
            </h1>
            
            <h1
              onClick={() => activateMenu("tnos")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "tnos"
              )}`}
            >
              Total Number of shifts
            </h1>
           
            <h1
              onClick={() => activateMenu("nosnf")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "nosnf"
              )}`}
            >
              Number of shifts not filled
            </h1>
            
            <h1
              onClick={() => activateMenu("posnf")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "posnf"
              )}`}
            >
              Percentage of shifts not filled
            </h1>
            
            <h1
              onClick={() => activateMenu("noswswl")}
              className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive(
                "noswswl"
              )}`}
            >
              Number of shifts where staff were late by 15 mins +
            </h1>
          </div>

          {/* Content */}
          {active === "nocpb" ? <Nocpb /> : null}
          {active === "tnos" ? <Tnos /> : null}
          {active === "nosnf" ? <Nosnf /> : null}
          {active === "posnf" ? <Posnf /> : null}
          {active === "noswswl" ? <Noswswl /> : null}
        </div>
      </div>
    </>
  )
}

export default Quantitative