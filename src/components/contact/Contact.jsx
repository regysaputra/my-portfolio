import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com"

export default function Contact () {
  const form = React.useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
			"service_xq3axi7",
			"template_14re848",
			form.current,
			"QfqM7atcYiP3vXtMG"
		)
  }

  return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div
				id="container"
				className="contact__container"
			>
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>regysaputra27@gmail.com</h5>
						<a
							href="mailto:regysaputra27@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>regysaputra</h5>
						<a
							href="https://m.me/regy.saputra.5"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>Whatsapp</h4>
						<h5>+62895326130662</h5>
						<a
							href="https://api.whatsapp.com/send?phone=+895326130662"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Your Full Name"
						className="pl-3"
						required
					/>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your Email"
						className="pl-3"
						required
					/>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="7"
						placeholder="Your Message"
						className="pl-3 pt-3"
						required
					></textarea>
					<button
						type="submit"
						className="btn btn-primary"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}
