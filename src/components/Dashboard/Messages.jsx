import React from "react";
import { FiMail, FiUser } from "react-icons/fi";

const Messages = () => {
  return (
    <>
      <div className="w-fulll">
        <div className="w-full pt-12">
          <div className="w-full flex items-center gap-3 justify-center">
            <h4 className="uppercase text-sm lg:text-md font-bold text-gray-600">
              Messages from staffs
            </h4>
            <hr className="lg:w-[40rem] h-0.5 bg-indigo-400" />
          </div>

          <div className="w-full messages py-5">
            <div className="w-full message mb-3 bg-gray-100 p-3 rounded-xl duration-500 hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="w-full flex gap-4 items-center">
                <FiMail
                  size={1}
                  className="rounded-full bg-white w-36 text-indigo-400 h-8 p-1 lg:w-16 lg:h-10"
                />
                <p className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  libero quasi cumque nisi cum quibusdam nemo totam quas? Ex
                  exercitationem illum ullam voluptatem! Cupiditate neque rem
                  voluptatibus totam at assumenda aut ratione voluptatem, quo
                  labore natus ullam eos id aliquam rerum unde inventore
                  repellat commodi accusantium cumque soluta doloribus nam!
                </p>
              </div>
            </div>

            <div className="w-full message mb-3 bg-gray-100 p-3 rounded-xl duration-500 hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="w-full flex gap-4 items-center">
                <FiMail
                  size={1}
                  className="rounded-full bg-white w-36 text-indigo-400 h-8 p-1 lg:w-16 lg:h-10"
                />
                <p className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  libero quasi cumque nisi cum quibusdam nemo totam quas? Ex
                  exercitationem illum ullam voluptatem! Cupiditate neque rem
                  voluptatibus totam at assumenda aut ratione voluptatem, quo
                  labore natus ullam eos id aliquam rerum unde inventore
                  repellat commodi accusantium cumque soluta doloribus nam!
                </p>
              </div>
            </div>

            <div className="w-full message mb-3 bg-gray-100 p-3 rounded-xl duration-500 hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="w-full flex gap-4 items-center">
                <FiMail
                  size={1}
                  className="rounded-full bg-white w-36 text-indigo-400 h-8 p-1 lg:w-16 lg:h-10"
                />
                <p className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  libero quasi cumque nisi cum quibusdam nemo totam quas? Ex
                  exercitationem illum ullam voluptatem! Cupiditate neque rem
                  voluptatibus totam at assumenda aut ratione voluptatem, quo
                  labore natus ullam eos id aliquam rerum unde inventore
                  repellat commodi accusantium cumque soluta doloribus nam!
                </p>
              </div>
            </div>

          </div>

          {/* Messages from commissioners */}

          <div className="commissioners w-full py-5">
          <div className="w-full flex items-center gap-3 justify-center">
            <h4 className="uppercase text-sm lg:text-md font-bold text-gray-600">
              Messages from commissioners
            </h4>
            <hr className="lg:w-[35rem] h-0.5 bg-indigo-400" />
          </div>

          <div className="w-full message mb-3 bg-gray-100 p-3 rounded-xl duration-500 hover:scale-105 hover:shadow-md cursor-pointer mt-5">
            <div className="w-full flex gap-4 items-center">
              <FiUser
                size={1}
                className="rounded-full bg-white w-36 text-indigo-400 h-8 p-1 lg:w-16 lg:h-10"
              />
              <p className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                libero quasi cumque nisi cum quibusdam nemo totam quas? Ex
                exercitationem illum ullam voluptatem! Cupiditate neque rem
                voluptatibus totam at assumenda aut ratione voluptatem, quo
                labore natus ullam eos id aliquam rerum unde inventore repellat
                commodi accusantium cumque soluta doloribus nam!
              </p>
            </div>
          </div>

          <div className="w-full message mb-3 bg-gray-100 p-3 rounded-xl duration-500 hover:scale-105 hover:shadow-md cursor-pointer">
            <div className="w-full flex gap-4 items-center">
              <FiUser
                size={1}
                className="rounded-full bg-white w-36 text-indigo-400 h-8 p-1 lg:w-16 lg:h-10"
              />
              <p className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                libero quasi cumque nisi cum quibusdam nemo totam quas? Ex
                exercitationem illum ullam voluptatem! Cupiditate neque rem
                voluptatibus totam at assumenda aut ratione voluptatem, quo
                labore natus ullam eos id aliquam rerum unde inventore repellat
                commodi accusantium cumque soluta doloribus nam!
              </p>
            </div>
          </div>

          <div className="w-full message mb-3 bg-gray-100 p-3 rounded-xl duration-500 hover:scale-105 hover:shadow-md cursor-pointer">
            <div className="w-full flex gap-4 items-center">
              <FiUser
                size={1}
                className="rounded-full bg-white w-36 text-indigo-400 h-8 p-1 lg:w-16 lg:h-10"
              />
              <p className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                libero quasi cumque nisi cum quibusdam nemo totam quas? Ex
                exercitationem illum ullam voluptatem! Cupiditate neque rem
                voluptatibus totam at assumenda aut ratione voluptatem, quo
                labore natus ullam eos id aliquam rerum unde inventore repellat
                commodi accusantium cumque soluta doloribus nam!
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
