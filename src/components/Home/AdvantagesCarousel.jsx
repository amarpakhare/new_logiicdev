import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const AdvantagesCarousel = () => {
	const data = [
		{
			title: "Tailored Solutions",
			description:
				"We provide customized strategies that align with your unique needs and goals.",
		},
		{
			title: "Expertise You Can Trust",
			description:
				"Our team of seasoned professionals brings extensive industry knowledge and experience.",
		},
		{
			title: "Innovative Technology",
			description:
				"Leverage cutting-edge tools and techniques to stay ahead of the competition.",
		},
		{
			title: "Enhanced Efficiency",
			description:
				"Streamline your processes and maximize productivity with our proven methodologies.",
		},
		{
			title: "Collaborative Approach",
			description:
				"We work closely with you to ensure your vision is realized every step of the way.",
		},
		{
			title: "Comprehensive Support",
			description:
				"From initial consultation to final implementation, we’re with you at every stage.",
		},
		{
			title: "Sustainable Practices",
			description:
				"We prioritize eco-friendly solutions that contribute to a better future for all.",
		},
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
	}

	return (
		<div className="flex flex-col items-center justify-center bg-[#fff] dark:bg-[#111827] px-4 py-8">
			<div className="w-full max-w-3xl">
				{/* Heading */}
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
					Unlock Your Potential: Discover the Advantages We Offer!
				</h2>

				{/* Carousel */}
				<Slider {...settings}>
					{data.map((item, index) => (
						<div
							key={index}
							className="bg-[#ffcc00] dark:bg-[#2B3945] p-6 md:p-8 rounded-lg flex flex-col items-center justify-center text-center mx-auto"
						>
							{/* Title */}
							<h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-[#FBBF24] mb-2 md:mb-4">
								{item.title}
							</h3>

							{/* Description */}
							<p className="text-gray-800 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
								{item.description}
							</p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default AdvantagesCarousel
