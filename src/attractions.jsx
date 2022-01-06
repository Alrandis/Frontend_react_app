import React from 'react';

const allSightseens = [
	{
		title: 'Тропа предков',
		image: 'img/image-attract.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.'
	},
	{
		title: 'Озеро Беле',
		image: 'img/image-attract.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.'
	},
	{
		title: 'Сундуки',
		image: 'img/image-attract.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.'
	},

]

function Attractions() {
    return (
        <article id="title_list1" className="attractions">
        <div className="container">
            <h2 className="attractions__title">Достопримечательности</h2>
            <section className="item">
                <figure className="image">
                    <img className="image__attrac" src="img/image-attract.png" alt="image__attrac" />
                </figure>
                <div>
                    <header className="subtitle">
                        <h3>Тропа предков</h3>
                    </header>
                    <p className="text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationem
                        commodi
                        ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta
                        illum
                        eos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat aut
                        vero.
                    </p>
                </div>
            </section>
            <section className="item">
                <figure className="image">
                    <img className="image__attrac" src="img/image-attract.png" alt="image__attrac" />
                </figure>
                <div>
                    <header className="subtitle">
                        <h3>Приисковый</h3>
                    </header>
                    <p className="text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, pariatur facilis?
                        Aspernatur repellendus eos alias natus ab nisi quisquam, magnam qui reiciendis sit laboriosam?
                        Vero
                        quos, amet temporibus ipsa expedita sapiente, molestiae dolorem perferendis a tempora, pariatur
                        fuga. Voluptates, totam!</p>
                </div>
            </section>
            <section className="item">
                <figure className="image">
                    <img className="image__attrac" src="img/image-attract.png" alt="image__attrac" />
                </figure>
                <div>
                    <header className="subtitle">
                        <h3>Сундуки</h3>
                    </header>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam nobis modi quisquam
                        optio quo possimus amet itaque minus incidunt, omnis, ea non saepe deserunt. Atque autem, nam
                        iure
                        magnam vero tempore quos perspiciatis similique, doloremque dicta qui, rerum impedit?</p>
                </div>
            </section>
        </div>
    </article>
    )
} 

export default Attractions;