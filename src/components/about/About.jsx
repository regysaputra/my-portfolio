// import React from 'react'
import './about.css'
// import aboutMe from '../../assets/images/me-about.jpg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div
				id="container"
				className="about__container"
			>
				<div className="about__me">
					<div className="about__me-image">
						<img
							src=""
							// alt="About me"
						/>
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experince</h5>
							<small>1.5 Years Working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>10+ Worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>15+ Completed</small>
						</article>
					</div>

					<p>
						Experience Front-End Developer (React.js) with 1.5 year of
						experience in building high-performance, responsive web
						applications. Skilled in using React hooks, Redux, and JavaScript to
						create dynamic user interfaces. Proven ability to work
						collaboratively with cross-functional teams and meet tight
						deadlines. Committed to staying current with the latest web
						development trends and technologies.
					</p>

					<a
						href="#contact"
						className="btn btn-primary"
					>
						Let&apos;s Talk
					</a>
				</div>
			</div>
		</section>
	)
}
