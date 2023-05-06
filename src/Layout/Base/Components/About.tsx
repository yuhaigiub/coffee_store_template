import React from "react";
import { motion } from "framer-motion";
const About = () => {
	return (
		<div className="text-white py-8 px-8">
			<h2 className="text-2xl mb-4">ABOUT US</h2>
			<p className="text-justify text-sm text-slate-400">
				Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
				there live the blind texts.
			</p>

			<div className="w-full flex gap-4 mt-8 text-black font-bold">
				<motion.a
					whileHover={{
						filter: "grayscale(0.2)",
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					className="cursor-pointer h-16 aspect-square rounded-full bg-red-400 flex justify-center items-center">
					Ins
				</motion.a>
				<motion.a
					whileHover={{
						filter: "grayscale(0.2)",
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					className="cursor-pointer h-16 aspect-square rounded-full bg-blue-400 flex justify-center items-center">
					Fb
				</motion.a>
				<motion.a
					whileHover={{
						filter: "grayscale(0.2)",
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					className="cursor-pointer h-16 aspect-square rounded-full bg-cyan-400 flex justify-center items-center">
					Twt
				</motion.a>
			</div>
		</div>
	);
};

export default About;
