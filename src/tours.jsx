import React from 'react';

function Tours() {
    return (
        <article id="title_list2" className="tours">
        <h2 className="tours__title">Туры</h2>
        <div className="tours_content">
            <section className="tour">
                <h3 className="tour__title">Название</h3>
                <p className="tour__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                    perspiciatis.
                </p>
                <div className="tour__price-button">
                    <p className="tour__price"> от <b>10 000</b> р.</p>
                    <button className="tour__button">Купить</button>
                </div>
            </section>
            <section className="tour">
                <h3 className="tour__title">Название</h3>
                <p className="tour__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                    perspiciatis.
                </p>
                <div className="tour__price-button">
                    <p className="tour__price"> от <b>10 000</b> р.</p>
                    <button className="tour__button">Купить</button>
                </div>
            </section>
            <section className="tour tour--hidden">
                <h3 className="tour__title">Название</h3>
                <p className="tour__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                    perspiciatis.
                </p>
                <div className="tour__price-button">
                    <p className="tour__price"> от <b>10 000</b> р.</p>
                    <button className="tour__button">Купить</button>
                </div>
            </section>
            <section className="tour tour--hidden">
                <h3 className="tour__title">Название</h3>
                <p className="tour__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                    perspiciatis.
                </p>
                <div className="tour__price-button">
                    <p className="tour__price"> от <b>10 000</b> р.</p>
                    <button className="tour__button">Купить</button>
                </div>
            </section>
            <section className="tour tour--hidden">
                <h3 className="tour__title">Название</h3>
                <p className="tour__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                    perspiciatis.
                </p>
                <div className="tour__price-button">
                    <p className="tour__price"> от <b>10 000</b> р.</p>
                    <button className="tour__button">Купить</button>
                </div>
            </section>
            <section className="tour tour--hidden">
                <h3 className="tour__title">Название</h3>
                <p className="tour__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                    perspiciatis.
                </p>
                <div className="tour__price-button">
                    <p className="tour__price"> от <b>10 000</b> р.</p>
                    <button className="tour__button">Купить</button>
                </div>
            </section>
        </div>
        <button className="more-tour">Больше туров</button>
    </article>
    )
} 

export default Tours;