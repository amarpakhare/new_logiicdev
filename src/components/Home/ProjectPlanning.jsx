import React, {useRef} from "react"
import {motion, useInView} from "framer-motion"
// import ProjectPlanningImage from "../../assets/ProjectPlanning.png"
// import ProjectPlanningImage from "../../assets/Home/Electrician-amico.png"
// import ProjectPlanningImage from "../../assets/Home/electronic_man.png"
import ProjectPlanningImage from "../../assets/Home/microcontroller_board.jpg"

const ProjectPlanning = () => {
	// Reference to track when the component is in view
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true, amount: 0.2})

	// Animation Variants
	const sectionVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
	}

	const headingVariants = {
		hover: {scale: 1.05, transition: {yoyo: Infinity, duration: 1.5}},
	}

	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={sectionVariants}
			className="flex flex-col lg:flex-row items-center justify-between pt-0 p-8 sm:p-16 bg-white dark:bg-[#111827]"
		>
			{/* Left Side - Image */}
			<motion.div
				className="lg:w-2/5 flex justify-center mb-8 lg:mb-0"
				initial={{scale: 0.9, opacity: 0}}
				animate={{scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0}}
				transition={{duration: 0.6, ease: "easeInOut"}}
			>
				<img
					src={ProjectPlanningImage}
					alt="Project Planning"
					className="w-64 sm:w-96 lg:w-[32rem] h-auto object-cover rounded-lg dark:shadow-xl"
				/>
			</motion.div>

			{/* Right Side - Text Content */}
			<motion.div
				className="w-full lg:w-3/5 flex flex-col items-start text-left lg:pl-8 xl:pl-10"
				initial={{opacity: 0, x: 50}}
				animate={{opacity: isInView ? 1 : 0, x: isInView ? 0 : 50}}
				transition={{duration: 0.8, ease: "easeOut"}}
			>
				{/* Tag */}
				{/* <motion.span
					className="bg-[#F3FB6E] text-black dark:bg-[#334155] dark:text-[#F1F5F9] border border-black dark:border-[#475569] border-b-4 border-r-4 font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm 2xl:text-md inline-block mb-4"
					initial={{opacity: 0}}
					animate={{opacity: isInView ? 1 : 0}}
					transition={{delay: 0.5, duration: 0.6}}
				>
					Project Services
				</motion.span> */}

				{/* Main Heading */}
				<motion.h1
					className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-[#E2E8F0]"
					// whileHover="hover"
					variants={headingVariants}
				>
					"Transforming Ideas into Efficient, Advanced Electronics."
				</motion.h1>

				{/* Subheading */}
				<motion.p
					className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 dark:text-gray-300"
					initial={{opacity: 0}}
					animate={{opacity: isInView ? 1 : 0}}
					transition={{delay: 0.7, duration: 0.6}}
				>
					At Logiicdev, we revolutionize the electronics landscape by designing
					and manufacturing state-of-the-art electronics and PCBs tailored for
					diverse systems. Our commitment to excellence includes custom
					solutions, advanced simulations, and expert consulting, all aimed at
					enhancing efficiency and fostering innovation. Partner with us to turn
					your visionary ideas into reality and lead the charge in technological
					advancement!
				</motion.p>
			</motion.div>
		</motion.section>
	)
}

export default ProjectPlanning
