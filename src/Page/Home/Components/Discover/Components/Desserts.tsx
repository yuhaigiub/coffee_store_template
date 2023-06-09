import React from "react";
import Item from "./Item";
import StaggerWrap from "./StaggerWrap";

const Desserts = () => {
	return (
		<StaggerWrap id="Desserts">
			<Item
				name="Pasteis de nata"
				price={12.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={
					<img src="dessert1.webp" className="aspect-video bg-pink-300 lg:aspect-square lg:h-56" />
				}
			/>
			<Item
				name="Creme Brulee"
				price={7.79}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={
					<img
						src="dessert2.webp"
						className="aspect-video bg-purple-300 lg:aspect-square lg:h-56"
					/>
				}
			/>
			<Item
				name="Pakhlava"
				price={6.95}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={
					<img src="dessert3.webp" className="aspect-video bg-red-300 lg:aspect-square lg:h-56" />
				}
			/>
			<Item
				name="Tiramisu"
				price={10.99}
				description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
				img={
					<img src="dessert4.webp" className="aspect-video bg-green-300 lg:aspect-square lg:h-56" />
				}
			/>
		</StaggerWrap>
	);
};

export default Desserts;
