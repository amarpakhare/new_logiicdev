import React from "react"

const Contact = () => {
	return (
		<section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-[#111827]">
			<div className="w-full max-w-6xl mx-auto text-center px-6 py-12">
				<h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
					Get in Touch
				</h2>
				<p className="text-lg text-gray-600 dark:text-gray-400">
					We’d love to hear from you! Reach out and we’ll get back to you as
					soon as possible.
				</p>
				<hr className="mt-6 mb-10 border-t-2 border-yellow-500 w-24 mx-auto" />

				<div className="flex flex-col md:flex-row md:space-x-10 items-start justify-between">
					{/* Form Section */}
					<div className="w-full md:w-1/2 bg-white dark:bg-[#1e293b] shadow-lg rounded-lg p-8">
						<form>
							<div className="mb-6">
								<input
									type="text"
									placeholder="Your Name"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								/>
							</div>
							<div className="mb-6">
								<input
									type="email"
									placeholder="Your Email"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								/>
							</div>
							<div className="mb-6">
								<input
									type="text"
									placeholder="Subject"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								/>
							</div>
							<div className="mb-6">
								<textarea
									placeholder="Your Message"
									rows="5"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
							>
								Send Message
							</button>
						</form>
					</div>

					{/* Contact Details Section */}
					<div className="w-full md:w-1/2 mt-10 md:mt-0 text-gray-800 dark:text-gray-300 text-left">
						<div className="mb-8">
							<h3 className="text-lg font-semibold mb-2">Headquarters</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Krottendorfer Str. 72/1, 8052 Graz, Austria
							</p>
						</div>
						<div className="mb-8">
							<h3 className="text-lg font-semibold mb-2">Phone</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Mobile Number:{" "}
								<a
									href="tel:+436764639222"
									className="text-yellow-500 hover:underline"
								>
									+43 6764639222
								</a>
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Email</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Support:{" "}
								<a
									href="mailto:contact@logiicdev.eu"
									className="text-yellow-500 hover:underline"
								>
									contact@logiicdev.eu
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
