import React from "react";
import { Variants, motion } from "framer-motion";

const Item: React.FC<{ name: string; price: number; description: string }> = ({
	name,
	price,
	description,
}) => {
	return (
		<motion.div className="flex items-center gap-4 w-full" variants={variants}>
			<div className="bg-slate-300 h-10 aspect-square rounded-full"></div>
			<div>
				<div className="w-full flex justify-between">
					<h3>{name}</h3>
					<div className="text-[#c49b63]">$ {price}</div>
				</div>
				<p className="text-sm text-justify text-slate-400">{description}</p>
			</div>
		</motion.div>
	);
};

export default Item;

const variants: Variants = {
	offScreen: {
		opacity: 0,
		y: 20,
	},
	onScreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 24,
		},
	},
};
