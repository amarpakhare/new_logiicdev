import React, {useEffect} from "react"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import Team from "../../assets/team.png"

const ProjectSection = () => {
	// Set up animation controls
	const controls = useAnimation()
	const {ref, inView} = useInView({threshold: 0.2})

	// Trigger animation when component enters the viewport
	useEffect(() => {
		if (inView) {
			controls.start("visible")
		} else {
			controls.start("hidden")
		}
	}, [controls, inView])

	return (
		<section
			ref={ref}
			className="flex flex-col lg:flex-row items-center justify-between px-8 sm:px-16 py-12 bg-[#fff] dark:bg-[#111827]"
		>
			<div className="grid md:grid-cols-2 items-center gap-8">
				{/* Text Content */}
				<motion.div
					initial="hidden"
					animate={controls}
					viewport={{once: true}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0, transition: {duration: 0.8}},
					}}
					className="space-y-6"
				>
					{/* Badge */}
					<span className="bg-[#ffcc00] text-gray-900 dark:bg-[#2b3945] dark:text-[#ffcc00] text-sm font-medium px-3 py-1 rounded-full">
						Intelligent Solutions
					</span>

					{/* Heading */}
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
						Everything that Matters to Success
					</h2>

					{/* Paragraphs */}
					<p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
						At Logiicdev, we are dedicated to crafting intelligent electronics
						that drive a connected world. Our innovative designs encompass
						advanced battery management systems, AI-powered testing equipment,
						and bespoke FPGA solutions, all tailored to meet the evolving
						demands of green energy, efficient design, and responsible
						innovation.
					</p>
					<p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
						Whether you're developing integrated circuits (ICs) or comprehensive
						systems, our extensive portfolio empowers you to choose the perfect
						model that aligns with your specific needs. Partner with us to
						unlock the potential of intelligent technology and elevate your
						projects to new heights!
					</p>
				</motion.div>

				{/* Image */}
				<motion.div
					initial="hidden"
					animate={controls}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0, transition: {duration: 0.8}},
					}}
					className="relative"
				>
					<img
						src={Team}
						alt="Team at work"
						className="w-full md:w-3/4 h-auto mx-auto rounded-lg shadow-md"
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default ProjectSection
