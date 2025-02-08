import React from "react"
import qualityBadge from "../../assets/quality_check.png"
import Logo from "../../assets/logo.png"
import {Link} from "react-router-dom"

const Impressum = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
			{/* Top Section */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-6 max-w-7xl mx-auto">
				{/* Left Column - Logo and Contact Details */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
					<img src={Logo} alt="Logiicdev Logo" className="w-24 h-auto" />
					<h2 className="text-2xl font-bold text-green-600">Logiicdev</h2>
					<div className="text-sm leading-relaxed">
						<p>
							Firma Logiicdev GmbH
							<br />
							Krottendorfer Str. 72/1, 8052 Graz, Austria
						</p>
						<p>
							Mobile:{" "}
							<a
								href="tel:+436764639222"
								className="text-blue-600 hover:underline"
							>
								+43 676 463 9222
							</a>
							<br />
							Email:{" "}
							<a
								href="mailto:contact@logiicdev.eu"
								className="text-blue-600 hover:underline"
							>
								contact@logiicdev.eu
							</a>
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className="hidden md:block h-24 w-[1px] bg-gray-400"></div>

				{/* Center Column - Quality Badge */}
				<div className="flex justify-center">
					<img
						src={qualityBadge}
						alt="Quality Badge"
						className="w-36 h-auto shadow-md rounded-lg"
					/>
				</div>

				{/* Divider */}
				<div className="hidden md:block h-24 w-[1px] bg-gray-400"></div>

				{/* Right Column - Company Information */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
					<p>
						<strong>VAT number:</strong> ATU80807067
					</p>
					<p>
						<strong>Commercial register number:</strong> FN 630212 h
					</p>
					<p>
						<em>Rechtsform:</em> Einzelunternehmer
					</p>
					<p>
						<em>Geschäftszweig:</em> IT Consultancy
					</p>
					<p>
						<em>Sitz in politischer Gemeinde Graz, Austria</em>
					</p>
					<Link
						to="/equityplan"
						onClick={() => window.scrollTo(0, 0)}
						className="text-blue-600 hover:underline font-semibold"
					>
						Gender Equality Policy
					</Link>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="bg-gray-200 dark:bg-gray-800 py-8 px-6">
				<div className="max-w-5xl mx-auto space-y-6 text-center">
					{/* Gewerbeordnung Section */}
					<div>
						<p>
							Berufsrecht Gewerbeordnung:{" "}
							<a
								href="https://www.ris.bka.gv.at"
								className="text-blue-600 hover:underline"
							>
								www.ris.bka.gv.at
							</a>
						</p>
					</div>

					{/* Register Court Section */}
					<div>
						<p className="font-semibold">Commercial register court:</p>
						<p>
							Landesgericht für ZRS Graz, Gerichtsabteilung 25 Graz, Austria
						</p>
						<p>Supervisory / trade authority: Magistrat ZRS Graz, Austria</p>
					</div>

					{/* EU Dispute Resolution Section */}
					<div>
						<p>
							Customers have the opportunity to submit complaints to the EU’s
							online dispute resolution platform:{" "}
							<a
								href="http://ec.europa.eu/odr"
								className="text-blue-600 hover:underline"
							>
								http://ec.europa.eu/odr
							</a>
							. You can also send any complaints to the email address given
							above.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Impressum
