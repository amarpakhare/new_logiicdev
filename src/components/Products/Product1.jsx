import React, {useRef} from "react"
import {motion, useInView} from "framer-motion"
import Navbar from "../Navbar"
import Footer from "../Footer/Footer"
import OmniPowerProduct from "../../assets/OmniPowerProduct.png"
import CheckIcon from "../../assets/Check icon.png"
import TranToTech from "../../assets/TransitionToTech.png"
import OmniChart from "../../assets/OmniPowerChart.png"
import WhyOmniPower from "../../assets/WhyOmniPower.png"
import OmniPowerDiagram from "../../assets/OmnipowerDiagram.png"
import PositiveImpactOmniPower from "../../assets/PositiveImpactOmniPower.png"
import BatteryValue from "../../assets/BatteryValue.png"

function Product1() {
	const refe = useRef(null)
	const refe2 = useRef(null)
	const refe3 = useRef(null)
	const refe4 = useRef(null)
	const refe5 = useRef(null)
	const refe6 = useRef(null)
	const refe7 = useRef(null)
	const refe8 = useRef(null)
	const refe9 = useRef(null)
	const refe10 = useRef(null)
	const isInView = useInView(refe, {once: true, amount: 0.2})
	const isInView2 = useInView(refe2, {once: true, amount: 0.2})
	const isInView3 = useInView(refe3, {once: true, amount: 0.2})
	const isInView4 = useInView(refe4, {once: true, amount: 0.2})
	const isInView5 = useInView(refe5, {once: true, amount: 0.2})
	const isInView6 = useInView(refe6, {once: true, amount: 0.2})
	const isInView7 = useInView(refe7, {once: true, amount: 0.2})
	const isInView8 = useInView(refe8, {once: true, amount: 0.2})
	const isInView9 = useInView(refe9, {once: true, amount: 0.2})
	const isInView10 = useInView(refe10, {once: true, amount: 0.2})

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

	const sectionVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
	}

	const Cards = [
		{
			title: "Output Characteristics:",
			points: [
				"Output Voltage: 0.8-48V",
				"Output Power: 200W Max",
				"Voltage/Current Ranges:2.5-12V @ 0.1-12A12-24V @ 0.1-8A24-48V @ 0.1-5A",
				"Operating Modes: Constant Current (CC), Constant Voltage (CV), Constant Resistance (CR), Constant Power (CP), Pulsed",
			],
		},
		{
			title: "Functional Features:",
			points: [
				"Inverter Noise Injection: 0.5-6MHz",
				"Cell Compatibility: Supports 1-6 Cells, modular design for expansion up to 126 cells",
				"Electrochemical Impedance Spectroscopy (EIS)",
				"High-Speed Pulse Mode",
			],
		},
		{
			title: "User Interface:",
			points: [
				"PC-Based User Interface (UI) with Al Model integration for enhanced control and optimization",
			],
		},
	]

	return (
		<section>
			<motion.div
				className="flex flex-col items-center justify-evenly min-h-80 md:min-h-96 bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-[#ffcc00] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] md:py-32 sm:p-10 rounded-lg md:m-10 "
				initial={{opacity: 0, y: -50}} // Initial state
				animate={{opacity: 1, y: 0}} // Animation on mount
				exit={{opacity: 0, y: 50}} // Animation on unmount
				transition={{duration: 0.5}} // Transition timing
			>
				{/* Title Section */}
				<motion.h1
					className="text-3xl leading-relaxed md:mb-14 md:text-6xl font-semibold text-black text-center mb-6 md:leading-relaxed dark:text-white"
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					transition={{duration: 0.7, delay: 0.2}}
				>
					OmniPower - Unleash <br /> Your Power-lab Potential
				</motion.h1>
			</motion.div>

			<section className="container mx-auto px-6 py-12">
				<div className="grid md:grid-cols-2 items-center gap-8">
					{/* Text Content */}
					<motion.div
						ref={refe}
						className="space-y-6 pl-4 ml-6"
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={textVariants}
					>
						<span className="bg-[#ffcc00] text-black dark:bg-[#F0F8EE] dark:text-[#1D6362] text-sm font-medium px-3 py-1 rounded-full">
							Omnipower
						</span>
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white">
							Omnipower: The Patented AI-Powered Motherboard for Advanced Energy
							Applications
						</h2>
						<p className="text-gray-600 text-lg dark:text-gray-300 ">
							Omnipower is a patented motherboard engineered exclusively for
							power applications in generation, transmission, storage, and
							energy consumption. Designed with AI capabilities, it serves as a
							specialized testing solution for batteries and power regulators.
							Similar to a computer motherboard in versatility, Omnipower
							enables bi-directional (zero-loss) operation, full digitization,
							and seamless integration of AI/ML technologies for testing,
							monitoring, grading, and predictive analysis. With features like
							real-time monitoring of critical battery parameters and digital
							twin technology, OP enhances battery performance, sustainability,
							and efficiency.
						</p>
						<p className="text-gray-600 text-lg dark:text-gray-300">
							Whether you're developing ICs or systems, the broad portfolio of
							our offerings enables you to select the model that fits your
							needs.
						</p>
					</motion.div>

					{/* Image */}
					<motion.div
						className="relative"
						ref={refe}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={imageVariants}
					>
						<img
							src={OmniPowerProduct} // Replace with your actual image path
							alt="Team at work"
							className="w-3/4 h-auto mx-auto rounded-lg shadow-lg"
						/>
						{/* Adjusted decorative element */}
						{/* <div className="absolute -bottom-8 -right-[-100px] -z-10 bg-yellow-400 rounded-full w-20 h-20"></div> */}
					</motion.div>
				</div>
			</section>

			{/* Card Components */}
			<div className="bg-[#fff] py-12 dark:bg-[#111827]">
				{/* Heading and Subheading */}
				<div className="text-center space-y-8 py-12 px-6 md:py-16 md:px-8 rounded-lg">
					<h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white">
						Streamline project management{" "}
						<span className="text-[#ffcc00]">
							with the simplest tool available
						</span>
					</h2>
					<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Why a straightforward project management tool is the best choice for
						your team
					</p>
				</div>

				<div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
					{/* Output Characteristics */}
					{Cards.map((card, index) => (
						<motion.div
							className="bg-[#ffcc00] dark:bg-[#2B3945] p-6 rounded-lg shadow-lg"
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}}
							variants={cardVariants}
						>
							<div className="flex flex-col items-start">
								{/* Card Title */}
								<h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-[#FBBF24]">
									{card.title}
								</h3>

								{/* Divider */}
								<hr className="border-dashed border-gray-800 dark:border-[#FBBF24] border-t-2 w-full mb-6" />

								{/* Card Points */}
								<ul className="space-y-4">
									{card.points.map((point, idx) => (
										<li key={idx} className="flex items-center">
											<img
												src={CheckIcon}
												alt="Check"
												className="w-5 h-5 mr-4"
											/>
											<p className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
												{point}
											</p>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Battery quote */}

			<motion.div
				ref={refe2}
				className="flex justify-center items-center p-8 mt-10"
				initial="hidden"
				animate={isInView2 ? "visible" : "hidden"}
				variants={sectionVariants}
			>
				<div className="relative text-center max-w-5xl bg-[#fffcf2] dark:bg-[#1e293b] rounded-lg shadow-lg p-8 md:p-12">
					{/* Top Decorative Lines */}
					<div className="absolute top-0 left-0 right-0 flex justify-center">
						<div className="h-2 w-2/3 bg-[#ffcc00] rounded-t-lg"></div>
						<div className="h-2 w-1/3 bg-[#0c8ce9] rounded-t-lg"></div>
					</div>

					{/* Main Text */}
					<p className="text-2xl sm:text-3xl font-extrabold leading-relaxed text-[#02b153] dark:text-[#D4F0F0]">
						Liberating you from cumbersome lab equipment. Experience the freedom
						to test your batteries effortlessly, all within the compact confines
						of our desktop testing toolbox.
					</p>

					{/* Bottom Decorative Lines */}
					<div className="absolute bottom-0 left-0 right-0 flex justify-center">
						<div className="h-2 w-2/3 bg-[#ffcc00] rounded-b-lg"></div>
						<div className="h-2 w-1/3 bg-[#0c8ce9] rounded-b-lg"></div>
					</div>
				</div>
			</motion.div>

			{/* Social Impact of Omnipower */}
			<motion.div
				className="text-center"
				ref={refe6}
				initial="hidden"
				animate={isInView6 ? "visible" : "hidden"}
				variants={textVariants}
			>
				<h2 className="text-3xl md:text-5xl font-extrabold md:leading-snug text-gray-800 pt-20 mb-6 dark:text-white">
					Social Impact
				</h2>
			</motion.div>
			<section className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-16 lg:gap-16 bg-gray-50 dark:bg-[#1e293b] rounded-lg shadow-lg sm:mx-10">
				{/* Left Side - Image */}
				<motion.div
					className="flex justify-center lg:justify-start mb-8 lg:mb-0"
					ref={refe4}
					initial="hidden"
					animate={isInView4 ? "visible" : "hidden"}
					variants={imageVariants}
				>
					<img
						src={PositiveImpactOmniPower}
						alt="Project Planning"
						className="w-64 sm:w-96 lg:w-[25rem] xl:w-[45rem] h-auto object-cover rounded-lg shadow-lg"
					/>
				</motion.div>

				{/* Right Side - Text Content */}
				<motion.div
					className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-left lg:pl-12"
					ref={refe5}
					initial="hidden"
					animate={isInView5 ? "visible" : "hidden"}
					variants={textVariants}
				>
					{/* Main Heading */}
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
						Omnipower Vision
					</h1>

					{/* Subheading */}
					<p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-6 leading-relaxed dark:text-gray-300">
						To reshape the future of battery testing and mobility through
						cutting-edge AI and promote long-term sustainability for a circular
						value chain.
					</p>

					{/* Battery Value Image */}
					<img
						src={BatteryValue}
						alt="Battery Value"
						className="rounded-lg shadow-md xl:w-auto 2xl:h-[230px]"
					/>
				</motion.div>
			</section>
		</section>
	)
}

export default Product1
