import React from "react";
import Item from "./Item";

const Drinks = () => {
	return (
		<>
			<Item
				name="Margarita"
				price={5.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="pink"
			/>
			<Item
				name="Dry Martini"
				price={7.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="yellow"
			/>
			<Item
				name="Negroni"
				price={5.79}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="blue"
			/>
			<Item
				name="Whiskey Sour"
				price={4.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="red"
			/>
		</>
	);
};

export default Drinks;
