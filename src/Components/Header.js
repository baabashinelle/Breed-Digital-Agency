import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className="from-[#2B263F] to-[#231E3D] bg-gradient-to-b w-full container mx-auto px-28 h-screen overflow-hidden">
      <Navbar />
      <div className="flex pt-8">
        <div className="w-[800px] container mx-auto pt-24">
          <h1 className="font-bold lg:text-[4.2rem] w-[79%] text-white leading-[5rem]">
            The power of now, the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0]">
              {" "}
              future{" "}
            </span>
            of you
          </h1>
          <div className="flex justify-start mt-7">
            <div>
              <button className="rounded px-7 py-3 bg-[#6366F1] text-white">
                Work with us
              </button>
            </div>
            <p className="w-[50%] text-[14px] text-gray-400 leading-6 pl-5">
              Breed is a digital studio that offers several services such as
              UI/UX design to developers, we will provide the best service for
              those of you who use our services.
            </p>
          </div>
        </div>

        <div className="pr-24">
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