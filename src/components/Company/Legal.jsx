import {div} from "framer-motion/client"
import React from "react"
import Impressum from "./Impressum.jsx"

const Legal = () => {
	return (
		<>
			<div className="bg-gradient-to-r from-[#fefff2] to-[#ffcc00] dark:from-[#1e293b] dark:to-[#334155] py-12 px-6">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
					{/* Reusable Section Component */}
					{[
						{
							title: "TRADEMARKS",
							description:
								"All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.",
							icon: (
								<div className="w-16 h-16 bg-yellow-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
									<span className="text-white text-2xl font-bold">TM</span>
								</div>
							),
						},
						{
							title: "LEGAL DISCLAIMER",
							description: `All email communications from this site are subject to the terms contained in the following email disclaimer:
          
This communication, including any attachments, may contain confidential information of Logiicdev, its representatives, and is intended solely for the use of the individual or entity to which it is addressed. Any unauthorized review, use, disclosure, or distribution is prohibited. 

If you have any questions about this disclaimer, please mail us at contact@logiicdev.eu`,
							icon: (
								<div className="w-16 h-16 bg-yellow-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
									<svg
										className="w-8 h-8 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
										/>
									</svg>
								</div>
							),
						},
						{
							title: "SITE TRANSLATION",
							description:
								"We have tried our best to avoid any kind of misconduct. Logiicdev is not responsible for the translation errors on the site.",
							icon: (
								<div className="w-16 h-16 bg-yellow-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
									<svg
										className="w-8 h-8 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeWidth="2"
											d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>
								</div>
							),
						},
					].map((section, index) => (
						<div
							key={index}
							className="bg-white dark:bg-[#1e293b] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
						>
							{/* Icon */}
							<div className="flex justify-center mb-4">{section.icon}</div>

							{/* Title */}
							<h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4">
								{section.title}
							</h2>
							<hr className="w-10 mx-auto border-gray-300 dark:border-gray-600 mb-4" />

							{/* Description */}
							<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
								{section.description}
							</p>
						</div>
					))}
				</div>
			</div>

			<Impressum />
			<div className="bg-gray-100 p-4 text-center dark:bg-[#111827] dark:text-white">
				<p className="text-lg font-bold mb-2">
					Please contact us to highlight the issue and we are happy to resolve
					it.
				</p>
				<p className="text-lg font-bold mb-2">
					Sie erreichen uns unter folgenden Kontaktdaten:
				</p>
				<div className="text-lg mb-2">
					<p>Logiicdev GmbH</p>
					<p>Krottendorfer Str. 72/1</p>
					<p>8052 Graz, Austria</p>
				</div>
				<div className="text-lg mb-2">
					<p>Phone: +43 676 4639222</p>
					<p>
						Email:{" "}
						<a href="mailto:contact@logiicdev.eu">contact@logiicdev.eu</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default Legal
