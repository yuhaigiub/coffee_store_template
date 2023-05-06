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
			<Info />
			<Booking style="yellow" />
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
