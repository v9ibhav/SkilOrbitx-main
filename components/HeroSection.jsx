"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleExploreClick = () => {
  const el = document.getElementById("program");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image + Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/1.avif"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20" />
      </div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-4 py-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight mt-8">
          Empowering Underserved Students to <br /> Lead and Build the Future Before Graduation.
        </h1>
        <p className="mb-8 text-lg md:text-xl text-gray-100">
          Empowering students from Tier-2, Tier-3, and rural regions with world-class learning, mentorship, and opportunities to become future builders and leaders.
        </p>
        <button
          onClick={handleExploreClick}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-md hover:shadow-lg"
          style={{ borderRadius: "30px" }}
        >
          Explore Program
        </button>
      </motion.div>
    </section>
  );
}
