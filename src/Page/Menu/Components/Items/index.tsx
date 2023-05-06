import React from "react";
import Starters from "./Components/Starters";
import MainDishes from "./Components/MainDishes";
import Desserts from "./Components/Desserts";
import Drinks from "./Components/Drinks";

const Items = () => {
	return (
		<div className="flex flex-col gap-16 bg-[#232323] py-16">
			<Starters />
			<MainDishes />
			<Desserts />
			<Drinks />
		</div>
	);
};

export default Items;
