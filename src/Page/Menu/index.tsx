import React from "react";
import { Booking, Info } from "../../Common/_index";
import { Intro, Items } from "./Components/_index";

const Menu = () => {
	return (
		<>
			<Intro />
			<div className="lg:grid lg:grid-cols-5 lg:bg-black">
				<div className="lg:col-span-3">
					<Info />
				</div>
				<div className="lg:col-span-2 relative">
					<Booking style="yellow" />
				</div>
			</div>
			<Items />
		</>
	);
};

export default Menu;
