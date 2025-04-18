import React from "react"
import {motion} from "framer-motion"
// import BoardWriting from "../../assets/About us Image.jpg"
// import BoardWriting from "../../assets/AboutUs/Android-amico.png"
// import BoardWriting from "../../assets/AboutUs/Deconstructed robot-bro.png"
import BoardWriting from "../../assets/AboutUs/Android-cuate.png"
import TeamPic from "../../assets/AboutUs/logiicdev_team.jpg"
import {FaCheck} from "react-icons/fa"
import {Link} from "react-router-dom"
import Darshna from "../../assets/Team/Darshna.png"
import DK from "../../assets/Team/DK.png"
import IanM from "../../assets/Team/IanM.png"
import Theo from "../../assets/Team/Theo.png"
import JAKOB from "../../assets/Team/Jakob_Udier.jpeg"
import SRAVNAI from "../../assets/Team/Sravani Thota.jpeg"
import DILIP from "../../assets/Team/Dilip Kothari.jpeg"
import Fedja from "../../assets/Team/Fedja Mulabegovic.jpeg"
import Priyanwada from "../../assets/Team/Priyanwada A Udumullage.jpeg"
const AboutUs = () => {
	const teamMembers = [
		{
			name: "DEEPAK V KATKORIA",
			title: "CEO",
			description:
				"My expertise lies in crafting and executing strategies to address complex issues, system planning and rationalization, and effectively managing and motivating teams.",
			imageUrl: DK, // Replace with the actual image path
		},
		{
			name: "DARSHNA DK",
			title: "Operations and HR Manager",
			description:
				"My versatility is a valuable asset to understand customers requirements and propose adequate solutions which can not only ease their design but also ease their utilization.",
			imageUrl: Darshna, // Replace with the actual image path
		},
		{
			name: "THEO H",
			title: "Chief Advisor",
			description:
				"Experienced Chief Advisor in semiconductors, specializing in AI, analog design, testing, and simulation, delivering innovative technological solutions.",
			imageUrl: Theo, // Replace with the actual image path
		},
		{
			name: "IAN M",
			title: "Investor",
			description:
				"As a Strategist, Technologist, and Leader, I am deeply passionate about managing and cultivating highly productive and motivated Engineering teams that innovate and develop cutting-edge technical solutions.",
			imageUrl: IanM, // Replace with the actual image path
		},
		{
			name: "DILIP KOTHARI",
			title: "Chief Development Officer",
			description:
				"Leading development of people and products to generate new prospects leading to Prosperity and Profitability",
			imageUrl: DILIP, // Replace with the actual image path
		},
		{
			name: "JAKOB UDIER",
			title: "Senior Sales consultant Partner",
			description:
				"Founder of x.test and expert in electronic measurement sales, driving LogiicDev’s growth, mentoring teams, fostering partnerships, and consistently achieving sales excellence.",
			imageUrl: JAKOB, // Replace with the actual image path
		},
		{
			name: "SRAVANI THOTA",
			title: "FPGA Engineer",
			description:
				"Specialising in high-performance FPGA, AI integration, and real-time data processing. Designing and implementing custom FPGA architectures optimized for low-latency operations and parallel processing efficiency.",
			imageUrl: SRAVNAI, // Replace with the actual image path
		},
		{
			name: "Fedja Mulabegovic",
			title: "AI Vision ISP Engineer",
			description:
				"specializes in designing and deploying computer vision models that interpret and analyze visual data using AI and machine learning techniques.",
			imageUrl: Fedja, // Replace with the actual image path
		},
		{
			name: "Priyanwada A Udumullage",
			title: "AI Vision ISP Engineer",
			description:
				"specializes in designing and deploying computer vision models that interpret and analyze visual data using AI and machine learning techniques.",
			imageUrl: Priyanwada, // Replace with the actual image path
		},
		
	]

	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}
	const imageVariants = {
		hidden: {opacity: 0, scale: 0.8},
		visible: {opacity: 1, scale: 1, transition: {duration: 1}},
	}
	return (
		<>
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex flex-col-reverse lg:flex-row items-center bg-gradient-to-b md:bg-gradient-to-r  from-[#fefff2] via-[#f3f4f6] to-[#ffcc00] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] rounded-br-[50px] py-12 px-6 md:py-20 md:px-12"
			>
				{/* Content Section */}
				<motion.div
					initial={{opacity: 0, x: -30}}
					animate={{opacity: 1, x: 0}}
					transition={{duration: 0.8, ease: "easeOut"}}
					className="w-full max-w-xl lg:max-w-3xl text-center lg:text-left"
				>
					<h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
						Let's Push the Horizon Together...
					</h1>
					<div className="flex flex-col lg:gap-3 lg:mt-8">
						<p className="dark:text-gray-300 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
							Founded in 2020 by industry experts in electronics, Logiicdev is
							headquartered in Graz, Austria, at the heart of the Austrian
							Silicon Alps. Our team of highly skilled engineers and developers
							is dedicated to driving technical excellence and delivering
							sustainable, cutting-edge solutions for a smarter future.
						</p>
						<p className="dark:text-gray-300 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
							With 20+ years of expertise in FPGA, power electronics,
							semiconductors, and embedded software, alongside 2+ years in AI
							R&D, we optimize algorithms and models for maximum efficiency.
						</p>
						<p className=" dark:text-gray-300 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
							At Logiicdev, we pioneer Edge solutions for the energy and
							robotics sectors, powered by in-house research & development. Our
							key areas of expertise and interest include 5G, AI-Edge, Power
							Electronics, Digital Twins, Robotics, Smart Transportation, HPC,
							and Cyber Security.
						</p>
					</div>

					{/* Call to Action Button */}
					<Link
						to="/contact"
						onClick={() => {
							window.scrollTo(0, 0)
						}}
					>
						<button className="flex items-center px-6 py-3 mt-4 bg-[#ffcc00] text-black font-medium rounded-md border border-black border-b-4 border-r-4 hover:bg-[#bea231] transition">
							Contact With Us
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
					</Link>
				</motion.div>

				{/* Image Section */}
				<motion.div
					variants={imageVariants}
					className="w-full lg:w-1/2 flex justify-center lg:justify-end"
				>
					<img
						src={TeamPic}
						alt="AboutUS"
						className="w-48 sm:w-64 lg:w-auto lg:h-auto ml-8 h-auto rounded-md object-cover"
					/>
				</motion.div>
			</motion.div>

			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{delay: 0.5, duration: 1}}
				className="flex items-center justify-center bg-[#fff] dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				<div className="max-w-4xl w-full text-gray-800 dark:text-white text-center">
					<h2 className="text-2xl md:text-[30px] font-semibold">
						We understand the business language very well.
					</h2>
					<p className="text-gray-500 italic mt-2">That is:</p>

					<div className="grid md:grid-cols-2 gap-6 mt-6">
						{[
							"Understanding the requirement.",
							"Exploring and finalizing the agreed path.",
							"Committing only to what can really be delivered.",
							"Client’s trust and IP protection are our top priority.",
							"Long-term profit and win-win partnership.",
							"Any decision should be made openly with choice…not with pressure.",
						].map((text, index) => (
							<motion.div
								key={index}
								initial={{opacity: 0, scale: 0.9}}
								animate={{opacity: 1, scale: 1}}
								transition={{delay: index * 0.2, duration: 0.5}}
								className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all flex items-center space-x-3"
							>
								<FaCheck className="text-green-500 text-2xl flex-shrink-0" />
								<span className="text-lg text-left">{text}</span>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>

			<motion.section
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="py-12 bg-white dark:bg-[#111827]"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
						OUR TEAM
					</h2>
					<p className="text-center text-gray-600 dark:text-[#ffffffac] mb-12">
						Bonding through dialog and empathy
					</p>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								whileHover={{scale: 1.05}}
								className="max-w-sm mx-auto mt-8 bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-gray-100 dark:from-[#1e293b] dark:via-[#111827] dark:to-[#334155] p-6 rounded-lg shadow-lg text-center"
							>
								<div className="relative w-32 h-32 mx-auto mb-6">
									<img
										src={member.imageUrl}
										alt={member.name}
										className="w-full h-full object-cover rounded-full shadow-md"
									/>
								</div>
								<h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
									{member.name}
								</h3>
								<p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">
									{member.title}
								</p>
								<p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
									{member.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
		</>
	)
}

export default AboutUs
