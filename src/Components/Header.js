import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className="from-[#2B263F] to-[#231E3D] bg-gradient-to-b w-full  px-10 lg:px-28 lg:h-screen overflow-hidden">
      <Navbar />
      <div className="lg:flex lg:pt-8 ">
        <div className="lg:w-[800px] container  xl:pt-24 lg:pt-10 pt-20">
          <h1 className="font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-white lg:leading-[5rem] md:leading-[4rem]">
            The power of now, the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0]">
              {" "}
              future{" "}
            </span>
            of you
          </h1>
          <div className="lg:flex justify-start mt-7">
            <div>
              <button className="rounded px-7 py-3 bg-[#6366F1] text-white">
                Work with us
              </button>
            </div>
            <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[14px] text-gray-400 lg:leading-6 lg:pl-5 lg:pt-0 pt-4 pb-4">
              Breed is a digital studio that offers several services such as
              UI/UX design to developers, we will provide the best service for
              those of you who use our services.
            </p>
          </div>
        </div>

        <div className="pr-24 lg:pr-0">
          <img
            src="https://zesty-cajeta-af510d.netlify.app/boy-experiencing-digital-world-1.svg"
            alt="Boy Experiencing Digital World"
          />
        </div>
      </div>
    </div>
  );
}

export default Header