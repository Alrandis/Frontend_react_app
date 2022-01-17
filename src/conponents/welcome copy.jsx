import React from 'react';
import { useState, useEffect } from "react"

function Welcome() {
	const [isMenuVisible, setMenuVisible] = useState(false)
	const [isPageScrolledDown, setPageScrolledDown] = useState(false)

	const handlePageScroll = () => {
		if (window.scrollY > 100) {
			setPageScrolledDown(true)
		} else {
			setPageScrolledDown(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handlePageScroll)

		return () => window.removeEventListener('scroll', handlePageScroll)
	})
	function buttonMenuClick() {
		setMenuVisible(!isMenuVisible);
		if (!isMenuVisible) {
			document.body.classList.add('_lock')
			document.querySelector('.welcome__arrow')?.classList.add('_active')
		} else {
			document.body.classList.remove('_lock')
			document.querySelector('.welcome__arrow')?.classList.remove('_active')
		}

	}

	return (
		<article id="title_list0" className="welcome">
			<header className={`header${isPageScrolledDown ? ' _active' : ''}`}>
				<a className="header__logo"></a>
				<nav className="menu" >
                <ul className="menu__list">
                    <li><a data-goto="#title_list0" href="#" className="menu__link">Главная</a></li>
                    <li><a data-goto="#title_list1" href="#" className="menu__link">Достопримечательности</a></li>
                    <li><a data-goto="#title_list2" href="#" className="menu__link">Туры</a></li>
                    <li><a data-goto="#title_list3" href="#" className="menu__link">Контакты</a></li>
                </ul>
                </nav> 
				<button className={`header__button${isMenuVisible ? ' _active' : ''}`} type="button" onClick={buttonMenuClick}><span></span></button>
			</header>
            <div className="welcome__text">
            <h1 className="welcome__title">ХАКАСИЯ</h1>
            <h5 className="welcome__subtitle">Туристическое Агенство Республики Хакасия</h5>
            </div>
            <div className="welcome__arrow"></div>
		</article>
	)
}
export default Welcome;