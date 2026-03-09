import React from "react";
import Card from "./Card";
import Footer from "./Footer";



//create your first component
const Home = () => {

	const cards = [
		{image: "https://picsum.photos/id/108/500/300", title:"Carta 1", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."},
		{image: "https://picsum.photos/id/66/500/300", title:"Carta 2", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."},
		{image: "https://picsum.photos/id/14/500/300", title:"Carta 3", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."},
		{image: "https://picsum.photos/id/28/500/300", title:"Carta 3", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."},
	];
	return (
		<div className="container">
			<div className="row">	
				{cards.map((card,index) => (
					<Card
					key={index}
					image={card.image}
					title={card.title}
					description={card.description}
					/>
				))}
			</div>

			<Footer />

			
		</div>
	);
};

export default Home;