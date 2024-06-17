// import React from 'react'
import "./header.css"
import CTA from "./CTA"
// import myphoto from "../../assets/images/me.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
	return (
		<header>
			<div
				id="container"
				className="header__container"
			>
				<h5>Hello I&apos;m</h5>
				<h1>Regy Saputra</h1>
				<h5 className="text-light">Full-Stack Developer</h5>
				<CTA />
				<HeaderSocials />
				<div className="me__container">
					<div className="me">
						<img
							src=""
							// alt="me"
						/>
					</div>
				</div>

				<a
					href=""
					className="scroll__down"
				>
					Scroll Down
				</a>
			</div>
		</header>
	)
}

export default Header
