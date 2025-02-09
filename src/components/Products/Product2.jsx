import {motion, useInView} from "framer-motion" // Import motion for animation
import KIANA1 from "../../assets/KIANA/KIANA1.jpg"
import KIANA2 from "../../assets/KIANA/KIANA2.jpg"
import {section, text} from "framer-motion/client"
import {useEffect, useRef} from "react"
import AI from "../../assets/KIANA/AI.png"
import Industrial from "../../assets/KIANA/Industrial.png"
import Automation from "../../assets/KIANA/Automation.png"
import Medical from "../../assets/KIANA/Medical.webp"
import ProcessIndustry from "../../assets/KIANA/Mil Grade.png"
import Security from "../../assets/KIANA/Security.png"
import Surveilance from "../../assets/KIANA/Surveilance.png"
import ImageProcessing from "../../assets/KIANA/ImageProcessing.png"
import ImageRestore from "../../assets/KIANA/ImageRestoration.png"
import RobotVision from "../../assets/KIANA/RobotVision.png"
import INAS from "../../assets/KIANA/INAS.jpg"
import KARVI from "../../assets/KIANA/Karvi.jpg"
const Product2 = () => {
	const refe = useRef(null)
	const refe2 = useRef(null)
	const refe3 = useRef(null)
	const refe4 = useRef(null)
	const refe5 = useRef(null)
	const refe6 = useRef(null)
	const refe7 = useRef(null)
	const refe8 = useRef(null)
	const refe9 = useRef(null)
	const refe10 = useRef(null)
	const refe11 = useRef(null)
	const refe12 = useRef(null)
	const refe13 = useRef(null)
	const refe14 = useRef(null)
	const refe15 = useRef(null)
	const isInView = useInView(refe, {once: true, amount: 0.2})
	const isInView2 = useInView(refe2, {once: true, amount: 0.2})
	const isInView3 = useInView(refe3, {once: true, amount: 0.2})
	const isInView4 = useInView(refe4, {once: true, amount: 0.2})
	const isInView5 = useInView(refe5, {once: true, amount: 0.2})
	const isInView6 = useInView(refe6, {once: true, amount: 0.2})
	const isInView7 = useInView(refe7, {once: true, amount: 0.2})
	const isInView8 = useInView(refe8, {once: true, amount: 0.2})
	const isInView9 = useInView(refe9, {once: true, amount: 0.2})
	const isInView10 = useInView(refe10, {once: true, amount: 0.2})
	const isInView11 = useInView(refe11, {once: true, amount: 0.2})
	const isInView12 = useInView(refe12, {once: true, amount: 0.2})
	const isInView13 = useInView(refe13, {once: true, amount: 0.2})
	const isInView14 = useInView(refe14, {once: true, amount: 0.2})
	const isInView15 = useInView(refe15, {once: true, amount: 0.2})

	const imageVariants = {
		hidden: {opacity: 0, scale: 0.8},
		visible: {opacity: 1, scale: 1, transition: {duration: 1}},
	}

	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

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

	const sectionVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
	}

	const logos = [
		AI,
		Industrial,
		Automation,
		Medical,
		Security,
		ProcessIndustry,
		ImageProcessing,
		Surveilance,
		RobotVision,
		// ImageRestore
	]

	const containerRef = useRef(null)
	const containerRef2 = useRef(null)
	const containerRef3 = useRef(null)

	useEffect(() => {
		const createCarousel = (container) => {
			if (!container) return

			let interval

			const scrollCarousel = () => {
				const firstChild = container.firstElementChild

				// Clone the first child and append it
				const clonedChild = firstChild.cloneNode(true)
				container.appendChild(clonedChild)

				// Smoothly scroll to the next item
				container.style.transition = "transform 2s ease-in-out"
				container.style.transform = `translateX(-${
					firstChild.offsetWidth + 24
				}px)`

				container.addEventListener(
					"transitionend",
					() => {
						// Reset after transition
						container.style.transition = "none"
						container.style.transform = "translateX(0)"
						container.removeChild(clonedChild)
						container.appendChild(firstChild)
					},
					{once: true}
				)
			}

			interval = setInterval(scrollCarousel, 2000)

			return () => clearInterval(interval)
		}

		// Run carousel logic for both containerRefs
		createCarousel(containerRef.current)
		createCarousel(containerRef2.current)
		createCarousel(containerRef3.current)
	}, [])

	return (
		<section>
			<motion.div
				className="flex flex-col items-center justify-evenly min-h-80  md:min-h-96 bg-gradient-to-r from-[#fefff2] via-[#f3f4f6] to-[#ffcc00] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] md:py-32 sm:p-10 rounded-lg md:m-10 "
				initial={{opacity: 0, y: -50}} // Initial state
				animate={{opacity: 1, y: 0}} // Animation on mount
				exit={{opacity: 0, y: 50}} // Animation on unmount
				transition={{duration: 0.5}} // Transition timing
			>
				{/* Title Section */}
				<motion.h1
					className="leading-relaxed md:mb-14 text-3xl sm:text-5xl md:text-5xl font-extrabold text-gray-800 text-center mb-6 md:leading-relaxed dark:text-white"
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					transition={{duration: 0.7, delay: 0.2}}
				>
					Cost Optimized <br /> Scalable SOC Platform - KIANA
				</motion.h1>
			</motion.div>

			<div className="flex flex-col  items-center lg:flex-row lg:justify-center gap-12  p-6 lg:p-12 bg-white dark:bg-slate-900">
				<div className="w-full lg:w-1/2 space-y-8">
					<motion.div
						className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-yellow-500"
						ref={refe11}
						animate={isInView11 ? "visible" : "hidden"}
						variants={sectionVariants}
					>
						<h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 dark:text-white">
							<span className="text-yellow-500">Ki</span>
							<span className="text-gray-800 dark:text-white">ANA</span>{" "}
							Specifications
						</h1>
						<motion.ul
							className="list-disc space-y-3 dark:text-white text-gray-700 pl-6"
							ref={refe12}
							animate={isInView12 ? "visible" : "hidden"}
							variants={textVariants}
						>
							<li>
								<strong>Processor:</strong> Powered by ARM&reg; Dual-Core
								Cortex&trade; A9 MP Core
							</li>
							<li>
								<strong>Platform:</strong> Based on Xilinx’s high-end Zynq
								XC7Z000 Series All-Programmable SoC
							</li>
							<li>
								<strong>Device Support:</strong> Zynq devices XC7Z007 / 10 / 14
								/ 20 CLG 400 Pin package
							</li>
							<li>
								<strong>Form Factor:</strong> Compact 87mm x 65mm board size
							</li>
							<li>
								<strong>Production Ready:</strong> Available with an industrial
								temperature range
							</li>
							<li>
								<strong>Support:</strong> Linux BSP, toolchain, and
								comprehensive assistance
							</li>
						</motion.ul>
					</motion.div>

					<motion.div
						className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-yellow-500"
						ref={refe13}
						animate={isInView13 ? "visible" : "hidden"}
						variants={sectionVariants}
					>
						<h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 dark:text-white">
							<span className="text-yellow-500">Ki</span>
							<span className="text-gray-800 dark:text-white">ANA</span>{" "}
							Advantages
						</h1>
						<motion.ul
							className="list-disc space-y-3 text-gray-700 pl-6 dark:text-white"
							ref={refe14}
							animate={isInView14 ? "visible" : "hidden"}
							variants={textVariants}
						>
							<li>Combines the flexibility of SBC with FPGA configurability</li>
							<li>Industrial-grade, rugged platform for optimized BOM cost</li>
							<li>On-module power supplies for efficient power management</li>
							<li>Linux BSP and Root filesystem enable seamless integration</li>
							<li>Customized carrier boards for rapid prototyping</li>
						</motion.ul>
					</motion.div>
				</div>
				<motion.div
					className="w-full lg:w-[52%] flex flex-col justify-center"
					ref={refe10}
					animate={isInView10 ? "visible" : "hidden"}
					variants={sectionVariants}
				>
					<img
						src={KIANA1}
						alt="KiANA Board"
						className="rounded-lg shadow-lg object-contain w-full max-w-md lg:max-w-full hover:scale-105 transition-transform duration-300"
					/>

					<div className="relative w-full sm:w-[92%] lg:w-full p-4 overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-[#2d4170] mt-2 ">
						<div
							ref={containerRef3}
							className="flex w-max gap-6 animate-scroll hover:pause-animation "
						>
							{logos.map((logo, index) => (
								<img
									key={index}
									src={logo}
									className="h-20 md:h-40 object-contain rounded-lg bg-white p-6 shadow-md transform transition-transform duration-300"
									alt={`Logo ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Product2
