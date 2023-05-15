import React from "react";
import { Variants, motion } from "framer-motion";

const Features = () => {
	return (
		<div className="bg-[#c49b63] flex flex-col gap-16 py-16 px-8 md:flex-row md:py-36 md:px-48">
			<Feature
				title="EASY TO ORDER"
				description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
			/>
			<Feature
				title="Fastest Delivery"
				description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
			/>
			<Feature
				title="QUALITY COFFEE"
				description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
			/>
		</div>
	);
};

export default Features;

const Feature: React.FC<{ title: string; description: string }> = ({ title, description }) => {
	return (
		<motion.div
			className="flex flex-col gap-2 items-center"
			variants={variants}
			initial="offScreen"
			whileInView="onScreen"
			viewport={{ once: true, amount: "all" }}>
			<div className="w-16 aspect-square border-black border-2 bg-transparent"></div>
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="text-center text-sm">{description}</p>
		</motion.div>
	);
};

const variants: Variants = {
	offScreen: {
		opacity: 0,
		y: 50,
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
