import React from "react";
import Item from "./Item";
import StaggerWrap from "./StaggerWrap";

const MainDishes = () => {
	return (
		<StaggerWrap key="Main Dishes">
			<Item
				name="Fillet Mignon"
				price={12.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="red"
			/>
			<Item
				name="Porterhouse"
				price={20.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="blue"
			/>
			<Item
				name="Short ribs"
				price={8.79}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				color="yellow"
			/>
			<Item
				name="Double cheese burger"
				price={5.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
			/>
		</StaggerWrap>
	);
};

export default MainDishes;
