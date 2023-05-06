import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
	return (
		<div className="bg-[#232323] text-white py-16 px-8">
			<h2 className="text-2xl mb-4 text-center">DISCOVER OUR MENU</h2>
			<p className="text-justify text-sm mb-4 text-slate-400">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio facere aliquid a numquam
				perspiciatis totam voluptates, fugit id nulla quos sunt maiores tenetur necessitatibus
				nostrum iusto, recusandae in? Molestias, error! Tenetur, cupiditate in maiores, modi natus
				minima, voluptatem sit pariatur ipsum aliquam molestias. Laboriosam similique cupiditate
				esse ut dolores deleniti.
			</p>
			<motion.button
				className="text-[#c49b63] border-[#c49b63] border-2 px-4 py-2 mb-8"
				whileHover={{
					color: "#a46e22",
					borderColor: "#a46e22",
					scale: 1.1,
				}}
				whileTap={{ scale: 0.9 }}>
				View full menu
			</motion.button>
			<div className="flex flex-col gap-8">
				<Item color="red" />
				<Item color="blue" />
				<Item color="yellow" />
				<Item color="pink" />
			</div>
		</div>
	);
};

export default Menu;

const Item: React.FC<{ color?: string }> = ({ color }) => {
	if (color === "pink") {
		return <div className="h-20 bg-pink-300"></div>;
	}
	if (color === "red") {
		return <div className="h-20 bg-red-300"></div>;
	}
	if (color === "yellow") {
		return <div className="h-20 bg-yellow-300"></div>;
	}
	if (color === "blue") {
		return <div className="h-20 bg-blue-300"></div>;
	}
	return <div className="h-20 bg-white"></div>;
};