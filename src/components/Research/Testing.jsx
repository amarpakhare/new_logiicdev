import React, {useRef} from "react"
import {motion, useInView} from "framer-motion"
import {FaCogs, FaLightbulb, FaUsers} from "react-icons/fa" // Icons for each section
import simulation1 from "../../assets/simulationAndTesting1.png"
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"

function Testing() {
	const textRef = useRef(null)
	const textRef2 = useRef(null)
	const textRef3 = useRef(null)
	const textRef4 = useRef(null)
	const imageRef = useRef(null)
	const cardRef = useRef(null)
	const cardRef2 = useRef(null)
	const isTextInView = useInView(textRef, {once: true, amount: 0.2})
	const isTextInView2 = useInView(textRef2, {once: true, amount: 0.2})
	const isTextInView3 = useInView(textRef3, {once: true, amount: 0.2})
	const isTextInView4 = useInView(textRef4, {once: true, amount: 0.2})
	const isImageInView = useInView(imageRef, {once: true, amount: 0.2})
	const isCardInView = useInView(cardRef, {once: true, amount: 0.2})
	const isCardInView2 = useInView(cardRef2, {once: true, amount: 0.2})

	const imageVariants = {
		hidden: {opacity: 0, scale: 0.8},
		visible: {opacity: 1, scale: 1, transition: {duration: 1}},
	}

	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	const cardVariants = {
		hidden: {opacity: 0, y: 50},
		visible: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.2,
				duration: 0.5,
			},
		}),
	}

	const reasons = [
		{
			title: "Tailored Simulation & AI Testing",
			desc: "Project-specific platforms designed to meet unique needs in simulation and AI testing.",
			icon: "👨‍💻",
		},
		{
			title: "Experienced Team",
			desc: "Skilled engineers specializing in simulation modeling, AI testing, ML, and data analysis.",
			icon: "👩‍🔬",
		},
		{
			title: "Innovative Approach",
			desc: "Researching and integrating new technologies to keep you ahead in the industry.",
			icon: "💡",
		},
	]

	return (
		<section className="mb-4">
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex flex-col lg:flex-row lg:gap-4 items-center lg:justify-around mb-4 bg-gradient-to-b md:bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-[#ffcc00] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] rounded-br-[50px] py-12 px-6 md:py-20 md:px-12"
			>
				{/* Content Section */}
				<motion.div
					initial={{opacity: 0, x: -30}}
					animate={{opacity: 1, x: 0}}
					transition={{duration: 0.8, ease: "easeOut"}}
					className="w-full max-w-xl lg:max-w-3xl text-center lg:text-left"
				>
					<h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
						<span className="text-[#ffcc00]">Simulation and Testing:</span>
						<br />
						Advanced Solutions by Logiicdev
					</h1>
					<p className="text-lg sm:text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-6">
						Electronic research house Logiicdev specialises in advanced
						simulation and AI testing research. Our engineers and researchers
						create accurate, customised simulation models, and test benches. Our
						solutions let you validate designs, predict performance, and
						troubleshoot issues before final design.
					</p>
				</motion.div>

				{/* Image Section */}
				<div className="relative w-full max-w-4xl lg:max-w-xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
					<img
						src={simulation1}
						alt="People walking and discussing"
						className="w-full h-full object-cover opacity-90"
					/>
				</div>
			</motion.div>

			{/* Why Choose Us Section */}
			<section className="py-16 text-gray-800 dark:text-white">
				<div className="max-w-7xl mx-auto px-8 lg:px-12">
					<div className="flex flex-col items-center py-16 px-6">
						{/* Root Node */}
						<motion.div
							initial={{opacity: 0, y: -20}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.8}}
							className="text-center text-3xl font-extrabold bg-[#ffcc00] px-8 py-4 rounded-xl shadow-lg"
						>
							Why Choose Us?
						</motion.div>
						{/* Connecting Line */}
						<motion.div
							initial={{scaleY: 0}}
							animate={{scaleY: 1}}
							transition={{duration: 1}}
							className="w-1 h-12 bg-gray-400 mt-4"
						></motion.div>
						<motion.p
							className="text-sm sm:text-base lg:text-lg text-black dark:text-gray-300 max-w-3xl mx-auto"
							ref={textRef3}
							initial="hidden"
							animate={isTextInView3 ? "visible" : "hidden"}
							variants={textVariants}
						>
							Explore how Logiicdev's world-class simulation and AI testing
							solutions can boost electronic design project innovation and
							efficiency. Contact us today to discuss your needs and options!
						</motion.p>
						{/* Connecting Line */}
						<motion.div
							initial={{scaleY: 0}}
							animate={{scaleY: 1}}
							transition={{duration: 1}}
							className="w-1 h-12 bg-gray-400 mt-4"
						></motion.div>

						{/* Branches */}
						<div className="relative flex flex-col md:flex-row items-center justify-center gap-12 mt-6">
							{/* Horizontal Line */}
							<motion.div
								initial={{scaleX: 0}}
								animate={{scaleX: 1}}
								transition={{duration: 1}}
								className="absolute w-5/6 h-1 bg-gray-400 top-1/2 -translate-y-1/2 hidden md:block"
							></motion.div>

							{reasons.map((reason, index) => (
								<motion.div
									key={index}
									initial={{opacity: 0, y: 20}}
									whileInView={{opacity: 1, y: 0}}
									transition={{duration: 0.6, delay: index * 0.2}}
									viewport={{once: true}}
									className="relative flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center w-64"
								>
									{/* Connecting Lines for Mobile */}
									<motion.div
										initial={{scaleY: 0}}
										animate={{scaleY: 1}}
										transition={{duration: 1}}
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
		</section>
	)
}

export default Testing
