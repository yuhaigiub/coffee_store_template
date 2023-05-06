import React from "react";
import Template from "./Utils/Template";
import Item from "./Utils/Item";

const MainDishes = () => {
	return (
		<Template title="MAIN DISHES">
			<Item
				name="Sea Trout"
				price={20.05}
				description="A small river named Duden flows by their place and supplies"
			/>
			<Item
				name="Filet Mignon"
				price={20.05}
				description="A small river named Duden flows by their place and supplies"
			/>
			<Item
				name="Cornish - Mackerel"
				price={20.05}
				description="A small river named Duden flows by their place and supplies"
			/>
		</Template>
	);
};

export default MainDishes;
