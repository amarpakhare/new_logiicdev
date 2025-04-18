import React from "react"
import {ArrowRightIcon} from "@heroicons/react/24/solid"
import {AnimatePresence, motion} from "framer-motion"
import ContactPopup from "../Contact/ContactPopup"
import {useState} from "react"
// import Robot from "../../assets/robot-hero.png"
import Robot from "../../assets/robo3.png"
import {Link} from "react-router-dom"
import {div} from "framer-motion/client"

const HeroSection = () => {
	// Animation Variants
	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	const imageVariants = {
		hidden: {opacity: 0, scale: 0.8},
		visible: {opacity: 1, scale: 1, transition: {duration: 1}},
	}

	const buttonHover = {
		scale: 1.1,
		transition: {type: "spring", stiffness: 200, damping: 10},
	}

	// popup handlers
	const [isPopupOpen, setIsPopupOpen] = useState(false)

	const handleButtonClick = () => {
		setIsPopupOpen(true)
	}

	const handleClosePopup = () => {
		setIsPopupOpen(false)
	}

	return (
		<motion.section
			initial="hidden"
			animate="visible"
			// bg-[#ffcc00]
			// dark:bg-[#334155] text-white
			className="bg-gradient-to-b md:bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-[#ffcc00] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] rounded-br-[50px] p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-around"
		>
			{/* Left side - Text content */}
			<motion.div
				variants={textVariants}
				className="w-full lg:w-1/2 mb-8 lg:mb-0"
			>
				<div>
					{/* dark:text-[#1D1E25] */}
					<h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-800 dark:text-white mb-6 lg:leading-snug">
						Edge is Future; So is <span className="text-[#ffcc00]">Log</span>
						<span className="text-[#0070c1]">II</span>
						<span className="text-[#ffcc00] font-sans">cdev</span> !
						<br />
						{/* <span className="text-[#ffcc00]">Change</span> is constant. Logi
						make sure it leads to something better. */}
					</h1>
					<p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 dark:text-gray-300">
						LOGIICDEV is leading transformative visionary ideas into impactful
						results. We explore, innovate and develop the holistic solution that
						leads to a brighter, more sustainable future for all.
					</p>
				</div>
				<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
					<button
						onClick={handleButtonClick}
						className="flex items-center px-6 py-3 bg-[#ffcc00] text-black font-medium rounded-md border border-black border-b-4 border-r-4 hover:bg-[#bea231] transition"
					>
						Get Started
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-5 h-5 ml-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
					{/* Render ContactPopup if isPopupOpen is true */}
					<AnimatePresence>
						{isPopupOpen && <ContactPopup onClose={handleClosePopup} />}
					</AnimatePresence>
					{/*<Link to="/aboutus">
						<button className="border border-[#ffcc00] text-[#000] dark:border-[#256867] dark:text-[#256867] dark:hover:bg-[#f0f8ee] font-medium py-2 px-6 rounded-lg hover:bg-gray-100">
							Learn More
						</button>
					</Link>*/}
				</div>
			</motion.div>

			{/* Right side - Robot image */}
			<motion.div
				variants={imageVariants}
				className="w-full lg:w-1/2 flex justify-center lg:justify-end"
			>
				<img
					src={Robot}
					alt="Robot"
					className="w-48 sm:w-64 lg:w-[550px] h-auto object-cover"
				/>
			</motion.div>
		</motion.section>
	)
}

export default HeroSection
