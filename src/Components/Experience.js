import React from 'react'

function Experience() {
  return (
    <div className="bg-[#211D32] container mx-auto px-28 pt-10">
      <div clssName="grid lg:grid-cols-2 grid-cols-1">
        <div className='flex'>
          <img
            src="https://zesty-cajeta-af510d.netlify.app/employee.svg"
            alt="Employee Experiencing Digital World"
          />
        </div>
        <div className=''>
          <div className="w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r"></div>
          <h1 className='pt-4 font-semibold text-5xl'>Get an amazing experience with our top-quality team.</h1>
          <p>Trusted by 5000+ companies worldwide. Trusted by 5000+ companies worldwide</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Experience