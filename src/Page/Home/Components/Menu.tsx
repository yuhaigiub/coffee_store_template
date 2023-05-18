import React from "react";
import { Variants, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-[#232323] text-white py-16 px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:py-36 lg:px-48 overflow-hidden">
			<div>
				<h2 className="text-2xl mb-4 text-center lg:text-right lg:text-4xl">DISCOVER OUR MENU</h2>
				<p className="text-justify text-sm mb-4 text-slate-400 lg:text-right">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio facere aliquid a numquam
					perspiciatis totam voluptates, fugit id nulla quos sunt maiores tenetur necessitatibus
					nostrum iusto, recusandae in? Molestias, error! Tenetur, cupiditate in maiores, modi natus
					minima, voluptatem sit pariatur ipsum aliquam molestias. Laboriosam similique cupiditate
					esse ut dolores deleniti.
				</p>
				<div className="lg:flex lg:justify-end">
					<motion.button
						className="text-[#c49b63] border-[#c49b63] border-2 px-4 py-2 mb-8"
						whileHover={{
							color: "#a46e22",
							borderColor: "#a46e22",
							scale: 1.1,
						}}
						whileTap={{ scale: 0.9 }}
						onClick={() => {
							navigate("/menu");
						}}>
						View full menu
					</motion.button>
				</div>
			</div>
			<motion.div className="flex flex-col gap-8 lg:w-2/3 lg:grid lg:grid-cols-2">
				<Item color="red">
					<div className="absolute w-full h-full bg-black z-20 opacity-10" />
					<img src="menu1.webp" className="absolute w-full h-full" />
				</Item>
				<Item color="blue">
					<div className="absolute w-full h-full bg-black z-20 opacity-10" />
					<img src="menu2.webp" className="absolute w-full h-full" />
				</Item>
				<Item color="yellow">
					<div className="absolute w-full h-full bg-black z-20 opacity-10" />
					<img src="menu3.webp" className="absolute w-full h-full" />
				</Item>
				<Item color="pink">
					<div className="absolute w-full h-full bg-black z-20 opacity-20" />
					<img src="menu4.webp" className="absolute w-full h-full" />
				</Item>
			</motion.div>
		</div>
	);
};

export default Menu;

const Item: React.FC<{ color?: string; children?: React.ReactNode }> = ({ color, children }) => {
	if (color === "pink") {
		return (
			<motion.div
				variants={childVariants}
				initial="offScreen"
				whileInView="onScreen"
				className="bg-pink-300 aspect-square w-full relative">
				{children}
			</motion.div>
		);
	}
	if (color === "red") {
		return (
			<motion.div
				variants={childVariants}
				initial="offScreen"
				whileInView="onScreen"
				className="bg-red-300 aspect-square w-full relative">
				{children}
			</motion.div>
		);
	}
	if (color === "yellow") {
		return (
			<motion.div
				variants={childVariants}
				initial="offScreen"
				whileInView="onScreen"
				className="bg-yellow-300 aspect-square w-full relative">
				{children}
			</motion.div>
		);
	}
	if (color === "blue") {
		return (
			<motion.div
				variants={childVariants}
				initial="offScreen"
				whileInView="onScreen"
				className="bg-blue-300 aspect-square w-full relative">
				{children}
			</motion.div>
		);
	}
	return (
		<motion.div
			variants={childVariants}
			initial="offScreen"
			whileInView="onScreen"
			className="h-36 bg-white aspect-square w-full relative">
			{children}
		</motion.div>
	);
};

const childVariants: Variants = {
	offScreen: {
		x: -50,
		opacity: 0,
	},
	onScreen: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.05,
			type: "spring",
			stiffness: 300,
			damping: 24,
		},
	},
};
