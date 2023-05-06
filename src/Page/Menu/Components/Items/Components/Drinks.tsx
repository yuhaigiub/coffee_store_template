import React from "react";
import Template from "./Utils/Template";
import Item from "./Utils/Item";

const Drinks = () => {
	return (
		<Template title="DRINKS">
			<Item
				name="Cornish - Mackerel"
				price={20.05}
				description="A small river named Duden flows by their place and supplies"
			/>
			<Item
				name="Cornish - Mackerel"
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

export default Drinks;
