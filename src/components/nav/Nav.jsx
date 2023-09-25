import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
// import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';

export default function Nav() {
  const [activeNav, setActiveNav] = React.useState('#');

  const onNavLinkClick = (nav) => {
    setActiveNav(nav);
  }

  return (
		<nav>
			<a
				href="#"
				onClick={() => onNavLinkClick("#")}
				className={activeNav === "#" ? "active" : ""}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => onNavLinkClick("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				onClick={() => onNavLinkClick("#experience")}
				className={activeNav === "#experience" ? "active" : ""}
			>
				<BiBook />
			</a>
			{/* <a
				href="#services"
				onClick={() => onNavLinkClick("#services")}
				className={activeNav === "#services" ? "active" : ""}
			>
				<RiServiceLine />
			</a> */}
			<a
				href="#contact"
				onClick={() => onNavLinkClick("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	)
}
