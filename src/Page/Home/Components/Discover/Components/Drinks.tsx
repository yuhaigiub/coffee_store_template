import React from "react";
import Item from "./Item";
import StaggerWrap from "./StaggerWrap";

const Drinks = () => {
	return (
		<StaggerWrap id="Drinks">
			<Item
				name="Margarita"
				price={5.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={
					<img src="drink1.webp" className="aspect-video bg-yellow-300 lg:aspect-square lg:h-56" />
				}
			/>
			<Item
				name="Dry Martini"
				price={7.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={<img src="drink2.webp" className="aspect-video bg-red-300 lg:aspect-square lg:h-56" />}
			/>
			<Item
				name="Negroni"
				price={5.79}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={
					<img src="drink3.webp" className="aspect-video bg-blue-300 lg:aspect-square lg:h-56" />
				}
			/>
			<Item
				name="Whiskey Sour"
				price={4.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={
					<img src="drink4.webp" className="aspect-video bg-green-300 lg:aspect-square lg:h-56" />
				}
			/>
		</StaggerWrap>
	);
};

export default Drinks;
