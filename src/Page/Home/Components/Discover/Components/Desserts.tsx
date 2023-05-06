import React from "react";
import Item from "./Item";

const Desserts = () => {
	return (
		<>
			<Item
				name="Pasteis de nata"
				price={12.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
			/>
			<Item
				name="Creme Brulee"
				price={7.79}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="yellow"
			/>
			<Item
				name="Pakhlava"
				price={6.95}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="red"
			/>
			<Item
				name="Tiramisu"
				price={10.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="blue"
			/>
		</>
	);
};

export default Desserts;
