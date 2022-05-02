import React from 'react'

function Projects() {
  return (
    <div className="bg-[#231E3D] pt-14 container mx-auto px-28">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[51rem]">
        <div>
          <div className="w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r"></div>
          <h1 className="font-semibold text-white text-3xl pt-3">
            Featured Projects
          </h1>
          <p className="text-[#696984] pt-4 w-[400px]">
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

        {/*Carousel*/}
        
      </div>
    </div>
  );
}

export default Projects