import React from "react"
import "./testimonials.css"
import AVTR1 from "../../assets/images/avatar1.jpg"
import AVTR2 from "../../assets/images/avatar2.jpg"
import AVTR3 from "../../assets/images/avatar3.jpg"
import AVTR4 from "../../assets/images/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Testimonials () {
  const data = [
		{
			id: "T001",
			avatar: AVTR1,
			name: "Tina Snow",
			review:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aneque alias modi, quam harum ipsa sunt dolores repudiandaequaerat quae ea explicabo laborum recusandae amet veniampariatur cumque ullam impedit!",
		},
		{
			id: "T002",
			avatar: AVTR2,
			name: "Shatta Wala",
			review:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aneque alias modi, quam harum ipsa sunt dolores repudiandaequaerat quae ea explicabo laborum recusandae amet veniampariatur cumque ullam impedit!",
		},
		{
			id: "T003",
			avatar: AVTR3,
			name: "Kamme Despita",
			review:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aneque alias modi, quam harum ipsa sunt dolores repudiandaequaerat quae ea explicabo laborum recusandae amet veniampariatur cumque ullam impedit!",
		},
		{
			id: "T004",
			avatar: AVTR4,
			name: "Egi Putra",
			review:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aneque alias modi, quam harum ipsa sunt dolores repudiandaequaerat quae ea explicabo laborum recusandae amet veniampariatur cumque ullam impedit!",
		},
	]

  return (
		<section id="testimonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				id="container"
				className="testimonials__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ id, avatar, name, review }) => {
					return (
						<SwiperSlide
							key={id}
							className="testimonial"
						>
							<div className="client__avatar">
								<img
									src={avatar}
									alt="Avatar"
								/>
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}
