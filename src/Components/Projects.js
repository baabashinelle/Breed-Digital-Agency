import React from 'react'
import Carousel from './CarouselDemo';

function Projects() {
  return (
    <>
      <div className="bg-[#231E3D] pt-14 container mx-auto lg:px-28 px-10 pb-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[51rem] lg:gap-[31rem]">
          <div>
            <div className="w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r"></div>
            <h1 className="font-semibold text-white text-2xl pt-3">
              Featured Projects
            </h1>
            <p className="text-[#696984] pt-4 lg:w-[400px] pb-5">
              Trusted by 5000+ companies worldwide.
            </p>
          </div>
          <div>
            <button class="relative inline-flex items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-r from-[#7361F2] to-[#BD4FF1] group-hover:from-[#7361F2] group-hover:to-[#BD4FF1] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#231E3D] group-hover:bg-opacity-0">
                View All
              </span>
            </button>
          </div>
        </div>
      </div>
      {/*Carousel*/}
      <Carousel />
    </>
  );
}

export default Projects