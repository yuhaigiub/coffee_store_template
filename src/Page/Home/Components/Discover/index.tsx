import React, { useState } from "react";
import MainDishes from "./Components/MainDishes";
import Drinks from "./Components/Drinks";
import Desserts from "./Components/Desserts";

import { motion } from "framer-motion";

const Discover = () => {
	const [index, setIndex] = useState(0);
	const menus = [<MainDishes />, <Drinks />, <Desserts />];

	return (
		<div className="bg-black text-white py-16 px-8">
			<h2 className="text-2xl mb-4 text-center">DISCOVER OUR BEST PRODUCTS</h2>
			<p className="text-justify text-sm mb-8 text-slate-400">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quidem autem rerum
				architecto neque vero amet quasi repellat asperiores, nostrum repellendus pariatur et
				excepturi facilis.
			</p>
			<ul className="list-none flex flex-col gap-4 mb-16">
				<li>
					<MenuButton
						text="Main Dishes"
						active={index === 0}
						handleClick={() => {
							setIndex(0);
						}}
					/>
				</li>
				<li>
					<MenuButton
						text="Drinks"
						active={index === 1}
						handleClick={() => {
							setIndex(1);
						}}
					/>
				</li>
				<li>
					<MenuButton
						text="Desserts"
						active={index === 2}
						handleClick={() => {
							setIndex(2);
						}}
					/>
				</li>
			</ul>

			<div className="flex flex-col gap-8">{menus[index]}</div>
		</div>
	);
};

export default Discover;

const MenuButton: React.FC<{ text: string; active: boolean; handleClick: () => void }> = ({
	text,
	active,
	handleClick,
}) => {
	return (
		<motion.button
			className="w-full border-b-2 text-left py-2"
			style={{
				color: active ? "#c49b63" : "#fff",
				borderColor: active ? "#c49b63" : "#232323",
			}}
			whileHover={{ color: "#b1b1b1" }}
			onClick={handleClick}>
			{text}
		</motion.button>
	);
};
