import React, { useEffect, useState } from "react";
import { Variants, motion, useMotionValue, useTransform, animate } from "framer-motion";
const Statistics = () => {
	return (
		<div className="bg-[url('statistics.webp')] bg-cover flex flex-col gap-16 py-16 px-8 md:flex-row md:gap-24 md:justify-center md:py-36 md:px-48 relative">
			<div className="absolute w-full h-full bg-black top-0 opacity-70" />
			<Feature number={10} description="Coffee branches" />
			<Feature number={5} description="Number of awards" />
			<Feature number={10000} description="Happy customer" />
			<Feature number={250} description="Staff" />
		</div>
	);
};

export default Statistics;

const Feature: React.FC<{ number: number; description: string }> = ({ number, description }) => {
	const [inView, setInView] = useState(false);
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);

	useEffect(() => {
		if (inView) {
			const animation = animate(count, number, {
				duration: number > 1000 ? 2 : 1,
				ease: "easeOut",
			});
			return animation.stop;
		}
	}, [inView]);

	return (
		<motion.div
			className="flex flex-col items-center md:gap-2 relative z-20"
			variants={variants}
			initial="offScreen"
			whileInView="onScreen"
			viewport={{ once: true, amount: "all" }}
			onViewportEnter={() => {
				setInView(true);
			}}>
			<div className="w-16 aspect-square border-[#c49b63] border-2 bg-transparent mb-2 md:w-24"></div>
			<motion.h3 className="text-3xl font-semibold text-[#c49b63] md:text-2xl">{rounded}</motion.h3>
			<p className="text-center text-white md:text-md">{description}</p>
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
