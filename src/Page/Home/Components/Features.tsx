import React from "react";
import { Variants, motion } from "framer-motion";
import OrderIcon from "../../../assets/OrderIcon";
import MedalIcon from "../../../assets/MedalIcon";
import TruckIcon from "../../../assets/TruckIcon";

const Features = () => {
	return (
		<div className="bg-[#c49b63] flex flex-col gap-16 py-16 px-8 lg:flex-row lg:py-36 lg:px-48">
			<Feature
				title="Easy to Order"
				description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
				icon={<OrderIcon />}
			/>
			<Feature
				title="Fastest Delivery"
				description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
				icon={<TruckIcon />}
			/>
			<Feature
				title="Quality Coffee"
				description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
				icon={<MedalIcon />}
			/>
		</div>
	);
};

export default Features;

const Feature: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({
	icon,
	title,
	description,
}) => {
	return (
		<motion.div
			className="flex flex-col gap-2 items-center"
			variants={variants}
			initial="offScreen"
			whileInView="onScreen"
			viewport={{ once: true, amount: "all" }}>
			<div className="w-16 aspect-square border-black border-2 bg-transparent lg:w-24 flex items-center justify-center">
				{icon}
			</div>
			<h3 className="text-xl font-semibold lg:text-3xl">{title}</h3>
			<p className="text-center text-sm lg:text-md">{description}</p>
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
			duration: 0.2,
		},
	},
};
