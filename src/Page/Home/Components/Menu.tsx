import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
	return (
		<div className="bg-[#232323] text-white py-16 px-8 md:grid md:grid-cols-2 md:gap-16 md:py-36 md:px-48">
			<div>
				<h2 className="text-2xl mb-4 text-center md:text-right">DISCOVER OUR MENU</h2>
				<p className="text-justify text-sm mb-4 text-slate-400 md:text-right">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio facere aliquid a numquam
					perspiciatis totam voluptates, fugit id nulla quos sunt maiores tenetur necessitatibus
					nostrum iusto, recusandae in? Molestias, error! Tenetur, cupiditate in maiores, modi natus
					minima, voluptatem sit pariatur ipsum aliquam molestias. Laboriosam similique cupiditate
					esse ut dolores deleniti.
				</p>
				<div className="md:flex md:justify-end">
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
				</div>
			</div>
			<div className="flex flex-col gap-8 md:w-2/3 md:grid md:grid-cols-2">
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
		return <div className="h-20 bg-pink-300 md:aspect-square md:w-full md:h-auto"></div>;
	}
	if (color === "red") {
		return <div className="h-20 bg-red-300 md:aspect-square md:w-full md:h-auto"></div>;
	}
	if (color === "yellow") {
		return <div className="h-20 bg-yellow-300 md:aspect-square md:w-full md:h-auto"></div>;
	}
	if (color === "blue") {
		return <div className="h-20 bg-blue-300 md:aspect-square md:w-full md:h-auto"></div>;
	}
	return <div className="h-20 bg-white md:aspect-square md:w-full md:h-auto"></div>;
};
