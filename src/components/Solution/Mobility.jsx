import React from "react"
import {motion} from "framer-motion"
// import MOBILITY from "../../assets/Solution/mobility_green.jpeg"
import MOBILITY from "../../assets/Solution/mobility.webp"
import APIandBackend from "../../assets/Solution/Mobility_Cards/Mobil-APIAndBackendDevelopement.png"
import DataCollection from "../../assets/Solution/Mobility_Cards/Mobil-dataCollection.webp"
import DeviceIntegration from "../../assets/Solution/Mobility_Cards/Mobil-deviceIntegration.webp"
import MobileApps from "../../assets/Solution/Mobility_Cards/Mobil-mobileApps.webp"
import Communication from "../../assets/Solution/Mobility_Cards/Mobil-seamlessPlatformCommunication.webp"
import Conclusion from "../../assets/Solution/IOT_Cards/conclusion.jpg"
function Mobility() {
	//Animation
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

	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	return (
		<div className="mb-4">
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
					className="w-full max-w-3xl mt-8 backdrop-blur-[2px] p-6 md:p-10 lg:p-16 rounded-lg shadow-lg text-center bg-[#ffcc00] border border-black border-b-8 border-r-8 border-t-2 border-l-2 dark:bg-[#ffcc00]"
				>
					<h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-gray-900 mb-4">
						Mobility: Empowering Connectivity and Integration
					</h1>

					<p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-800">
						Mobility is key to modern innovation, enabling seamless
						communication, data collection, and device integration. At
						Logiicdev, we focus on creating solutions that enhance connectivity,
						improve user experiences, and meet evolving business needs.
					</p>
				</motion.div>

				<div className="relative mt-6 lg:-mt-8 w-full max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg border border-black">
					<img
						src={MOBILITY}
						alt="Mobility and Connectivity"
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
						Mobility: Empowering Connectivity and Integration
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
						Mobility is key to modern innovation, enabling seamless
						communication, data collection, and device integration. At
						Logiicdev, we focus on creating solutions that enhance connectivity,
						improve user experiences, and meet evolving business needs.
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
						src={MOBILITY}
						alt="Mobility Solutions"
						className="w-full h-full object-cover opacity-90 transition-opacity duration-500 ease-in-out"
					/>
				</motion.div>
			</motion.div>

			{/* Cards */}
			{/* Section Wrapper */}
			<div className="space-y-12 px-6 py-12">
				{[
					{
						title: "Seamless Platform Communication",
						description: [
							{
								label: "Interoperability",
								text: "Solutions work across multiple platforms, ensuring device compatibility.",
							},
							{
								label: "Real-Time Connectivity",
								text: "Devices stay connected, providing instant updates crucial for industries like logistics and healthcare.",
							},
							{
								label: "Scalability",
								text: "Our solutions grow with your business, allowing easy integration with additional platforms and devices.",
							},
						],
						image: Communication, // Replace with your image path
					},
					{
						title: "Mobile Apps and Platforms",
						description: [
							{
								label: "Android (Kotlin) and iOS (Swift)",
								text: "Robust, user-friendly apps tailored to each platform.",
							},
							{
								label: "Cross-Platform Development",
								text: "Using React Native and Flutter, we create apps that work seamlessly on both Android and iOS.",
							},
							{
								label: "Custom Mobile Solutions",
								text: "Tailored apps that meet specific business needs.",
							},
						],
						image: MobileApps, // Replace with your image path
					},
					{
						title: "Data Collection",
						description: [
							{
								label: "Accurate Data Capture",
								text: "Efficiently capture data from sensors, devices, or user interactions.",
							},
							{
								label: "Edge Computing",
								text: "Process data closer to the source for real-time insights.",
							},
							{
								label: "Data Security",
								text: "Robust security measures protect data at every stage.",
							},
						],
						image: DataCollection, // Replace with your image path
					},
					{
						title: "Device Integration",
						description: [
							{
								label: "Cross-Device Compatibility",
								text: "Solutions work across a wide range of devices.",
							},
							{
								label: "Custom Integration Solutions",
								text: "Tailored to meet unique business needs, integrating legacy systems with new technology.",
							},
							{
								label: "IoT and Smart Devices",
								text: "Expertise in IoT integration creates smarter, more responsive environments.",
							},
						],
						image: DeviceIntegration, // Replace with your image path
					},
					{
						title: "API and Backend Development",
						description: [
							{
								label: "API Development",
								text: "Custom APIs facilitate secure and scalable communication between mobile apps and backend systems.",
							},
							{
								label: "Backend Infrastructure",
								text: "Reliable and scalable backend solutions support the entire mobility ecosystem.",
							},
							{
								label: "Cloud Integration",
								text: "Leveraging cloud computing for storage, processing, and scalability ensures future-proof solutions.",
							},
						],
						image: APIandBackend, // Replace with your image path
					},
					{
						title: "Conclusion",
						description: [
							"At Logiicdev, mobility is about creating intelligent, responsive systems that enhance connectivity, improve data utilization, and ensure seamless integration.",
							"Our solutions are designed to adapt and grow, ensuring long-term success in a rapidly evolving technological landscape.",
						],
						image: Conclusion, // Replace with your image path
					},
				].map((section, index) => (
					<section
						key={index}
						className="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-gray-100 dark:from-[#1e293b] dark:via-[#111827] dark:to-[#334155] shadow-lg rounded-lg p-6 lg:p-8 transition-transform duration-300 transform hover:scale-105"
					>
						{/* Image */}
						<img
							src={section.image}
							alt={section.title || "Section Image"}
							className="w-[300px] lg:max-w-[300px] rounded-full object-cover max-h-[300px] lg:max-h-[300px]"
						/>

						{/* Content */}
						<div className="w-full lg:w-2/3">
							<h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
								{section.title}
							</h2>
							<ul className="space-y-3 text-gray-700 dark:text-gray-400 text-sm lg:text-base">
								{Array.isArray(section.description) ? (
									section.description.map((item, i) => (
										<li key={i}>
											{item.label && (
												<strong className="text-gray-900 dark:text-white">
													{item.label}:
												</strong>
											)}{" "}
											{item.text || item}
										</li>
									))
								) : (
									<p>{section.description}</p>
								)}
							</ul>
						</div>
					</section>
				))}
			</div>
		</div>
	)
}

export default Mobility
