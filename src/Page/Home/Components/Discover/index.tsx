import React, { useState } from "react";
import MainDishes from "./Components/MainDishes";
import Drinks from "./Components/Drinks";
import Desserts from "./Components/Desserts";

import { motion } from "framer-motion";

const Discover = () => {
	const [index, setIndex] = useState(0);
	const menus = [<MainDishes />, <Drinks />, <Desserts />];
	const listItems = ["Main Dishes", "Drinks", "Desserts"];

	return (
		<div className="bg-black text-white py-16 px-8 md:py-36">
			<h2 className="text-2xl mb-4 text-center md:text-4xl">DISCOVER OUR PRODUCTS</h2>
			<p className="text-justify text-sm mb-8 text-slate-400 md:text-center md:w-1/3 md:m-auto md:mb-12">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quidem autem rerum
				architecto neque vero amet quasi repellat asperiores, nostrum repellendus pariatur et
				excepturi facilis.
			</p>
			<ul className="list-none flex flex-col gap-4 mb-16 md:flex-row md:justify-center md:gap-8">
				{listItems.map((text, i) => {
					return (
						<li key={text}>
							<MenuButton
								text={text}
								active={index === i}
								handleClick={() => {
									setIndex(i);
								}}
							/>
						</li>
					);
				})}
			</ul>

			<div>{menus[index]}</div>
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
		<button
			className="w-full text-left py-2 hover:text-slate-300 text-white"
			style={{
				color: active ? "#c49b63" : "",
			}}
			onClick={handleClick}>
			{text}
			{active === true && <motion.div layoutId="underline" className="h-1 w-full bg-[#c49b63]" />}
		</button>
	);
};
