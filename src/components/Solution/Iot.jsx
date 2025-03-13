import React from "react"
import {motion} from "framer-motion"
// import IOT from "../../assets/Solution/IOT_Pencil_draing.webp"
// import IOT from "../../assets/Solution/iot.webp"
import IOT from "../../assets/Solution/IoT with OmniPower.webp"
import IOT_solotions from "../../assets/Solution/IOT_Cards/iot_solutions.jpg"
import Remote_Monitoring from "../../assets/Solution/IOT_Cards/Remote_Monitoring.jpg"
import Security from "../../assets/Solution/IOT_Cards/security.jpg"
import Scalable from "../../assets/Solution/IOT_Cards/scalable.jpg"
import Simulation from "../../assets/Solution/IOT_Cards/simulation.jpg"
import Conclusion from "../../assets/Solution/IOT_Cards/conclusion.jpg"
const Iot = () => {
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
						The Power of IoT: Shaping the Future of Connectivity
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
						The Internet of Things (IoT) is transforming how devices interact,
						offering new levels of connectivity and control. Logiicdev is a
						leader in IoT management, using cloud technologies like AWS to
						enable remote monitoring and control.
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
						src={IOT}
						alt="People walking and discussing"
						className="w-full h-full object-cover opacity-90 transition-opacity duration-500 ease-in-out"
					/>
				</motion.div>
			</motion.div>

			{/* Section Wrapper */}
			<div className="space-y-12 px-6 py-12">
				{[
					{
						title: "Comprehensive IoT Solutions",
						description: [
							{
								label: "Custom Circuit Boards",
								text: "Designed to meet specific needs, ensuring optimal performance and reliability.",
							},
							{
								label: "Firmware and Software Development",
								text: "Creating robust firmware and software for effective communication and control.",
							},
							{
								label: "Connectivity",
								text: "Equipping devices with Wi-Fi, Bluetooth, and cellular networks for seamless system integration.",
							},
						],
						image: IOT_solotions, // Replace with your image path
					},
					{
						title: "Remote Monitoring and Control",
						description: [
							{
								label: "AWS IoT Services",
								text: "Utilizing AWS for scalable, secure cloud-based IoT management.",
							},
							{
								label: "Cloud Integration",
								text: "Enabling global remote monitoring and management with real-time data access.",
							},
							{
								label: "Data Analytics",
								text: "Processing and visualizing IoT data for actionable insights and optimization.",
							},
						],
						image: Remote_Monitoring, // Replace with your image path
					},
					{
						title: "Enhanced Security and Compliance",
						description: [
							{
								label: "Secure Data Transmission",
								text: "Ensuring encrypted communication using AWS’s security features.",
							},
							{
								label: "Regulatory Compliance",
								text: "Adhering to industry standards for data privacy and security.",
							},
							{
								label: "Regular Updates",
								text: "Providing updates to maintain system integrity against evolving threats.",
							},
						],
						image: Security, // Replace with your image path
					},
					{
						title: "Scalable and Flexible Architecture",
						description: [
							{
								label: "Scalability",
								text: "AWS services allow Logiicdev to offer solutions that grow with business needs.",
							},
							{
								label: "Flexible Architecture",
								text: "Systems can be easily adapted to different use cases, ensuring continued relevance.",
							},
						],
						image: Scalable, // Replace with your image path
					},
					{
						title: "Advanced Testing and Simulation",
						description: [
							{
								label: "Omnipower Test Equipment",
								text: "Rigorous testing for performance and efficiency.",
							},
							{
								label: "Simulation Tools",
								text: "Modeling and optimizing IoT systems before deployment to reduce risks.",
							},
						],
						image: Simulation, // Replace with your image path
					},
					{
						title: "Conclusion",
						description: [
							"Logiicdev combines innovative design with cloud technologies to deliver robust IoT solutions. Leveraging AWS, they offer secure, scalable, and efficient IoT management, driving innovation and connectivity in a connected world.",
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

export default Iot
