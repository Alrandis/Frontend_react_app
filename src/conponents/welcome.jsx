import React from 'react';

function Welcome() {
    document.querySelector('.menu')?.classList.toggle('_active')
	document.querySelector('.header__button')?.classList.toggle('_active')
	document.querySelector('.welcome__arrow')?.classList.toggle('_active')
	document.body.classList.toggle('_lock')
	
    return (
        <article id="title_list0" className="welcome">
        <header className="header">
            <a className="header__logo"></a>
            <nav className="menu">
                <ul className="menu__list">
                    <li><a data-goto="#title_list0" href="#" className="menu__link">Главная</a></li>
                    <li><a data-goto="#title_list1" href="#" className="menu__link">Достопримечательности</a></li>
                    <li><a data-goto="#title_list2" href="#" className="menu__link">Туры</a></li>
                    <li><a data-goto="#title_list3" href="#" className="menu__link">Контакты</a></li>
                </ul>
            </nav>
            <button className="header__button"><span></span></button>
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