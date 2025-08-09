"use client";
import React from 'react';
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"], 
});

const GapSection = () => {
  return (
    <section className="bg-white py-10 w-full">
      <div className="max-w-[90vw] mx-auto">
        {/* Heading Section */}
        <div className="text-left animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-900 leading-snug">
            The Gap We're <br />
            <span className={`text-6xl ${caveat.className} font-normal italic text-black`}>
              Bridging
            </span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: 'Geographic Limitations',
              desc: 'Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind',
            },
            {
              title: 'Outdated Education',
              desc: 'Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind',
            },
            {
              title: 'Limited Networks',
              desc: 'Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind',
            },
          ].map((item, i) => (
            <div key={i} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GapSection;
