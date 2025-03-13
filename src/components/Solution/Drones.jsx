import React from "react"
import {motion} from "framer-motion"
// import DRONE from "../../assets/Solution/drone.jpeg"
// import DRONE from "../../assets/Solution/drones.webp"
import DRONE from "../../assets/Solution/drone.webp"
import Innovative from "../../assets/Solution/Drones_Cards/Drones-innovative applications across industries for drones.jpeg"
import IOT from "../../assets/Solution/Drones_Cards/Drones-Integrating Drones with IoT for Smarter Operations.jpeg"
import Enhancing from "../../assets/Solution/Drones_Cards/Drones-Precision Tracking_ Enhancing Accuracy and Efficiency of drones.jpeg"
import Future from "../../assets/Solution/Drones_Cards/Drones-shaping the future of drones.jpeg"
import Conclusion from "../../assets/Solution/IOT_Cards/conclusion.jpg"

const Drones = () => {
	//Animation
	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	const cardVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	const cardData = [
		{
			title: "Precision Tracking: Enhancing Accuracy and Efficiency",
			content: (
				<p>
					Precision tracking is vital for applications like asset:
					<ul className="space-y-4 pl-6 list-disc py-2">
						<li>Management</li>
						<li>Environmental Monitoring</li>
						<li>Infrastructure Inspection</li>
						<li>
							Logiicdev’s drone solutions offer real-time precise tracking,
							improving efficiency, security, and safety.
						</li>
					</ul>
				</p>
			),
			image: Enhancing,
		},
		{
			title: "Innovative Applications Across Industries",
			content: (
				<>
					<p>
						Drones are widely adopted across sectors, including agriculture,
						construction, and public safety. Logiicdev’s technology supports
						activities like precision farming, site surveys, and emergency
						response with advanced data collection and analysis.
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li>
							<strong>Agriculture:</strong> Drones monitor crop health and
							manage irrigation, optimizing yields.
						</li>
						<li>
							<strong>Construction:</strong> Drones conduct site surveys and
							safety inspections, providing real-time insights.
						</li>
						<li>
							<strong>Public Safety:</strong> Drones aid in search and rescue
							operations, ensuring efficient responses.
						</li>
					</ul>
				</>
			),
			image: Innovative,
		},
		{
			title: "Integrating Drones with IoT for Smarter Operations",
			content: (
				<p>
					IoT integration enhances drone capabilities, enabling real-time data
					sharing, automation, and sophisticated analytics. This synergy
					improves efficiency and provides actionable insights across various
					applications.
				</p>
			),
			image: IOT,
		},
		{
			title: "Logiicdev’s Role in Shaping the Future of Drones",
			content: (
				<p>
					Logiicdev drives innovation in drone technology through custom
					solutions, R&D, and global impact. Their expertise in precision
					tracking and IoT integration helps industries worldwide optimize
					operations, reduce costs, and improve safety.
				</p>
			),
			image: Future,
		},
		{
			title: "Conclusion",
			content: (
				<p>
					Drones are now essential in modern industry, and Logiicdev’s
					pioneering work is shaping the future of drone technology, offering
					unparalleled benefits across sectors.
				</p>
			),
			image: Conclusion,
		},
	]

	return (
		<>
			<div className="mb-4">
				{/* <motion.div
					initial={{opacity: 0, y: 50}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 1}}
					className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-[#ffcc00] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] py-8 px-4 md:py-16 md:px-8 rounded-br-[50px]"
				>
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.8, ease: "easeOut"}}
						className="w-full max-w-3xl mt-8 backdrop-blur-[2px] p-6 md:p-10 lg:p-16 rounded-lg shadow-lg text-center bg-[#ffcc00] border border-black border-b-8 border-r-8 border-t-2 border-l-2 dark:bg-[#ffcc00]"
					>
						<h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-black dark:text-[#E2E8F0] mb-4">
							Drone Technology: Revolutionizing Industries with Precision
						</h1>

						<p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-300">
							At Logiicdev, we are driving the next wave of drone technology.
							Our innovative solutions are transforming industries with precise
							tracking, efficient operations, and enhanced safety features.
							We're proud to be at the forefront of this technological
							evolution, providing cutting-edge solutions that shape the future.
						</p>
					</motion.div>

					<div className="w-full mt-6 lg:-mt-8 max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg border border-black">
						<img
							src={DRONE}
							alt="Drone Technology"
							className="w-full h-full object-cover opacity-80"
						/>
					</div>
				</motion.div> */}

				<motion.div
					initial={{opacity: 0, y: 50}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 1, ease: "easeOut"}}
					className="flex flex-col lg:flex-row items-center lg:justify-around lg:space-x-12 bg-gradient-to-b md:bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-[#ffcc00] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] rounded-br-[50px] py-12 px-6 md:py-20 md:px-12 transition-all duration-500"
				>
					{/* Content Section */}
					<motion.div
						initial={{opacity: 0, x: -30}}
						animate={{opacity: 1, x: 0}}
						transition={{duration: 0.8, ease: "easeOut"}}
						className="w-full max-w-xl lg:max-w-3xl text-center lg:text-left mb-6 lg:mb-0"
					>
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
							Drone Technology: Revolutionizing Industries with Precision
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
							At Logiicdev, we are driving the next wave of drone technology.
							Our innovative solutions are transforming industries with precise
							tracking, efficient operations, and enhanced safety features.
							We're proud to be at the forefront of this technological
							evolution, providing cutting-edge solutions that shape the future.
						</p>
					</motion.div>

					{/* Image Section */}
					<motion.div
						initial={{opacity: 0, x: 30}}
						animate={{opacity: 1, x: 0}}
						transition={{duration: 0.8, ease: "easeOut"}}
						className="relative w-full max-w-4xl lg:max-w-xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg flex justify-center lg:justify-end"
					>
						<img
							src={DRONE}
							alt="Drone Technology"
							className="w-full h-full object-cover opacity-90 transition-opacity duration-500 ease-in-out"
						/>
					</motion.div>
				</motion.div>

				<div className="space-y-12 px-6 py-12">
					{cardData.map((card, index) => (
						<section
							key={index}
							className="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-gray-100 dark:from-[#1e293b] dark:via-[#111827] dark:to-[#334155] shadow-lg rounded-lg p-6 lg:p-8 transition-transform duration-300 transform hover:scale-105"
						>
							{/* Image */}
							<img
								src={card.image}
								alt={card.title || "Card Image"}
								className="w-[300px] lg:max-w-[300px] rounded-full object-cover max-h-[300px] lg:max-h-[300px]"
							/>

							{/* Content */}
							<div className="w-full lg:w-2/3">
								<h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
									{card.title}
								</h2>
								<div className="space-y-3 text-gray-700 dark:text-gray-400 text-sm lg:text-base">
									{card.content}
								</div>
							</div>
						</section>
					))}
				</div>
			</div>
		</>
	)
}

export default Drones
