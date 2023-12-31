// import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiDribbble } from "react-icons/fi"

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://linkedin.com/in/regy-saputra-94a2a51a3"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/regysaputra"
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub />
			</a>
			<a
				href="https://dribbble.com/regysaputra"
				target="_blank"
				rel="noreferrer"
			>
				<FiDribbble />
			</a>
		</div>
	)
}

export default HeaderSocials
