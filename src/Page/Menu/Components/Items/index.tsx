import React from "react";
import Starters from "./Components/Starters";
import MainDishes from "./Components/MainDishes";
import Desserts from "./Components/Desserts";
import Drinks from "./Components/Drinks";

const Items = () => {
	return (
		<div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 bg-[#232323] py-16 lg:py-36">
			<Starters />
			<MainDishes />
			<Desserts />
			<Drinks />
		</div>
	);
};

export default Items;
