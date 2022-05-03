import React from 'react'

function Companies() {
  return (
    <div className="lg:h-[200px] from-[#1E1732] to-[#211935] bg-gradient-to-r container mx-auto lg:px-28 px-10 pb-10">
      <p className="text-[#696984] font-semibold text-center lg:pt-12 pt-6">
        Trusted by 5000+ Companies Worldwide
      </p>
      <div className="lg:flex justify-evenly pt-10 grid grid-cols-2 gap-10">
        <img
          src="https://zesty-cajeta-af510d.netlify.app/Vector.svg"
          alt="Netflix"
        />
        <img
          src="https://zesty-cajeta-af510d.netlify.app/google-2015.svg"
          alt="Google"
        />
        <img
          src="https://zesty-cajeta-af510d.netlify.app/amazon.svg"
          alt="Amazon"
        />
        <img
          src="https://zesty-cajeta-af510d.netlify.app/airbnb.svg"
          alt="Air BNB"
        />
        <img
          src="https://zesty-cajeta-af510d.netlify.app/grab-logo.svg"
          alt="Grab"
        />
        <img
          src="https://zesty-cajeta-af510d.netlify.app/facebook.svg"
          alt="Facebook"
        />
      </div>
    </div>
  );
}

export default Companies