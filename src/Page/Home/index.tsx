import React from "react";
import { Info, Booking } from "../../Common/_index";
import {
	Intro,
	Story,
	Features,
	Menu,
	Statistics,
	BestSeller,
	Discover,
	Testimony,
	Blog,
	Location,
} from "./Components/_index";

const Home = () => {
	return (
		<>
			<Intro />
			<div className="md:grid md:grid-cols-5 md:bg-black">
				<div className="md:col-span-3">
					<Info />
				</div>
				<div className="md:col-span-2 relative">
					<Booking style="yellow" />
				</div>
			</div>
			<Story />
			<Features />
			<Menu />
			<Statistics />
			<BestSeller />
			<Discover />
			<Testimony />
			<Blog />
			<Location />
			<Booking style="black" />
		</>
	);
};

export default Home;
