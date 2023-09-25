import "./portfolio.css"
import IMG1 from "../../assets/images/ecommerce-kiosid.png"
// import IMG2 from "../../assets/images/portfolio2.jpg"
// import IMG3 from "../../assets/images/portfolio3.jpg"
// import IMG4 from "../../assets/images/portfolio4.jpg"
// import IMG5 from "../../assets/images/portfolio5.png"
// import IMG6 from "../../assets/images/portfolio6.jpg"

export default function Portfolio() {
	const data = [
		{
			id: 1,
			image: IMG1,
			title: "E-commerce",
			github: "https://github.com/regysaputra/ecommerce-kiosid",
			demo: "https://ecommerce-kiosid.vercel.app/",
		}
	]

	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div
				id="container"
				className="portfolio__container"
			>
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article
							key={id}
							className="portfolio__item"
						>
							<div className="portfolio__item-image">
								<img
									src={image}
									alt={title}
								/>
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={github}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
								<a
									href={demo}
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}
