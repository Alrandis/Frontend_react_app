import React from 'react';

const AttractionBlock = [
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

function Attraction(props) {
	return (
		<section className="item">
			<figure className="image">
				<img className="image__attrac" src={props.attraction.image} alt="image__attrac" />
			</figure>
			<div>
				<header className="subtitle">
					<h3>{props.attraction.title}</h3>
				</header>
				<p className="text"> {props.attraction.description}</p>
			</div>
		</section>
	)

}

function Attractions() {
    return (
        <article id="title_list1" className="attractions">
			<div className="container">
				<h2 className="attractions__title">Достопримечательности</h2>
				{
					AttractionBlock.map((item, index) =>
						<Attraction attraction={item} key={`Attractions_${index}`} />
					)
				}
			</div>
		</article>
    )
} 

export default Attractions;