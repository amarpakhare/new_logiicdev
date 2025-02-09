import React from "react"
import HeroSection from "../components/Home/HeroSection"
import WhatWeDo from "../components/Home/WhatWeDo"
import ProjectPlanning from "../components/Home/ProjectPlanning"
import Advantages from "../components/Home/Advantages"
import ProjectSection from "../components/Home/ProjectSection"
import StatsSection from "../components/Home/StatsSection"
import CallToAction from "../components/CallToAction"
import LogoCarousel from "../components/LogoCarousel"
import AdvantagesCarousel from "../components/Home/AdvantagesCarousel"
import Testimonials from "../components/Home/Testimonials"

const Home = () => {
	return (
		<>
			<HeroSection />
			{/* <WhatWeDo /> */}
			<StatsSection />
			<ProjectPlanning />
			<AdvantagesCarousel />
			<Advantages />
			<ProjectSection />
			<Testimonials />
			<LogoCarousel />
			{/* <CallToAction /> */}
		</>
	)
}

export default Home
