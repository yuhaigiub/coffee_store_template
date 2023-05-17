import React from "react";
import { motion } from "framer-motion";
const About = () => {
	return (
		<div className="text-white py-8 px-8">
			<h2 className="text-2xl mb-4 lg:text-3xl">ABOUT US</h2>
			<p className="text-justify text-sm text-slate-400">
				Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
				there live the blind texts.
			</p>

			<div className="w-full flex gap-4 mt-8 text-black font-bold items-center">
				<motion.a
					whileHover={{
						filter: "grayscale(0.2)",
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					className="cursor-pointer h-12 aspect-square bg-[url('instagram.png')] bg-cover flex justify-center items-center"
				/>
				<motion.a
					whileHover={{
						filter: "grayscale(0.2)",
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					className="cursor-pointer h-16 aspect-square bg-[url('facebook.png')] bg-cover flex justify-center items-center"
				/>

				<motion.a
					whileHover={{
						filter: "grayscale(0.2)",
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					className="cursor-pointer h-14 aspect-square bg-[url('twitter.png')] bg-cover flex justify-center items-center"
				/>
			</div>
		</div>
	);
};

export default About;
