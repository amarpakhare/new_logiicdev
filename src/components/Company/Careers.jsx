import React, {useRef, useState} from "react"
import {Link} from "react-router-dom"
import {motion, useInView} from "framer-motion"
import {
	FaBriefcase,
	FaMapMarkerAlt,
	FaTools,
	FaUserGraduate,
	FaClock,
	FaBook,
	FaMoneyBillWave,
	FaLaptop,
	FaHome,
	FaUsers,
	FaChess,
	FaRobot,
	FaMicrochip,
	FaPalette,
	FaDatabase,
	FaCode,
	FaCloud,
} from "react-icons/fa"

import careers1 from "../../assets/Career/careers.png"
import careers3 from "../../assets/careers4.jpeg"
import AO from "../../assets/AO_lab_office-min.webp"
import Opportunities from "./Opportunities"
import BoardWriting from "../../assets/BoardWriting.webp"

const jobOpenings = [
	{
		title: "Python Developer",
		location: "Graz, Austria",
		experience: "Specify years of experience or entry-level",
		skills: "Python, APIs, Frameworks",
	},
	{
		title: "FPGA Developer",
		location: "Graz, Austria",
		experience: "Specify years of experience or entry-level",
		skills: "VHDL/Verilog, FPGA Design Tools, Embedded Systems",
	},
	{
		title: "AI Algorithm Developer",
		location: "Graz, Austria",
		experience: "Specify years of experience or entry-level",
		skills: "Machine Learning, Neural Networks, Python,TensorFlow/PyTorch",
	},
]

const testimonials = [
	{
		name: "Kalina",
		feedback:
			"I have gained experiences and growth at Logiicdev. The collaborative environment, continuous learning opportunities, and innovative projects have helped me develop both personally and professionally. These experiences reflect the supportive culture and dynamic challenges that make Logiicdev an inspiring place to work.",
		image: BoardWriting,
	},
	{
		name: "AO",
		feedback:
			"Logiicdev fosters a high-performance environment. Strong team synergy and a focus on cutting-edge technologies create a dynamic and rewarding work experience. Individual contributions are amplified, leading to innovative solutions and continuous professional growth.",
		image: AO,
	},
]

const benefits = [
	{
		icon: <FaChess className="text-indigo-500 text-3xl" />,
		title: "Perks & Goodies",
		description:
			"Enjoy fresh fruits, tasty snacks, and chess games to challenge your mind!",
	},
	{
		icon: <FaMoneyBillWave className="text-green-500 text-3xl" />,
		title: "Financial Perks",
		description: "Competitive salary + Graz voucher to cover your meals.",
	},
	{
		icon: <FaHome className="text-blue-500 text-3xl" />,
		title: "Work-Life Balance",
		description: "Flexible working hours & occasional work-from-home options.",
	},
	{
		icon: <FaUsers className="text-yellow-500 text-3xl" />,
		title: "Fun & Team Bonding",
		description:
			"Team-building events, restaurant outings, bowling nights & game sessions.",
	},
	{
		icon: <FaBook className="text-purple-500 text-3xl" />,
		title: "Professional Growth",
		description:
			"Sponsored training programs & paid courses for career development.",
	},
	{
		icon: <FaLaptop className="text-red-500 text-3xl" />,
		title: "Top-Notch Equipment",
		description: "We provide high-quality gear tailored to your role.",
	},
]

const techStack = [
	{
		icon: <FaRobot className="text-cyan-500 text-3xl" />,
		title: "AI & Machine Learning",
		description:
			"Leverage AI technologies to build intelligent systems and automation.",
	},
	{
		icon: <FaMicrochip className="text-orange-500 text-3xl" />,
		title: "Hardware & Embedded Systems",
		description:
			"Develop cutting-edge hardware solutions for real-world applications.",
	},
	{
		icon: <FaPalette className="text-pink-500 text-3xl" />,
		title: "User Interface & UX",
		description:
			"Design and develop seamless user experiences with modern UI frameworks.",
	},

	{
		icon: <FaCode className="text-blue-500 text-3xl" />,
		title: "Full-Stack Development",
		description:
			"Build dynamic web applications with modern frontend and backend technologies.",
	},
	{
		icon: <FaCloud className="text-purple-500 text-3xl" />,
		title: "Cloud Computing",
		description:
			"Deploy and scale applications with the power of cloud computing.",
	},
]

const JobCard = ({title, location, experience, skills}) => (
	<motion.div
		whileHover={{scale: 1.02}}
		className="flex flex-col gap-4 p-6 bg-[#ffcc00] dark:bg-[#2B3945] shadow-lg rounded-xl transition-transform duration-300"
	>
		<h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-[#FBBF24]">
			{title}
		</h3>
		<div className="flex items-center gap-2 text-base text-gray-600">
			<FaMapMarkerAlt className="text-blue-500 w-6 h-6" />
			<p>
				<span className="font-bold text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
					Location:{" "}
				</span>
				<span className="text-gray-800 dark:text-gray-300">{location}</span>
			</p>
		</div>
		<div className="flex items-center gap-2 text-base text-gray-600">
			<FaBriefcase className="text-green-500 w-6 h-6" />
			<p>
				<span className="font-bold text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
					Experience:{" "}
				</span>
				<span className="text-gray-800 dark:text-gray-300">{experience}</span>
			</p>
		</div>
		<div className="flex items-center gap-2 text-base text-gray-600">
			<FaTools className="text-yellow-900 dark:text-yellow-500 w-6 h-6" />
			<p>
				<span className="font-bold text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
					Skills:{" "}
				</span>
				<span className="text-gray-800 dark:text-gray-300">{skills}</span>
			</p>
		</div>
	</motion.div>
)

const Careers = () => {
	// Animation References
	const textRef2 = useRef(null)
	const textRef3 = useRef(null)

	const isTextInView2 = useInView(textRef2, {once: true, amount: 0.2})
	const isTextInView3 = useInView(textRef3, {once: true, amount: 0.2})

	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}
	const imageVariants = {
		hidden: {opacity: 0, scale: 0.8},
		visible: {opacity: 1, scale: 1, transition: {duration: 1}},
	}

	const cardVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {opacity: 1, y: 0, transition: {duration: 0.7, delay: 0.2}},
	}

	const fadeInVariant = {
		hidden: {opacity: 0, y: 30},
		visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
	}

	// Refs and in-view detection for each card
	const cardRefs = Array.from({length: 6}, () => useRef(null))
	const isCardInView = cardRefs.map((ref) =>
		useInView(ref, {once: true, amount: 0.2})
	)

	return (
		<div className="relative bg-[#fefff2] dark:bg-[#111827] min-h-screen">
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
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
						Careers at <span className="text-[#ffcc00]">Logiicdev</span>
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
						Join a team that values innovation, growth, and collaboration. Let’s
						shape the future together.
					</p>
				</motion.div>

				{/* Image Section */}
				<motion.div
					variants={imageVariants}
					className="w-full lg:w-1/2 flex justify-center lg:justify-end"
				>
					<img
						src={careers1}
						alt="Careers"
						className="w-48 sm:w-64 lg:w-[550px] h-auto object-cover"
					/>
				</motion.div>
			</motion.div>

			{/* Why Choose Logiicdev Section */}
			<motion.section
				ref={textRef2}
				initial="hidden"
				animate={isTextInView2 ? "visible" : "hidden"}
				variants={textVariants}
				className="py-16 px-6 md:px-16 bg-white dark:bg-[#111827]"
			>
				<div className=" text-center space-y-8 py-12 px-6 md:py-16 md:px-8  rounded-lg">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white">
						Brilliance Today,{" "}
						<span className="text-[#ffcc00]">Impact Tomorrow</span>
					</h2>
					<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						"The Logiicdev team creates pioneering technologies that enhance the
						connected world, making it safer, smarter, and more secure. We're
						looking for innovative, passionate, and talented individuals like
						you to join us in shaping the future."
					</p>
				</div>

				<section className="bg-gray-100 p-8 dark:bg-gray-800 ">
					{/* Careers Heading */}
					<motion.div
						initial={{opacity: 0, y: -50}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.8}}
						className="text-center mb-10"
					>
						<h1 className="text-4xl font-bold text-[#ffcc00]">Careers</h1>
						<p className="mt-4 text-gray-600 dark:text-gray-300">
							Join us to shape the technologies of tomorrow!
						</p>
					</motion.div>

					<div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
						{jobOpenings.map((job, index) => (
							<Link
								to="/searchJobs"
								onClick={() => window.scrollTo(0, 0)}
								key={index}
							>
								<JobCard
									title={job.title}
									location={job.location}
									experience={job.experience}
									skills={job.skills}
								/>
							</Link>
						))}
					</div>
				</section>
			</motion.section>

			{/* <Opportunities /> */}
			<div className="px-6 md:px-16 lg:px-24 bg-white dark:bg-[#111827] mb-6">
				{/* Heading */}
				<div className="text-center mb-16">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
						Opportunities for Students and New Graduates
					</h1>
					<p className="text-lg text-gray-600 mt-4 dark:text-gray-200">
						Explore a wide range of exciting opportunities available year-round!
					</p>
				</div>

				{/* Opportunities Section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
					{[
						{
							title: "Full-Time Internship",
							description:
								"Our internships are full-time (40 hours per week) and typically last between 3 to 12 months. Many assignments can serve as thesis or graduation projects.",
							icon: (
								<FaClock className="text-yellow-900 dark:text-yellow-500 text-4xl mx-auto mb-4" />
							),
						},
						{
							title: "Working Student Opportunities",
							description:
								"These part-time roles (typically 8-20 hours per week) offer a duration of 6 months or more. Many assignments are well-suited for thesis or graduation projects.",
							icon: <FaBook className="text-blue-500 text-4xl mx-auto mb-4" />,
						},
						{
							title: "Graduate, PhD, and Thesis Opportunities",
							description:
								"We offer diverse graduate opportunities across multiple domains. Ideal for thesis or graduation projects.",
							icon: (
								<FaUserGraduate className="text-green-500 text-4xl mx-auto mb-4" />
							),
						},
						{
							title: "Entry-Level Positions",
							description:
								"Gain real-world experience as a new graduate with year-round opportunities across diverse career fields and locations.",
							icon: (
								<FaBriefcase className="text-purple-500 text-4xl mx-auto mb-4" />
							),
						},
					].map((item, index) => (
						// Card
						<motion.div
							key={index}
							className="bg-[#ffcc00] dark:bg-[#2B3945] p-6 rounded-lg"
							ref={cardRefs[index]}
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}}
							variants={fadeInVariant}
						>
							<div className="flex flex-col items-start">
								{/* Icon */}
								<div className="mb-4">{item.icon}</div>

								{/* Card Title */}
								<h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-[#FBBF24]">
									{item.title}
								</h3>

								{/* Card Description */}
								<p className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Students and New Graduates Section */}
			<motion.div
				initial={{opacity: 0, y: 50}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				viewport={{once: true}}
				className="flex flex-col lg:flex-row items-center lg:justify-around bg-white dark:bg-[#111827] px-6 md:px-12 lg:py-16 gap-8"
			>
				{/* Text Section */}
				<motion.div
					initial={{opacity: 0, x: 30}}
					whileInView={{opacity: 1, x: 0}}
					transition={{duration: 0.8, ease: "easeOut"}}
					viewport={{once: true}}
					className="w-full max-w-xl lg:max-w-3xl text-center lg:text-left space-y-6"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
						Shape the Future with Us
						<span className="block text-[#ffcc00]">Students & Graduates</span>
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						Join hands-on projects, collaborate with industry leaders, and
						kickstart your career in innovation and technology.
					</p>
				</motion.div>
				{/* Image Section */}
				<motion.div
					initial={{opacity: 0, scale: 0.9}}
					whileInView={{opacity: 1, scale: 1}}
					transition={{duration: 1, ease: "easeOut"}}
					viewport={{once: true}}
					className="relative w-full max-w-4xl h-[50vh] sm:h-[60vh] overflow-hidden rounded-xl shadow-xl"
				>
					<img
						src={careers3}
						alt="Students working together"
						className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
						loading="lazy"
					/>
				</motion.div>
			</motion.div>

			<section className="py-12 bg-gray-50 dark:bg-gray-900 text-center transition duration-300">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
						Benefits
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="shadow-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105"
							>
								<div className="flex flex-col items-center">
									{benefit.icon}
									<h3 className="text-xl font-semibold mt-4 text-gray-700 dark:text-white">
										{benefit.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
										{benefit.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<div className="p-6 bg-white dark:bg-[#111827]">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
					Tech Stack
				</h2>

				<div className="flex flex-wrap justify-center gap-6 p-6">
					{techStack.map((tech, index) => (
						<div key={index} className="w-64 h-40 relative cursor-pointer">
							<motion.div
								className="absolute w-full h-full flex flex-col items-center justify-center bg-white dark:bg-[#1f2937] text-black dark:text-white rounded-2xl shadow-lg p-4"
								whileHover={{opacity: 0}}
							>
								{tech.icon}
								<h3 className="mt-2 text-lg font-semibold">{tech.title}</h3>
							</motion.div>
							<motion.div
								className="absolute w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-2xl shadow-lg p-4 opacity-0"
								whileHover={{opacity: 1}}
							>
								<p className="text-center">{tech.description}</p>
							</motion.div>
						</div>
					))}
				</div>
			</div>
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 1}}
				className="mb-12 bg-white dark:bg-[#111827] rounded-lg py-16 px-6 md:px-12 lg:px-20"
			>
				{/* Section Header */}
				<div className="text-center mb-12">
					<h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">
						Team Member Reviews
					</h1>
					<p className="text-lg sm:text-xl text-gray-600 mt-4 dark:text-gray-300">
						Honest insights from our team on collaboration and growth.
					</p>
				</div>

				{/* Testimonial Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 40}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.8, delay: index * 0.2}}
							className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-[2px] rounded-xl shadow-lg hover:scale-105 transform transition-all duration-500"
						>
							<div className="w-full h-full bg-white dark:bg-[#2B3945] p-6 rounded-lg shadow-xl flex flex-col items-center text-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-80 h-80 object-cover rounded-lg border-4 border-white dark:border-gray-600 shadow-md"
								/>
								<h3 className="text-lg font-semibold text-gray-800 dark:text-[#FBBF24] mt-4">
									{testimonial.name}
								</h3>
								<p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
									{testimonial.role}
								</p>
								<p className="text-gray-600 dark:text-gray-300 italic leading-relaxed mt-4">
									"{testimonial.feedback}"
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	)
}

export default Careers
