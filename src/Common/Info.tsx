import React from "react";
import { motion, Variants } from "framer-motion";

const Info = () => {
	return (
		<motion.div
			className="bg-black py-8 px-8 flex flex-col md:grid md:grid-cols-3 md:pl-48 md:py-16 justify-center gap-4"
			variants={parentVariants}
			initial="offScreen"
			whileInView="onScreen"
			viewport={{ once: true, amount: "all" }}>
			<Card big="0123 456 789" small="Mr. Huy" />
			<Card big="203 A street, Ba Dinh ward, District 1" small="Ho Chi Minh city" />
			<Card big="Open Monday - Friday" small="8:00am - 9:00pm" />
		</motion.div>
	);
};

export default Info;

const Card: React.FC<{ big: string; small: string }> = ({ big, small }) => {
	return (
		<motion.div className="flex gap-2" variants={variants}>
			<div className="text-yellow-400 text-4xl">*</div>
			<div>
				<p className="text-white mb-2">{big}</p>
				<p className="text-slate-400">{small}</p>
			</div>
		</motion.div>
	);
};

const parentVariants: Variants = {
	offScreen: {},
	onScreen: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const variants: Variants = {
	offScreen: {
		opacity: 0,
		y: 30,
	},
	onScreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: "srping",
			stiffness: 300,
			damping: 24,
		},
	},
};
