import React, {useState} from "react"
import {motion, useAnimation} from "framer-motion"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const AnimatedCounter = ({targetNumber}) => {
	const [countOn, setCountOn] = useState(false)

	return (
		<ScrollTrigger
			onEnter={() => setCountOn(true)}
			onExit={() => setCountOn(false)}
		>
			<CountUp
				start={0}
				end={countOn ? targetNumber : 0}
				duration={2}
				delay={0}
			/>
		</ScrollTrigger>
	)
}

const StatsSection = () => {
	const controls = useAnimation()

	return (
		<section className="relative py-12 bg-[#fff] dark:bg-[#111827]">
			{/* Content container */}
			<div className="container mx-auto px-6">
				{/* Heading and Subheading */}
				<div className="text-center space-y-4">
					<h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-black dark:text-[#E2E8F0]">
					Achievements
					</h2>
					
				</div>

				{/* Stats Box */}
				<div className="bg-[#ffcc00] dark:bg-[#334155] text-black dark:text-[#F1F5F9] rounded-lg p-6 sm:p-10 flex flex-col md:flex-row justify-around items-center mx-4 mt-8 shadow-lg dark:shadow-xl">
					<div className="text-center mb-6 md:mb-0">
						<h2 className="text-3xl sm:text-4xl font-bold flex justify-center">
							<AnimatedCounter targetNumber={19} /> <span>+</span>
						</h2>
						<p className="text-sm sm:text-base mt-2 dark:text-gray-300">
							Projects completed
						</p>
					</div>
					<div className="hidden md:block border-l border-black dark:border-gray-500 h-12 mx-6"></div>
					<div className="text-center mb-6 md:mb-0">
						<h2 className="text-3xl sm:text-4xl font-bold">
							<AnimatedCounter targetNumber={10} />
						</h2>
						<p className="text-sm sm:text-base mt-2 dark:text-gray-300">
							Satisfied Clients
						</p>
					</div>
					<div className="hidden md:block border-l border-black dark:border-gray-500 h-12 mx-6"></div>
					<div className="text-center">
						<h2 className="text-3xl sm:text-4xl font-bold">
							<AnimatedCounter targetNumber={2} />
						</h2>
						<p className="text-sm sm:text-base mt-2 dark:text-gray-300">
							Winning Awards
							<br />
							Including in 2022 - ESA Space award
						</p>
					</div>
					<div className="hidden md:block border-l border-black dark:border-gray-500 h-12 mx-6"></div>
					<div className="text-center mb-6 md:mb-0">
						<h2 className="text-3xl sm:text-4xl font-bold flex justify-center">
							<AnimatedCounter targetNumber={370} /> <span>+</span>
						</h2>
						<p className="text-sm sm:text-base mt-2 dark:text-gray-300">
							Followers
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StatsSection
