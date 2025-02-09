import React from "react"
import {motion} from "framer-motion"
import SIMULATION from "../../assets/AdvantagesIcons/simulation.png"
import BATTERY from "../../assets/AdvantagesIcons/energy.png"
import NETWORKING from "../../assets/AdvantagesIcons/networking.png"
import POWER from "../../assets/AdvantagesIcons/energy-system.png"
import FPGA from "../../assets/AdvantagesIcons/processor.png"
import VALIDATION from "../../assets/AdvantagesIcons/reliability.png"

const Advantages = () => {
	const cards = [
		{
			icon: <img src={SIMULATION} alt="Simulation" className="w-10" />,
			title: "Simulation",
			description:
				"Logiicdev excels in cell-level design, package optimization, co-simulation, ensuring signal and power integrity, and verifying analogue and mixed-signal blocks.",
		},
		{
			icon: <img src={BATTERY} alt="AI Battery Management" className="w-10" />,
			title: "AI Battery Management",
			description:
				"Our cutting-edge AI Battery IP offers a real-time virtual environment for testing control algorithms, eliminating physical prototypes, and enhancing efficiency and innovation.",
		},
		{
			icon: (
				<img src={NETWORKING} alt="Project Coordination" className="w-10" />
			),
			title: "Project Coordination & Consultancy",
			description:
				"Empowering clients to fast-track objectives by converting technical knowledge into impactful solutions. Achieve your goals efficiently with our expertise.",
		},
		{
			icon: (
				<img src={POWER} alt="Hi-Speed Power Electronics" className="w-10" />
			),
			title: "Hi-Speed Power Electronics",
			description:
				"Our GaN FETs provide exceptional switching speeds and minimize losses, making them perfect for battery management, rapid switching, and load handling.",
		},
		{
			icon: <img src={FPGA} alt="FPGA & IP" className="w-10" />,
			title: "FPGA & AI IP",
			description:
				"Logiicdev develops bespoke FPGA & IP solutions as cost-effective alternatives to ASICs, minimizing hidden costs and production delays.",
		},
		{
			icon: (
				<img
					src={VALIDATION}
					alt="Verification & Validation"
					className="w-10"
				/>
			),
			title: "Verification & Validation",
			description:
				"Ensure optimal hardware performance with advanced testing strategies for mixed signals, high-speed tech, and power modes, preventing costly redesigns.",
		},
	]

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

	return (
		<section className="bg-[#fff] dark:bg-[#111827] text-gray-900 dark:text-gray-200 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
			<div className="container mx-auto">
				{/* Section Heading */}
				<motion.div
					className="text-center mb-10"
					initial={{opacity: 0, y: -50}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.7}}
				>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
						Unlock Your Potential with Our Unparalleled Advantages
					</h2>
					<p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
						Explore how our innovative solutions can drive efficiency and
						excellence in your projects.
					</p>
				</motion.div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{cards.map((card, index) => (
						<motion.div
							key={index}
							className="bg-[#ffcc00] dark:bg-[#2B3945] p-6 rounded-lg"
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}}
							variants={cardVariants}
						>
							<div className="flex flex-col items-start">
								{/* Icon */}
								<div className="mb-4">{card.icon}</div>

								{/* Card Title */}
								<h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-[#FBBF24]">
									{card.title}
								</h3>

								{/* Card Description */}
								<p className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
									{card.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Advantages
