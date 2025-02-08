import React, {useState} from "react"
import {motion} from "framer-motion"

const Datenschutz = () => {
	const faqs = [
		{
			question: "Datenschutz",
			answer:
				"Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der EU-Datenschutz-Grundverordnung zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.",
		},
		{
			question: "Automatische Datenspeicherung",
			answer: `Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite. Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie die IP-Adresse Ihres Gerätes, die Adressen der besuchten Unterseiten, Details zu Ihrem Browser (z.B. Chrome, Firefox, Edge,…) und Datum sowie Uhrzeit. Wir nutzen diese Daten nicht und geben Sie in der Regel nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
      <br/><br/>Dauer der Datenspeicherung bzw., wenn das nicht möglich ist, soweit dies vom europäischen Gesetzgeber oder anderen Gesetzgebern in Gesetzen oder Verordnungen gewährt wird, denen der für die Verarbeitung Verantwortliche unterliegt.
      <br/><br/>Speicherung persönlicher Daten:
      <br/>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben. Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden. Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.`,
		},
		{
			question: "Ihre Rechte",
			answer:
				"Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde, deren Webseiten Sie unter https://www.dsb.gv.at/ finden.",
		},
		{
			question: "Cookies",
			answer: `Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.
      <br/><br/>Ein Cookie ist ein kurzes Datenpaket, welches zwischen Webbrowser und Webserver ausgetauscht wird, für diese aber völlig bedeutungslos ist und erst für die Webanwendung, z. B. einen Online-Shop, eine Bedeutung erhält, etwa den Inhalt eines virtuellen Warenkorbes.
      <br/><br/>Es gibt zwei Arten von Cookies: Erstanbieter-Cookies werden von unserer Website erstellt, Drittanbieter-Cookies werden von anderen Websites (z. B. Google Analytics) erstellt.
      <br/><br/>Man unterscheidet drei Kategorien von Cookies: unbedingt notwendige Cookies, um grundlegende Funktionen der Website sicherzustellen, funktionelle Cookies, um die Leistung der Webseite sicherzustellen, und zielorientierte Cookies, um das Benutzererlebnis zu verbessern.
      <br/><br/>Wir nutzen Cookies, um unsere Webseite nutzerfreundlicher zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
      <br/><br/>Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.
      <br/><br/>Sie können jederzeit Cookies, die sich bereits auf Ihrem Computer befinden, löschen oder Cookies deaktivieren. Die Vorgangsweise dazu ist nach Browser unterschiedlich, am besten Sie suchen die Anleitung in Google mit dem Suchbegriff „cookies löschen chrome“ oder „cookies deaktivieren chrome“ im Falle eines Chrome Browsers oder tauschen das Wort „chrome“ gegen den Namen Ihres Browsers, z. B. edge, firefox, safari aus.
      <br/><br/>Wenn Sie uns generell nicht gestatten, Cookies zu nutzen, d.h. diese per Browsereinstellung deaktivieren, können manche Funktionen und Seiten nicht wie erwartet funktionieren.`,
		},
		{
			question: "Newsletter",
			answer:
				"Sie haben die Möglichkeit, über unsere Website unseren Newsletter zu abonnieren. Hierfür benötigen wir Ihre E-Mail-Adresse und ihre Erklärung, dass Sie mit dem Bezug des Newsletters einverstanden sind. Das Abo des Newsletters können Sie jederzeit stornieren. Nutzen Sie für die Stornierung bitte das Kontaktformular bzw. führen Sie diesen Vorgang in Ihren Accounteinstellungen selbständig durch. Außerdem können Sie bei jedem Newsletter den Stornieren-Button in der Fußzeile benützen, um sich vom Newsletter abzumelden. Wir löschen anschließend umgehend Ihre Daten im Zusammenhang mit dem Newsletter-Versand.",
		},
	]

	const [openIndex, setOpenIndex] = useState(null)

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-16 bg-gradient-to-b from-[#f0f4f8] to-[#e4e9ed] dark:from-[#1a1a2e] dark:to-[#16213e]">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-10 text-gray-800 dark:text-[#d4f0f0]">
				Datenschutzerklärung
			</h2>
			<p className="text-center text-gray-600 dark:text-gray-400 mb-12">
				Falls Sie Fragen haben, können Sie sich jederzeit gerne direkt oder
				mittels Kontaktformular bei uns melden.
			</p>
			<div className="space-y-6">
				{faqs.map((faq, index) => (
					<motion.div
						key={index}
						initial={{opacity: 0, y: 10}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.3, delay: index * 0.1}}
						className="border border-gray-300 rounded-xl shadow-md overflow-hidden bg-white dark:bg-[#1e293b]"
					>
						<div
							className="flex justify-between items-center bg-gradient-to-r from-[#f9fafb] to-[#ffcc00] dark:from-[#334155] dark:to-[#4b5563] p-5 cursor-pointer"
							onClick={() => toggleFAQ(index)}
						>
							<h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
								{faq.question}
							</h3>
							<motion.span
								animate={{rotate: openIndex === index ? 180 : 0}}
								transition={{duration: 0.2}}
								className="text-gray-600 dark:text-gray-300"
							>
								▼
							</motion.span>
						</div>
						{openIndex === index && (
							<motion.div
								initial={{opacity: 0, height: 0}}
								animate={{opacity: 1, height: "auto"}}
								transition={{duration: 0.3}}
								className="p-5 text-gray-700 dark:text-gray-300"
							>
								<div dangerouslySetInnerHTML={{__html: faq.answer}} />
							</motion.div>
						)}
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Datenschutz
