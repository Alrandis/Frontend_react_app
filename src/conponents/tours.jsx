import React from 'react';
import { useState } from "react"


const ToursBlock = [
	{
		class: 'tour',
		title: 'Название',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour',
		title: 'Название',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour--hidden',
		title: 'Название',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour--hidden',
		title: 'Название',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour--hidden',
		title: 'Название',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour--hidden',
		title: 'Название',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},

]

function Tour(props) {
	return (
		<section className={props.tour.class}>
			<h3 className="tour__title">{props.tour.title}</h3>
			<p className="tour__description">{props.tour.description}
			</p>
			<div className="tour__price-button">
				<p className="tour__price"> от <b>{props.tour.price}</b> р.</p>
				<button className="tour__button">Купить</button>
			</div>
		</section>
	)
}

function Tours() {
	let MoreTours;
	const [visible, setVisible] = useState(true)
	const [nameButtonMoreTours, setNameButtonMoreTours] = useState('Больше')
	const ClickButtonMoreTours = () => {

		if (visible) {
			MoreTours = document.getElementsByClassName('tour--hidden')
			let QuantityMoreTours = MoreTours.length;
			for (let s = 0; s < QuantityMoreTours; s++) {
				MoreTours[0].className = 'tour--hidden-visible';
				setVisible(false)
				setNameButtonMoreTours('Меньше')
			}
		} else {
			MoreTours = document.getElementsByClassName('tour--hidden-visible')
			let QuantityMoreTours = MoreTours.length;
			for (let s = 0; s < QuantityMoreTours; s++) {
				MoreTours[0].className = 'tour--hidden';
				setVisible(true)
				setNameButtonMoreTours('Больше')
			}
		}
	}
	return (
		<article id="title_list2" className="tours">
			<h2 className="tours__title">Туры</h2>
			<div className="tours_content">
				{
					ToursBlock.map((item, index) =>
						<Tour tour={item} key={`tours_${index}`} />
					)
				}
			</div>
			<button className="more-tour" type="button" onClick={ClickButtonMoreTours}>{nameButtonMoreTours} туров</button>
		</article>
	)
}

export default Tours;