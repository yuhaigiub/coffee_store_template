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
				color="pink"
				img={<img src="drink1.webp" className="h-20 bg-yellow-300 md:aspect-square md:h-56" />}
			/>
			<Item
				name="Dry Martini"
				price={7.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="yellow"
				img={<img src="drink2.webp" className="h-20 bg-yellow-300 md:aspect-square md:h-56" />}
			/>
			<Item
				name="Negroni"
				price={5.79}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="blue"
				img={<img src="drink3.webp" className="h-20 bg-yellow-300 md:aspect-square md:h-56" />}
			/>
			<Item
				name="Whiskey Sour"
				price={4.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="red"
				img={<img src="drink4.webp" className="h-20 bg-yellow-300 md:aspect-square md:h-56" />}
			/>
		</StaggerWrap>
	);
};

export default Drinks;
