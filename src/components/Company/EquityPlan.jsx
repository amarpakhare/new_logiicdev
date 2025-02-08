import React from "react"
import {motion} from "framer-motion"

const EquityPlan = () => {
	return (
		<div className="bg-[#fff] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] p-4 md:p-8 lg:p-12 w-full mx-auto text-gray-800 dark:text-gray-300">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-8">
				Gender Equality Plan
			</h1>

			<motion.div
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.6}}
				className="space-y-4 md:space-y-6"
			>
				<section>
					<p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
						Employees are the most important capital of any company, especially
						in times of immense international competition. A successful company
						must, therefore, offer employees an inspiring working environment.
						This can be achieved with a culture of openness, diversity, and
						appreciation.
					</p>
					<p className="text-sm md:text-base lg:text-lg mt-2 text-gray-700 dark:text-gray-300">
						Aware of the fundamental importance of an open gender culture for
						technical excellence, logiicdev pursues a comprehensive strategy to
						support diversity so that different technical and social skills from
						different educational contexts and gender-role-specific competencies
						can develop optimally in the interest of logiicdev’s mission.
					</p>
					<p className="text-sm md:text-base lg:text-lg mt-2 text-gray-700 dark:text-gray-300">
						Logiicdev commits itself to the career advancement of women and to
						creating positive and career-enhancing conditions for women. It,
						therefore, sees it as a joint task of all members of logiicdev to
						achieve the objective that women and men have opportunities to
						develop according to their qualifications and that any existing
						discrimination against women and men is eliminated or
						counterbalanced.
					</p>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-8">
						Objectives of the Gender Equality Plan
					</h2>
					<ul className="list-disc pl-5 space-y-1 md:space-y-2 mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
						<li>
							Implementation of structures for ongoing discussion and ensuring a
							permanent gender discourse
						</li>
						<li>
							Sustainable provision of resources for gender equality measures
						</li>
						<li>
							Increasing the proportion of women through recruiting, personnel
							development, and the provision of adequate work-life balance
						</li>
						<li>
							Supporting an appreciative organizational and communication
							culture through clear positioning and messages
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-8">
						Participatory Anchoring
					</h2>
					<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4 text-gray-700 dark:text-gray-300">
						For an effective and continuous implementation of gender equality
						measures, the different hierarchical levels and employee groups are
						invited to be involved in the development of gender activities.
					</p>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-8">
						Gender Monitor
					</h2>
					<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4 text-gray-700 dark:text-gray-300">
						The Gender Monitor provides logiicdev with a useful source of data
						over time. Key figures are collected and published every two years
						on the following aspects:
					</p>
					<ul className="list-disc pl-5 space-y-1 md:space-y-2 mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
						<li>
							Recruiting: Ratio of female applications to recruitment of female
							employees
						</li>
						<li>Career Development: Proportion of women by occupation</li>
						<li>
							Reconciliation of professional and private life: Use of (parental)
							leave option across all employee groups
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-8">
						Resources and Budget
					</h2>
					<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4 text-gray-700 dark:text-gray-300">
						Logiicdev provides a budget based on the needs and the actions
						taken. Personal resources and responsibilities are assigned under
						the corresponding items of this plan.
					</p>
				</section>

				<footer className="mt-8 md:mt-10 text-center text-gray-700 dark:text-gray-400">
					<p className="text-xs md:text-sm">CEO MSc. Deepak V Katkoria</p>
				</footer>
			</motion.div>
		</div>
	)
}

export default EquityPlan
