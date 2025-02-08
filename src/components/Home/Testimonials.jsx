import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import GreenTwin from "../../assets/Testimonials/GreenTwin.png"

const Testimonials = () => {
	const testimonials = [
		{
			image: GreenTwin,
			name: "GreenTwin GmbH, Austria",
			feedback:
				"Logiicdev provided outstanding service in developing a seamless and efficient mobile app for our shared project. Their team was highly professional, responsive, and innovative. We highly recommend their expertise for any app development needs!",
		},
		{
			image: GreenTwin,
			name: "GreenTwin GmbH, Austria",
			feedback:
				"Logiicdev provided outstanding service in developing a seamless and efficient mobile app for our shared project. Their team was highly professional, responsive, and innovative. We highly recommend their expertise for any app development needs!",
		},
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	}

	return (
		<section className="bg-white dark:bg-slate-900 py-12">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
					What Our Clients Say
				</h2>
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center bg-white p-8 rounded-lg dark:bg-gray-800 dark:text-white"
						>
							<img
								src={testimonial.image}
								alt={testimonial.name}
								className="mb-6 w-auto h-24 mx-auto"
							/>
							<h3 className="text-2xl font-semibold mb-2">
								{testimonial.name}
							</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								{testimonial.feedback}
							</p>
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default Testimonials
