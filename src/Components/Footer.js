import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#211D32] container mx-auto lg:px-28 pt-14 px-10 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <div>
          <h1 className="text-white font-semibold lg:text-2xl">BR33D</h1>
          <p className="text-[#7A7893] xl:w-[559px] pt-4">
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-2 pt-9">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white bg-[#7A7893] rounded-full leading-4 p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="text-[#7A7893] text-sm">Have a question?</p>
                <h3 className="text-white">312-417-2366</h3>
              </div>
            </div>

            <div className="flex gap-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white bg-[#7A7893] rounded-full leading-4 p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <div>
                <p className="text-[#7A7893] text-sm">Contact us at</p>
                <h3>breedagency@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="text-white font-semibold lg:text-xl">Newsletter</h2>
            <p className="text-[#7A7893] xl:w-[555px] pt-4 pb-5">
              Be the first one to know about discounts, offers and events.
              Unsubscribe whenever you like.
            </p>
            <div className='relative'>
              <input
                placeholder="Enter your email"
                className="rounded-full px-4 py-3 bg-[#342F49] w-full"
              ></input>
              <button className="text-white px-7 py-3 rounded-full bg-[#6366F1] absolute right-2 ">
                Submit
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-5 gap-4">
            <GrFacebookOption className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
            <FiYoutube className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
            <AiOutlineSkype className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
            <FiFigma className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
            <FaWhatsapp className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Lower footer */}
      <div className="grid grid-cols-2 pt-16">
        <div className="flex justify-between text-[#7A7893]">
          <p>About Us</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <p>Terms of Use</p>
        </div>
        <div className="text-[#7A7893] justify-end flex">
          © 2000-2021, All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer