import React from 'react'
import './about.css'
import aboutMe from '../../assets/images/me-about.jpg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
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
							src={aboutMe}
							alt="About me"
						/>
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experince</h5>
							<small>1.5+ Years Working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</article>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
						accusamus ex culpa eaque ea corrupti, aliquid inventore fuga!
						Commodi cupiditate, vitae exercitationem doloremque sint odit?
						Aperiam ipsa necessitatibus dolorem quis!
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

export default About