import React, { useRef } from "react";
import OP from "../../assets/products/OP1.png";

import {
  FaMicrochip,
  FaDollarSign,
  FaVolumeDown,
  FaBolt,
} from "react-icons/fa";
import { useInView, motion } from "framer-motion";

const features = [
  {
    icon: <FaMicrochip className="text-blue-500 w-8 h-8" />,
    title: "Smarter & Faster",
    desc: "Saves time with seamless operation.",
  },
  {
    icon: <FaDollarSign className="text-green-500 w-8 h-8" />,
    title: "Value for Money",
    desc: "High performance at a competitive price.",
  },
  {
    icon: <FaBolt className="text-yellow-500 w-8 h-8" />,
    title: "Ultra-Efficient",
    desc: "Optimized for accuracy and reliability.",
  },
  {
    icon: <FaVolumeDown className="text-red-500 w-8 h-8" />,
    title: "Whisper-Quiet & Compact",
    desc: "Less than 20 dB fan noise, weighing just 700g.",
  },
];

const ProductOmnipower = () => {
  // Reference to track when the component is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const headingVariants = {
    hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 1.5 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="flex flex-col lg:flex-row items-center justify-between pt-0 p-8 sm:p-16 bg-white dark:bg-[#111827]"
    >
      {/* Right Side - Text Content */}
      <motion.div
        className="w-full lg:w-3/5 flex flex-col items-start xl:items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 leading-tight xl:text-center text-gray-900 dark:text-[#E2E8F0]"
          // whileHover="hover"
          variants={headingVariants}
        >
          Introducing OmniPower (OP) <br />{" "}
          <span className="text-[25px] text-gray-700">
            The Future of Power Testing
          </span>
        </motion.h1>
        <p className="text-gray-700 mb-6 text-center dark:text-[#E2E8F0] lg:text-lg">
          A battery/load simulator designed for accuracy and reliability.
          Perfect for engineers and power testing professionals.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 lg:text-lg">
              {feature.icon}
              <div>
                <h3 className="text-lg font-semibold dark:text-[#E2E8F0]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-[#E2E8F0]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Left Side - Image */}
      <motion.div
        className="lg:w-2/5 flex justify-center mb-8 lg:mb-0 lg:ml-[14px] mt-14 xl:mt-[-40px]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <img
          src={OP}
          alt="Project Planning"
          className="w-64 sm:w-96 lg:w-[32rem] h-auto object-cover rounded-lg dark:shadow-xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default ProductOmnipower;
