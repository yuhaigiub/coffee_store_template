import React from "react";
import { Booking, Info } from "../../Common/_index";
import { Intro, Items } from "./Components/_index";

const Menu = () => {
	return (
		<>
			<Intro />
			<Info />
			<Booking style="yellow" />
			<Items />
		</>
	);
};

export default Menu;
