import React from "react"

// Logos 1 import
import Intel from "../assets/CarouselLogos/Trusted By/intel.webp"
import Dialog from "../assets/CarouselLogos/Trusted By/dialog.webp"
import AMS from "../assets/CarouselLogos/Trusted By/ams.webp"
import Infineon from "../assets/CarouselLogos/Trusted By/infineon.webp"
import NXP from "../assets/CarouselLogos/Trusted By/nxp.webp"

// Logos 2 import
import Anease from "../assets/CarouselLogos/Our Partners/anease.webp"
import PHO_AT from "../assets/CarouselLogos/Our Partners/pho_AT.webp"
import Photonic_Hub from "../assets/CarouselLogos/Our Partners/photonic_hub.webp"
import Photonic from "../assets/CarouselLogos/Our Partners/photonic.webp"
import SALPS from "../assets/CarouselLogos/Our Partners/SALPS.webp"
import Seperate_Esabic from "../assets/CarouselLogos/Our Partners/seperate_esabic.webp"
import SPG from "../assets/CarouselLogos/Our Partners/SPG.webp"
import EPOSS from "../assets/CarouselLogos/Our Partners/EpoSS.jpeg"
import CEA from "../assets/CarouselLogos/Our Partners/CEAlist.png"

// Logos 3 import
import FFG_LOGO from "../assets/CarouselLogos/Supported/ffg_logo.webp"
import SFG from "../assets/CarouselLogos/Supported/SFG.webp"
import WKO from "../assets/CarouselLogos/Supported/wko.webp"
// import AWS from "../assets/CarouselLogos/Supported/AWS.jpeg"
import AWS from "../assets/CarouselLogos/Supported/aws.jpg"

const logos1 = [
	{src: Intel, alt: "Intel"},
	{src: Dialog, alt: "Dialog Semiconductor"},
	{src: AMS, alt: "AMS Osram"},
	{src: Infineon, alt: "Infineon"},
	{src: NXP, alt: "NXP"},
]

const logos2 = [
	{src: Anease, alt: "Anease"},
	{src: PHO_AT, alt: "PHO_AT"},
	{src: Photonic_Hub, alt: "Photonic Hub"},
	{src: Photonic, alt: "Photonic"},
	{src: SALPS, alt: "SALPS"},
	{src: Seperate_Esabic, alt: "Seperate Esabic"},
	{src: SPG, alt: "SPG"},
	{src: EPOSS, alt: "EPOSS"},
	{src: CEA, alt: "CEAlist"},
]

const logos3 = [
	{src: FFG_LOGO, alt: "FFG Logo"},
	{src: SFG, alt: "SFG"},
	{src: WKO, alt: "WKO"},
	{src: AWS, alt: "AWS"},
]

const LogoCarousel = () => {
	return (
		<div className="bg-[#fff] dark:bg-[#111827] py-12">
			{[
				{title: "Trusted By Customers Worldwide", logos: logos1},
				{title: "Supported By", logos: logos3},
				{title: "Our Partners", logos: logos2},
			].map((section, sectionIndex) => (
				<div key={sectionIndex} className="py-8">
					<h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
						{section.title}
					</h2>
					<div className="flex justify-center">
						<div className="flex space-x-6 flex-wrap justify-center">
							{section.logos.map((logo, index) => (
								<img
									key={index}
									src={logo.src}
									alt={logo.alt}
									className="w-24 sm:w-32 h-auto object-contain"
								/>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default LogoCarousel
