import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaMoneyBillWave, FaTruck } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <div className="my-10">
        <div className="text-center font-medium text-2xl">Our Services</div>
        <div className="flex flex-wrap mx-auto justify-center items-center gap-4 my-5">
          <div className="w-[200px] p-3 h-[150px] bg-[#9ad6b5]/30 border border-[#0A0B0A]/50 rounded-md text-center grid place-content-center">
            <div className="mx-auto bg-white rounded-full p-3 w-fit">
              <FaTruck className="size-8 text-[#397367]" />
            </div>
            <p className="font-medium mt-2">Super Fast and Free Delivery</p>
          </div>

          <div className="w-[200px] p-3 h-[150px] bg-[#9ad6b5]/30 border border-[#0A0B0A]/50 rounded-md text-center grid place-content-center">
            <div className="mx-auto bg-white rounded-full p-3 w-fit">
              <AiFillSafetyCertificate className="size-8 text-[#397367]" />
            </div>
            <p className="font-medium mt-2">Non-Contact Shiping</p>
          </div>

          <div className="w-[200px] p-3 h-[150px] bg-[#9ad6b5]/30 border border-[#0A0B0A]/50 rounded-md text-center grid place-content-center">
            <div className="mx-auto bg-white rounded-full p-3 w-fit">
              <FaMoneyBillWave className="size-8 text-[#397367]" />
            </div>
            <p className="font-medium mt-2">Money Back Guaranteed</p>
          </div>

          <div className="w-[200px] p-3 h-[150px] bg-[#9ad6b5]/30 border border-[#0A0B0A]/50 rounded-md text-center grid place-content-center">
            <div className="mx-auto bg-white rounded-full p-3 w-fit">
              <RiSecurePaymentFill className="size-8 text-[#397367]" />
            </div>
            <p className="font-medium mt-2">Super Secure Payment System</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
