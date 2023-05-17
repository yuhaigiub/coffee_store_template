import React from "react";
import Item from "./Item";
import StaggerWrap from "./StaggerWrap";

const MainDishes = () => {
	return (
		<StaggerWrap id="Main Dishes">
			<Item
				name="Fillet Mignon"
				price={12.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={<img src="maindish1.webp" className="h-20 bg-red-300 md:aspect-square md:h-56" />}
			/>
			<Item
				name="Porterhouse"
				price={20.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={<img src="maindish2.webp" className="h-20 bg-blue-300 md:aspect-square md:h-56" />}
			/>
			<Item
				name="Short ribs"
				price={8.79}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={<img src="maindish3.webp" className="h-20 bg-yellow-300 md:aspect-square md:h-56" />}
			/>
			<Item
				name="Double cheese burger"
				price={5.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={<img src="maindish4.webp" className="h-20 bg-green-300 md:aspect-square md:h-56" />}
			/>
		</StaggerWrap>
	);
};

export default MainDishes;
