import React from 'react'
import CarouselClients from './CarouselClients';

function Clients() {
  return (
    <div>
      <div className="bg-[#231E3D] pt-14 container mx-auto px-28">
        <h1 className="lg:text-3xl text-white text-center font-semibold">What Our Clients Say</h1>
        <p className="text-[#696984] pt-4 pb-5 text-center">
          Trusted by 5000+ companies worldwide.
        </p>

        <CarouselClients/>
      </div>
    </div>
  );
}

export default Clients