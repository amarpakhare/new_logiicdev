import React from "react"
import {Link} from "react-router-dom"

const CallToAction = () => {
	return (
		<section className="relative flex flex-col items-center text-center py-16 bg-[#fff] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]">
			{/* Decorative Shapes */}
			{/* <div className="absolute hidden lg:block left-12 top-1/2 transform -translate-y-1/2 w-14 h-16 bg-green-500 rounded-tl-full rounded-bl-full"></div>
			<div className="absolute hidden lg:block right-12 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-yellow-500 rotate-45"></div> */}

			{/* Main Content */}
			<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight mb-4">
				Bring your customer service to the next level of excellence
			</h2>
			<p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-lg mx-auto mb-8">
				Take your customer service to the next level by incorporating innovative
				technologies and personalized solutions
			</p>

			{/* Button */}
			<Link
				onClick={() => {
					window.scrollTo(0, 0)
				}}
				to="/fpgaAndAi"
			>
				<button className="flex items-center px-6 py-3 bg-green-700 text-white font-medium rounded-md border border-black border-b-4 border-r-4 hover:bg-green-800 transition">
					Explore Now
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
		</section>
	)
}

export default CallToAction
