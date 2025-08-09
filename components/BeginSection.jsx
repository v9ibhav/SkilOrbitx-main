"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const BeginSection = () => {
  return (
    <>
      <div className="bg-white h-6 md:h-10 w-full" />

      <section className="bg-white w-full h-auto">
        <div
          className="container bg-[#041119] drop-shadow-xl drop-shadow-black/70 h-auto pb-4 md:pb-0 md:h-[52vh] lg:h-[44vh] mx-auto rounded-4xl md:rounded-[100px]"
          style={{ width: "90vw", maxWidth: "1400px" }}
        >
          <h1 className="text-center text-white text-2xl md:text-4xl font-semibold pt-8 md:pt-6 lg:pt-8">
            Ready to Begin Your Journey?
          </h1>

          <p className="hidden md:block text-xl text-white lg:text-2xl w-[80%] mx-auto pt-2 lg:pt-6 text-center">
            Join thousands of students who are building their future with
            SkillOrbitX. Take the first step today. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora laudantium eius, recusandae
            dignissimos doloremque blanditiis quae veritatis labore similique
            itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio, saepe.
          </p>

          <p className="block md:hidden text-2xl text-white w-[90%] mx-auto pt-4 text-center">
            Join thousands of students who are building their future with
            SkillOrbitX.
          </p>

          <div className="flex justify-center items-center pt-4 md:pt-6">
            <button
              type="button"
              className="bg-white text-[#1042DF] py-2 px-6 rounded-full font-semibold hover:scale-105 transition duration-300 "
              style={{ borderRadius: "50px" }}
            >
              Register as a Student
            </button>
          </div>
        </div>

        <div className="bg-white h-10 md:h-20 w-full" />
        <div className="bg-black h-0.5 w-[90vw] mx-auto" />

          <h1 className="text-center pt-2" style={{ fontSize: "18px", fontWeight: "bold" }}>Follow us:</h1>
        <div className="flex gap-4 mt-4 text-2xl justify-center items-center text-gray-700">
          <div className="border-2 border-gray-500 rounded-xl p-2">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-black transition hover:scale-120" />
            </a>
          </div>
          <div className="border-2 border-gray-500 rounded-xl p-2">
            <a
              href="https://www.linkedin.com/company/skillorbitx/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600 transition hover:scale-120" />
            </a>
          </div>
          <div className="border-2 border-gray-500 rounded-xl p-2">
            <a
              href="https://www.instagram.com/skillorbitx?igsh=b3JpajMyM3BoeXQw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 transition hover:scale-120" />
            </a>
          </div>
        </div>

        <div className="bg-white h-6 pt-3 md:h-10 w-full">
          <p className="text-center text-sm text-blue-500">All rights reserved to SkillOrbitX Pvt. Ltd.</p>
        </div>
          <div className="flex md:hidden mt-4 justify-center items-center text-gray-500 gap-4 text-xs">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex mt-2 justify-center items-center text-gray-500 gap-4 text-xs">
            <p className="hidden md:block">Terms & Conditions</p>
            <p className="hidden md:block">Privacy Policy</p>
          </div>
        <div className="bg-white h-4 pt-3 w-full" />

      </section>
    </>
  );
};

export default BeginSection;
