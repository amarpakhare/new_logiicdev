import React, {useRef} from "react"
import {motion, useInView} from "framer-motion"
import {FaUserGraduate, FaClock, FaBriefcase, FaBook} from "react-icons/fa"

const Opportunities = () => {
	// Animation variants
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
		<div className="min-h-screen px-6 md:px-16 lg:px-24 bg-white dark:bg-[#111827]">
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
	)
}

export default Opportunities
