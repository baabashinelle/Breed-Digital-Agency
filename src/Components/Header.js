import React from "react";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

function Header() {
  return (
    <div className="from-[#2B263F] to-[#231E3D] bg-gradient-to-b w-full  px-10 lg:px-28 lg:h-screen overflow-hidden">
      <Navbar />
      <div className="lg:flex lg:pt-8 ">
        <Fade left cascade>
          <div className="lg:w-[800px] container  xl:pt-24 lg:pt-10 pt-20">
            <h1 className="font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-white xl:leading-[5rem] md:leading-[4rem]">
              The power of now, the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0]">
                {" "}
                future{" "}
              </span>
              of you
            </h1>
            <div className="xl:flex justify-start mt-7">
              <div>
                <button className="rounded px-7 py-3 bg-[#6366F1] border-[#6366F1] border-2 text-white relative group hover:text-white overflow-hidden c-btn tracking-wider">
                  <span className="absolute inset-0 bg-[#ffff] opacity-10"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Work with us
                  </span>
                  Work with us
                </button>
              </div>
              <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[14px] text-gray-400 lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4">
                Breed is a digital studio that offers several services such as
                UI/UX design to developers, we will provide the best service for
                those of you who use our services.
              </p>
            </div>
          </div>
        </Fade>

        <div className="pr-24 lg:pr-0">
          <Fade right cascade>
            <div className="boy-illustration">
              <img
                src="https://zesty-cajeta-af510d.netlify.app/boy-experiencing-digital-world-1.svg"
                alt="Boy Experiencing Digital World"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header;
