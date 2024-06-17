// import React from "react"
import CV from "../../assets/document/cv_fullstack_dev_english.pdf"

export default function CTA() {
  return (
		<div className="cta">
			<a
				href={CV}
				download
				className="btn"
			>
				Download CV
			</a>
			<a
				href="#contact"
				className="btn btn-primary"
			>
				Let&apos;s Talk
			</a>
		</div>
	)
}
