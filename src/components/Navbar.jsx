import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {MoonIcon, SunIcon, ArrowRightIcon} from "@heroicons/react/24/solid"
import {motion} from "framer-motion"
// import Logo from "../assets/logo.png"
import Logo from "../assets/Home/Logo.jpeg"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
	const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
	const [isProduct2DropdownOpen, setIsProduct2DropdownOpen] = useState(false)
	const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false)
	const [isSolutionDropdownOpen, setIsSolutionDropdownOpen] = useState(false)
	const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false)

	const [isMobileProductOpen, setIsMobileProductOpen] = useState(false)
	const [isMobileProduct2Open, setIsMobileProduct2Open] = useState(false)
	const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false)
	const [isMobileSolutionOpen, setIsMobileSolutionOpen] = useState(false)
	const [isMobileResearchOpen, setIsMobileResearchOpen] = useState(false)

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark")
			localStorage.setItem("theme", "dark")
		} else {
			document.documentElement.classList.remove("dark")
			localStorage.setItem("theme", "light")
		}
	}, [theme])

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	const menuVariants = {
		open: {opacity: 1, height: "auto", transition: {duration: 0.3}},
		closed: {opacity: 0, height: 0, transition: {duration: 0.3}},
	}

	const linkVariants = {
		hover: {scale: 1.1, transition: {duration: 0.2}},
	}
	let closeProductTimeout
	let closeCompanyTimeout
	let closeResearchTimeout
	let closeSolutionTimeout

	const handleProductMouseEnter = () => {
		clearTimeout(closeProductTimeout)
		setIsProductDropdownOpen(true)
	}

	const handleProductMouseLeave = () => {
		closeProductTimeout = setTimeout(() => {
			setIsProductDropdownOpen(false)
		}, 100) // Adjust the delay time (in milliseconds) as needed
	}
	const handleCompanyMouseEnter = () => {
		clearTimeout(closeCompanyTimeout)
		setIsCompanyDropdownOpen(true)
	}

	const handleCompanyMouseLeave = () => {
		closeCompanyTimeout = setTimeout(() => {
			setIsCompanyDropdownOpen(false)
		}, 100) // Adjust the delay time (in milliseconds) as needed
	}
	const handleSolutionMouseEnter = () => {
		clearTimeout(closeSolutionTimeout)
		setIsSolutionDropdownOpen(true)
	}

	const handleSolutionMouseLeave = () => {
		closeSolutionTimeout = setTimeout(() => {
			setIsSolutionDropdownOpen(false)
		}, 100) // Adjust the delay time (in milliseconds) as needed
	}

	const handleResearchMouseEnter = () => {
		clearTimeout(closeResearchTimeout)
		setIsResearchDropdownOpen(true)
	}

	const handleResearchMouseLeave = () => {
		closeResearchTimeout = setTimeout(() => {
			setIsResearchDropdownOpen(false)
		}, 100) // Adjust the delay time (in milliseconds) as needed
	}
	const handleProduct2MouseEnter = () => {
		clearTimeout(closeResearchTimeout)
		setIsProduct2DropdownOpen(true)
	}

	const handleProduct2MouseLeave = () => {
		closeResearchTimeout = setTimeout(() => {
			setIsProduct2DropdownOpen(false)
		}, 100) // Adjust the delay time (in milliseconds) as needed
	}
	return (
		<nav className="bg-transparent backdrop-blur-md rounded-lg bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
			<div className="flex justify-between h-16">
				<Link to="/" className="flex-shrink-0 flex items-center justify-center">
					<img className="block h-16 w-auto" src={Logo} alt="Logo" />
					{/* <div className="flex items-center flex-col gap-1">
						<span
							className="text-4xl -mt-3 font-extrabold xl:text-4xl text-[#ffcc00] dark:text-white"
							// style={{
							// 	textShadow: "2px 4px 0px rgba(33, 33, 33, 1)",
							// }}
						>
							Logiicdev
						</span>
						<span className="text-[#0070c1]">Intelligent Innovation</span>
					</div> */}
				</Link>

				<div className="hidden md:flex items-center justify-center flex-grow space-x-8">
					<motion.div variants={linkVariants} whileHover="hover">
						<Link
							onClick={() => {
								window.scrollTo(0, 0)
							}}
							to="/"
							className="text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
						>
							Home
						</Link>
					</motion.div>

					{/* Product */}
					<div
						className="relative"
						onMouseEnter={handleProductMouseEnter}
						onMouseLeave={handleProductMouseLeave}
					>
						<motion.div variants={linkVariants} whileHover="hover">
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
								to="/product"
							>
								Product
							</Link>
						</motion.div>
						{isProductDropdownOpen && (
							<div className="absolute left-0 mt-6 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
								<ul>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/product1"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Omnipower
										</Link>
									</li>
									<li
										className="relative"
										onMouseEnter={handleProduct2MouseEnter}
										onMouseLeave={handleProduct2MouseLeave}
									>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/product2"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Cost-Optimized SoC
										</Link>
										{isProduct2DropdownOpen && (
											<div className="absolute -right-10 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
												<ul>
													<li>
														<Link
															onClick={() => {
																window.scrollTo(0, 0)
															}}
															to="/product2"
															className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
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
															className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
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
															className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
														>
															KARVi
														</Link>
													</li>
												</ul>
											</div>
										)}
									</li>
									{/* <li>
										<Link
											to="/product3"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Product 3
										</Link>
									</li> */}
								</ul>
							</div>
						)}
					</div>

					{/* Solution, Research, and Product Desktop Dropdowns */}
					{/* Solution Dropdown */}
					<div
						className="relative"
						onMouseEnter={handleSolutionMouseEnter}
						onMouseLeave={handleSolutionMouseLeave}
					>
						<motion.div variants={linkVariants} whileHover="hover">
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
								to="/iot"
							>
								Solution
							</Link>
						</motion.div>
						{isSolutionDropdownOpen && (
							<div className="absolute left-0 mt-6 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
								<ul>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/iot"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Iot
										</Link>
									</li>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/energyEfficiency"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Energy Efficiency and Management
										</Link>
									</li>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/mobility"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Mobility
										</Link>
									</li>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/drones"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Drones
										</Link>
									</li>
								</ul>
							</div>
						)}
					</div>

					{/* Research Dropdown */}
					<div
						className="relative"
						onMouseEnter={handleResearchMouseEnter}
						onMouseLeave={handleResearchMouseLeave}
					>
						<motion.div variants={linkVariants} whileHover="hover">
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
								to="/fpgaAndAi"
							>
								Research
							</Link>
						</motion.div>
						{isResearchDropdownOpen && (
							<div className="absolute left-0 mt-6 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
								<ul>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/fpgaAndAi"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											FPGA and AI
										</Link>
									</li>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/testing"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Simulation and Testing
										</Link>
									</li>
								</ul>
							</div>
						)}
					</div>

					{/* (Keep the existing dropdown logic here for desktop view) */}
					{/* Desktop Company Dropdown */}
					<div
						className="relative"
						onMouseEnter={handleCompanyMouseEnter}
						onMouseLeave={handleCompanyMouseLeave}
					>
						<Link
							onClick={() => {
								window.scrollTo(0, 0)
							}}
							to="/aboutus"
						>
							<motion.div variants={linkVariants} whileHover="hover">
								<p className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
									Company
								</p>
							</motion.div>
						</Link>
						{isCompanyDropdownOpen && (
							<div className="absolute left-0 mt-6 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
								<ul>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/careers"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
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
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											About us
										</Link>
									</li>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/legal"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Legal
										</Link>
									</li>
									{/* <li>
										<Link
											to="/impressum"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Impressum
										</Link>
									</li> */}
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/datenschutz"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Datenschutz
										</Link>
									</li>
									<li>
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											to="/equalityplan"
											className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
										>
											Equality plan
										</Link>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>

				<div className="hidden md:flex items-center space-x-4 gap-4">
					{/* <Link
						onClick={() => {
							window.scrollTo(0, 0)
						}}
						to="/contact"
						className="ml-4 flex items-center px-4 py-2 bg-[#ffcc00] text-gray-900 font-medium rounded-md border border-black border-b-4 border-r-4 hover:bg-gray-50 transition gap-1"
					>
						<span>Contact us</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</Link> */}
					<button
						onClick={toggleTheme}
						className="ml-4 p-[6px] text-gray-900 dark:bg-white dark:text-gray-900 focus:outline-none border border-b-[4px] border-r-[3px] border-t-[2px] border-l-[1px] border-gray-900 rounded-[50%] hover:bg-gray-900 hover:text-white"
					>
						{theme === "light" ? (
							<MoonIcon className="h-6 w-6" />
						) : (
							<SunIcon className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Contact us and Theme button */}

				<div className="flex md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-gray-500 dark:text-gray-300"
					>
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{isOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<motion.div
				className="md:hidden"
				initial="closed"
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
			>
				<Link
					onClick={() => {
						window.scrollTo(0, 0)
					}}
					to="/"
					className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
				>
					Home
				</Link>

				{/* Mobile Company Dropdown */}
				<div
					className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
					onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
				>
					Company
					{isMobileCompanyOpen && (
						<motion.div
							className="pl-4 mt-2"
							initial="closed"
							animate={isOpen ? "open" : "closed"}
							variants={menuVariants}
						>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/careers"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Careers
							</Link>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/aboutus"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								About us
							</Link>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/legal"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Legal
							</Link>
							{/* <Link
								to="/impressum"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Impressum
							</Link> */}
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/datenschutz"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Datenschutz
							</Link>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/equalityplan"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Equality plan
							</Link>
						</motion.div>
					)}
				</div>

				{/* Mobile Solution Dropdown */}
				<div
					className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
					onClick={() => setIsMobileSolutionOpen(!isMobileSolutionOpen)}
				>
					Solution
					{isMobileSolutionOpen && (
						<motion.div
							className="pl-4 mt-2"
							initial="closed"
							animate={isOpen ? "open" : "closed"}
							variants={menuVariants}
						>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/iot"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Iot
							</Link>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/energyEfficiency"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Energy Efficiency and Management
							</Link>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/mobility"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Mobility
							</Link>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/drones"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Drones
							</Link>
						</motion.div>
					)}
				</div>

				{/* Mobile Research Dropdown */}
				<div
					className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
					onClick={() => setIsMobileResearchOpen(!isMobileResearchOpen)}
				>
					Research
					{isMobileResearchOpen && (
						<motion.div
							className="pl-4 mt-2"
							initial="closed"
							animate={isOpen ? "open" : "closed"}
							variants={menuVariants}
						>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/fpgaAndAi"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								FPGA and AI
							</Link>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/testing"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Simulation and Testing
							</Link>
						</motion.div>
					)}
				</div>

				{/* Mobile Product Dropdown */}
				<div
					className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
					onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
				>
					Product
					{isMobileProductOpen && (
						<motion.div
							className="pl-4 mt-2"
							initial="closed"
							animate={isOpen ? "open" : "closed"}
							variants={menuVariants}
						>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/product"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Products
							</Link>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to="/product1"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Omnipower
							</Link>
							<div
								onClick={(e) => {
									e.stopPropagation()
									setIsMobileProduct2Open(!isMobileProduct2Open)
								}}
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Cost-Optimized SoC
							</div>
							{isMobileProduct2Open && (
								<motion.div
									className="pl-4 mt-2"
									initial="closed"
									animate={isOpen ? "open" : "closed"}
									variants={menuVariants}
								>
									<Link
										onClick={() => {
											window.scrollTo(0, 0)
										}}
										to="/product3"
										className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
									>
										KIANA
									</Link>
									<Link
										onClick={() => {
											window.scrollTo(0, 0)
										}}
										to="/product3"
										className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
									>
										InAS
									</Link>
									<Link
										onClick={() => {
											window.scrollTo(0, 0)
										}}
										to="/product4"
										className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
									>
										KARVi
									</Link>

									{/* TODO: Edit the mobile product view  */}
								</motion.div>
							)}
							{/* <Link
								to="/product3"
								className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								Product 3
							</Link> */}
						</motion.div>
					)}
				</div>

				{/* <Link
					onClick={() => {
						window.scrollTo(0, 0)
					}}
					to="/contact"
					className="m-auto flex items-center justify-center mx-12 my-2 px-4 py-2 bg-[#ffcc00] text-gray-900 font-medium rounded-md border border-black border-b-4 border-r-4 hover:bg-gray-50 transition gap-1"
				>
					Contact Us
				</Link> */}
				<button
					onClick={toggleTheme}
					className="m-auto flex justify-center p-[6px] text-gray-900 dark:bg-white dark:text-gray-900 focus:outline-none border border-b-[4px] border-r-[3px] border-t-[2px] border-l-[1px] border-gray-900 rounded-[50%] hover:bg-gray-900 hover:text-white"
				>
					{theme === "light" ? (
						<MoonIcon className="h-6 w-6" />
					) : (
						<SunIcon className="h-6 w-6" />
					)}
				</button>
			</motion.div>
		</nav>
	)
}

export default Navbar
