"use client";
import React from "react";
import { motion } from "framer-motion";

const PartnerScroll = () => {
  const partners = [
    { id: 1, name: "Partner 1", image: "/brandlogos/deloitte.png" },
    { id: 2, name: "Partner 2", image: "/brandlogos/uc.png" },
    { id: 3, name: "Partner 3", image: "/brandlogos/unicef.png" },
    { id: 4, name: "Partner 4", image: "/brandlogos/worldbank.png" },
    { id: 5, name: "Partner 5", image: "/brandlogos/lion.png" },
    { id: 6, name: "Partner 6", image: "/brandlogos/ey.png" },
    { id: 7, name: "Partner 7", image: "/brandlogos/lioness.png"},
    { id: 8, name: "Partner 8", image: "/brandlogos/niva.png" },
    { id: 9, name: "Partner 9", image: "/brandlogos/bihar.png" },
    { id: 10, name: "Partner 9", image: "/brandlogos/iiml.png" },
    { id: 11, name: "Partner 9", image: "/brandlogos/kpmg.png" },
    { id: 12, name: "Partner 9", image: "/brandlogos/india.png" },
  ];

  return (
    <div className="bg-[#041119] w-full mt-10 pb-4 md:pb-10 whitespace-nowrap overflow-hidden py-6">
      <h1 className="text-3xl flex tracking-tighter flex-col w-full md:flex-row justify-center md:gap-3 md:text-4xl text-white font-semibold text-center pb-4">
        Trusted By Senior
      <span className="text-center tracking-tighter">Executives</span>
      </h1>
      <div className="relative w-full flex justify-center gap-10 items-center">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className=" h-[80px] w-[80px] md:h-[80px] md:w-[160px] rounded-md flex justify-center items-center"
            >
              <img src={partner.image} alt="" className={`object-contain h-full w-full`}/>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-[80px] w-[80px] md:h-[80px] md:w-[160px] rounded-md flex justify-center items-center"
            >
              <img src={partner.image} alt="" className={`object-contain h-full w-full`}/>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerScroll;

