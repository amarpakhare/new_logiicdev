import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FPGA2 from "../../assets/FPGA1.jpg";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
// import project3 from "../../assets/Research/OMNI.png"

function FpgaAndAi() {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const cardRef2 = useRef(null);
  // const isTextInView = useInView(textRef, {once: true, amount: 0.2})
  // const isTextInView2 = useInView(textRef2, {once: true, amount: 0.2})
  const isTextInView3 = useInView(textRef3, { once: true, amount: 0.2 });
  const isTextInView4 = useInView(textRef4, { once: true, amount: 0.2 });
  // const isImageInView = useInView(imageRef, {once: true, amount: 0.2})
  // const isCardInView = useInView(cardRef, {once: true, amount: 0.2})
  const isCardInView2 = useInView(cardRef2, { once: true, amount: 0.2 });

  // const imageVariants = {
  // 	hidden: {opacity: 0, scale: 0.8},
  // 	visible: {opacity: 1, scale: 1, transition: {duration: 1}},
  // }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    }),
  };

  const Projects = [
    {
      title: "Project 1: FPGA based 5G Cobots Bridge",
      description:
        "Leveraging FPGA technology to power 5G-enabled collaborative robots (cobots) for advanced industrial automation and real-time connectivity.",
      image: project1,
      alt: "FPGA based 5G Cobots bridge",
    },
    {
      title: "Project 2: FPGA based 2D Machine Vision",
      description:
        "Implementing FPGA-based 2D machine vision systems to enhance precision and speed in visual data processing for industrial applications.",
      image: project2,
      alt: "FPGA based 2D Machine Vision",
    },
  ];

  const reasons = [
    {
      title: "Fast PoC",
      desc: "KPI-based evaluation conception design to streamline development.",
      icon: "👨‍💻",
    },
    {
      title: "Customised Solutions",
      desc: "FPGA and AI designs tailored for your specific project needs.",
      icon: "🛠",
    },
    {
      title: "Innovative Approach",
      desc: "Constant research into new technologies for cutting-edge solutions.",
      icon: "💡",
    },
  ];

  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row lg:gap-4 items-center lg:justify-around mb-4 bg-gradient-to-b md:bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-[#ffcc00] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] rounded-br-[50px] py-12 px-6 md:py-20 md:px-12"
      >
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-xl lg:max-w-3xl text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
            <span className="text-[#ffcc00]">FPGA and AI : </span>
            The Solutions for High-Performance Applications
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Our goal as a leading electronic design house is to empower
            industries with high-performance, scalable, and customisable
            solutions that innovate AI applications, machine learning, embedded
            systems, and real-time processing.
          </p>
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            As a leading design house, we aim to empower end users with
            high-performance, scalable, and custom AI solutions. Flexibility and
            performance make FPGA technology ideal for high-speed processing. We
            use FPGAs to improve processing speed, latency, and real-time data
            handling. We optimise algorithms and integrate AI with edge hardware
            to build robust, scalable neural networks, predictive analytics,
            computer vision, and natural language processing solutions.
          </p>
        </motion.div>

        {/* Image Section */}
        <div className="relative w-full max-w-4xl lg:max-w-xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
          <img
            src={FPGA2}
            alt="People walking and discussing"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </motion.div>

      <section className="py-16 px-4 md:px-8  dark:bg-slate-900">
        <div className="max-w-full mx-auto text-center space-y-10">
          <div className="flex flex-col items-center py-16 px-6">
            {/* Root Node */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-3xl font-extrabold bg-[#ffcc00] px-8 py-4 rounded-xl shadow-lg"
            >
              Why Choose Us?
            </motion.div>
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              className="w-1 h-12 bg-gray-400 mt-4"
            ></motion.div>
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-black dark:text-gray-300 max-w-3xl mx-auto"
              ref={textRef3}
              initial="hidden"
              animate={isTextInView3 ? "visible" : "hidden"}
              variants={textVariants}
            >
              To enable research, we are enablers from TRL2 to design, prototyping, testing, and deployment. Our world-class electronic design and AI-driven FPGA solutions can accelerate innovation.

            </motion.p>
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              className="w-1 h-12 bg-gray-400 mt-4"
            ></motion.div>

            {/* Branches */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 mt-6">
              {/* Horizontal Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                className="absolute w-5/6 h-1 bg-gray-400 top-1/2 -translate-y-1/2 hidden md:block"
              ></motion.div>

              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center w-64"
                >
                  {/* Connecting Lines for Mobile */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute w-1 h-10 bg-gray-400 -top-10 md:hidden"
                  ></motion.div>

                  {/* Icon */}
                  <div className="text-5xl">{reason.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mt-3">{reason.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Coming soon projects */}
      <section className="py-16 px-4 md:px-8  dark:bg-slate-900">
        <div className="max-w-full mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-black dark:text-white mb-12"
            ref={textRef4}
            initial="hidden"
            animate={isTextInView4 ? "visible" : "hidden"}
            variants={textVariants}
          >
            Our Upcoming Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            ref={cardRef2}
            initial="hidden"
            animate={isCardInView2 ? "visible" : "hidden"}
            variants={cardVariants}
          >
            {/* Project Card Component */}
            {Projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col border-2 border-black "
              >
                <div className="w-full h-full relative">
                  <img
                    src={project.image} // Update this path as needed
                    alt={project.alt}
                    className="w-full h-full object-cover  border-black"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-black mb-4 bg-[#ffcc00] p-2 rounded-lg ">
                    {project.title}
                  </h3>
                  <p className="text-black dark:text-gray-300 text-sm sm:text-base lg:text-lg">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default FpgaAndAi;
