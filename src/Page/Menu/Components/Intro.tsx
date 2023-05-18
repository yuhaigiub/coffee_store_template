import React from "react";
import { motion } from "framer-motion";
const Intro: React.FC = () => {
	return (
		<div className="bg-[#232323] h-[80vh] lg:h-[85vh] text-white relative overflow-hidden">
			<img
				src="menu_intro.webp"
				className="absolute w-full h-full z-10 object-cover object-right-top"
			/>
			<div className="absolute w-full h-full bg-black z-20 opacity-50" />
			<div className="flex flex-col items-center pt-48 pb-8 relative z-30">
				<h1 className="text-center text-3xl font-bold mb-4">OUR MENU</h1>
				<p className="text-center mb-16">
					A small river named Duden flows by their place and supplies it with the necessary
					regelialia
				</p>
				<motion.div
					className="text-xl flex flex-col items-center text-slate-300"
					animate={{ y: [0, 20, 0] }}
					transition={{ ease: "linear", duration: 5, repeat: Infinity }}>
					See more
					<div className="text-xl">v</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Intro;
