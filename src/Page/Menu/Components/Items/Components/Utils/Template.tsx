import React from "react";
import { Variants, motion } from "framer-motion";

const Template: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
	return (
		<motion.div
			className="bg-[#232323] text-white px-8 lg:self-center lg:flex lg:flex-col lg:items-center"
			variants={variants}
			initial="offScreen"
			whileInView="onScreen"
			viewport={{ once: true }}>
			<h2 className="text-2xl mb-4 lg:mb-8 lg:text-4xl">{title}</h2>
			<motion.div className="flex flex-col gap-4 lg:gap-6" variants={variants}>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default Template;

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
			staggerChildren: 0.05,
		},
	},
};
