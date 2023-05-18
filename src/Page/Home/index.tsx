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

const Home: React.FC = () => {
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
			<Story />
			<Features />
			<Menu />
			<Statistics />
			<BestSeller />
			<Discover />
			<Testimony />
			<Blog />
			<div className="lg:grid lg:grid-cols-2 lg:bg-[#232323]">
				<Location />
				<Booking style="black" />
			</div>
		</>
	);
};

export default Home;
