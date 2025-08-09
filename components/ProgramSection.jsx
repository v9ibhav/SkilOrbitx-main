import Image from "next/image";
import React from "react";

const programs = [
  {
    title: "LaunchDeck",
    subtitle: "Learn more",
    img: "/images/lunchDeck.png",
    link: "https://app.skillorbitx.com",
  },
  {
    title: "LearnLab",
    subtitle: "Learn more",
    img: "/images/learnlab.png",
    link: "https://app.skillorbitx.com",
  },
  {
    title: "Path Mentor",
    subtitle: "Learn more",
    img: "/images/pathMentor.png",
    link: "https://app.skillorbitx.com",
  },
  {
    title: "SkillCircle",
    subtitle: "Dropping soon!!",
    img: "/images/skilcircle.png",
  },
  {
    title: "PRYSM",
    subtitle: "Dropping soon!!",
  },
];

export default function Programs() {
  return (
    <div className="py-4 px-4 md:px-20 bg-white w-[90vw] mx-auto">
      <h2 className="font-bold text-center mb-10 text-black" style={{ fontSize: "60px" }}>
        Our Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 mt-10">
        {programs.map((program, index) => {
          const isBigCard = program.title === "LearnLab";
          const hasImage = !!program.img;
          const hasLink = !!program.link;

          return (
            <div
              key={index}
              className={`bg-[#0F172A] text-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.02] p-6 relative flex flex-col justify-between overflow-hidden ${isBigCard ? "md:row-span-2 min-h-[220px]" : "min-h-[220px]"}`}
            >
              <div>
                <h3 className="text-xl font-semibold">{program.title}</h3>
                {hasLink ? (
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fef3c7] text-black text-sm rounded-md px-2 py-1 inline-block mt-2 hover:underline cursor-pointer"
                    style={{ textDecoration: "none" }}
                  >
                    {program.subtitle}
                  </a>
                ) : (
                  <span className="bg-[#fef3c7] text-black text-sm rounded-md px-2 py-1 inline-block mt-2">
                    {program.subtitle}
                  </span>
                )}
              </div>

              {hasImage && (
                <div className="absolute bottom-4 right-4 max-w-[60%] max-h-[60%]">
                  <div
                    className={`relative ${
                      isBigCard ? "w-[180px] h-[130px] md:w-[300px] md:h-[460px]" : "w-[180px] h-[130px]"
                    }`}
                  >
                    <Image src={program.img} alt={program.title} fill className="object-contain" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
