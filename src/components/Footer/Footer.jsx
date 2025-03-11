import React from "react"
import {
	FaTwitter,
	FaFacebook,
	FaLinkedin,
	FaInstagram,
	FaEnvelope,
	FaPhoneAlt,
} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import Button from "../Button"
import Button2 from "../Button2"
import {Link} from "react-router-dom"

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] px-4">
			<div className="container mx-auto">
				{/* Main Section */}
				<section className="bg-gray-900 py-8 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] px-6 flex justify-center">
					<div className="bg-gray-800 rounded-lg shadow-lg p-10 text-center max-w-2xl w-full">
						<h1 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
							Simplify work and get more done now.
						</h1>

						<div className="flex justify-center space-x-4 mt-6">
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/contact"
							>
								<button className="flex items-center px-6 py-3 bg-[#ffcc00] text-black font-medium rounded-md border border-black border-b-4 border-r-4 hover:bg-[#bea231] transition">
									Get Started
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
							{/* <Link
								to="/aboutus"
								className="border border-gray-500 text-gray-300 font-medium py-2 px-6 rounded-lg hover:bg-gray-700"
							>
								Take a Tour
							</Link> */}
						</div>
					</div>
				</section>

				{/* Footer Links */}

				<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{/* Product Section */}
					<div>
						<h5 className="font-bold mb-4">PRODUCT</h5>
						<ul className="space-y-2">
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/product1"
									className="hover:underline"
								>
									Omnipower
								</Link>
							</li>
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/product2"
									className="hover:underline"
								>
									KIANA
								</Link>
							</li>
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/product3"
									className="hover:underline"
								>
									InAS
								</Link>
							</li>
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/product4"
									className="hover:underline"
								>
									KARVI
								</Link>
							</li>
						</ul>
					</div>

					{/* Company Section */}
					<div>
						<h5 className="font-bold mb-4">COMPANY</h5>
						<ul className="space-y-2">
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/careers"
									className="hover:underline"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/aboutus"
									className="hover:underline"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/legal"
									className="hover:underline"
								>
									Legal
								</Link>
							</li>
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/impressum"
									className="hover:underline"
								>
									Impressum
								</Link>
							</li>
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/datenschutz"
									className="hover:underline"
								>
									Datenschutz
								</Link>
							</li>
							<li>
								<a href="/equityplan" className="hover:underline">
									Equity Plan
								</a>
							</li>
						</ul>
					</div>

					{/* Support Section */}
					<div>
						<h5 className="font-bold mb-4">SUPPORT</h5>
						<ul className="space-y-2">
							<li>
								<Link
									onClick={() => {
										window.scrollTo(0, 0)
									}}
									to="/contact"
									className="hover:underline"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media and Contact Info */}
					<div>
						<h5 className="font-bold mb-4">SOCIAL MEDIA</h5>
						<div className="flex space-x-4 mb-4">
							<a href="https://x.com/logiicdev" target="_blank">
								<FaXTwitter className="text-xl hover:text-blue-400" />
							</a>

							<a
								href="https://www.linkedin.com/company/logiicdev-gmbh/posts/?feedView=all"
								target="_blank"
							>
								<FaLinkedin className="text-xl hover:text-blue-500" />
							</a>
							<a href="https://www.instagram.com/logiicdev/" target="_blank">
								<FaInstagram className="text-xl hover:text-pink-500" />
							</a>
						</div>
						<div className="space-y-2">
							<div className="flex items-center">
								<FaEnvelope className="mr-2" />
								<a
									href="mailto:contact@macrivate.com"
									className="hover:underline"
								>
									contact@logiicdev.eu
								</a>
							</div>
							<div className="flex items-center">
								<FaPhoneAlt className="mr-2" />
								<span>+43 6764639222</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
					<p>Copyright © 2024 Logiicdev. All Rights Reserved.</p>
					<div className="space-x-4">
						<a href="#" className="hover:underline">
							Terms of Service
						</a>
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
