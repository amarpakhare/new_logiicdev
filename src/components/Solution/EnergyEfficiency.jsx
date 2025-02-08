import React from "react"
import {motion} from "framer-motion"
// import ENERGY from "../../assets/Solution/Energy Efficiency.webp"
import ENERGY from "../../assets/Solution/energy_efficiency .webp"
import Efficiency from "../../assets/Solution/Energy_Cards/efficiency.png"
import Opportunities from "../../assets/Solution/Energy_Cards/opportunities.png"
import Innovative from "../../assets/Solution/Energy_Cards/innovative.png"
import Sustainable from "../../assets/Solution/Energy_Cards/sustainable.png"
const EnergyEfficiency = () => {
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
			title: "Turning Challenges into Opportunities",
			description: (
				<>
					<p>
						At Logiicdev, we view the growing energy demands as an opportunity
						for agencies and consultants to enhance operations. The push for
						smarter, connected environments requires solutions that optimize
						energy use and reduce waste.
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li>
							<strong>Optimize Building and Plant Efficiency:</strong> Leverage
							advanced technologies to ensure facilities operate at peak
							efficiency, minimizing environmental impact.
						</li>
						<li>
							<strong>Enhance Data Center Operations:</strong> Enable precise
							monitoring and management of energy usage in data centers,
							ensuring sustainability.
						</li>
					</ul>
				</>
			),
			image: Opportunities, // Replace with your actual image path
		},
		{
			title: "Innovative Solutions for Efficiency",
			description: (
				<>
					<p>
						Logiicdev leads in developing tailored platforms and solutions for
						energy efficiency professionals, including:
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li>
							<strong>Custom Sites and Configurable Tests:</strong> Create
							personalized platforms to optimize energy efficiency based on
							specific client needs.
						</li>
						<li>
							<strong>Advanced Data Capture:</strong> Integrate mobile apps and
							IoT devices for real-time data collection to identify
							inefficiencies.
						</li>
						<li>
							<strong>Comprehensive Analysis:</strong> Provide in-depth tools
							for monitoring and analysis, ensuring accurate, actionable
							solutions.
						</li>
					</ul>
				</>
			),
			image: Innovative,
		},
		{
			title: "Delivering Sustainable Results",
			description: (
				<>
					<p>
						Our commitment extends beyond tools; we deliver sustainable results
						that add long-term value. By implementing our solutions, businesses
						can achieve cost savings, operational efficiency, and a more
						sustainable future.
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li>
							<strong>Proactive Energy Management:</strong> Use insights from
							our analytics to optimize operations across multiple sites.
						</li>
						<li>
							<strong>Scalable Solutions:</strong> Our platforms adapt to the
							growing demand for energy-efficient solutions, from single
							buildings to vast data centers.
						</li>
					</ul>
				</>
			),
			image: Sustainable,
		},
		{
			title: "Your Partner in Energy Efficiency",
			description: (
				<>
					<p>
						Partner with Logiicdev for expert-driven solutions that meet the
						complexities of modern energy management, driving the future of
						energy efficiency for a sustainable tomorrow.
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li>
							<strong>Future-Focused Approach:</strong> Invest in sustainable
							practices that prepare your business for long-term efficiency and
							regulatory compliance.
						</li>
						<li>
							<strong>Collaborative Partnership:</strong> Work with us as a
							dedicated partner committed to achieving your energy efficiency
							goals.
						</li>
					</ul>
				</>
			),
			image: Efficiency,
		},
	]

	return (
		<div className="mb-4">
			{/* Section 1: Header */}
			{/* <motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center bg-[#fefff2] dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				<motion.div
					initial={{opacity: 0, y: 30}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, ease: "easeOut"}}
					className="w-full max-w-3xl  bg-[#ffcc00] border border-black border-b-8 border-r-8 border-t-2 border-l-2 dark:bg-[#ffcc00] backdrop-blur-[2px] p-6 md:p-10 lg:p-16 rounded-lg shadow-lg text-center "
				>
					<h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-gray-900 mb-4">
						Harnessing the Power of AI, Cloud, and IoT for Energy Efficiency
					</h1>

					<p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-800">
						The rapid integration of AI, Cloud, and IoT technologies is
						transforming industries worldwide, bringing both innovation and
						challenges, particularly in energy consumption and sustainability.
						As businesses evolve, the need for energy-efficient solutions
						becomes crucial.
					</p>
				</motion.div>

				<div className="w-full max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg mt-6 lg:-mt-8 border border-black">
					<img
						src={ENERGY}
						alt="AI, Cloud, and IoT for Energy Efficiency"
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
						Harnessing the Power of AI, Cloud, and IoT for Energy Efficiency
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
						The rapid integration of AI, Cloud, and IoT technologies is
						transforming industries worldwide, bringing both innovation and
						challenges, particularly in energy consumption and sustainability.
						As businesses evolve, the need for energy-efficient solutions
						becomes crucial.
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
						src={ENERGY}
						alt="Energy Efficiency"
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
								{card.description}
							</div>
						</div>
					</section>
				))}
			</div>
		</div>
	)
}

export default EnergyEfficiency
