import React from "react";
import { motion } from "framer-motion";
const Intro = () => {
	return (
		<div className="bg-[#232323] h-[80vh] lg:h-[85vh] px-8 text-white">
			<div className="flex flex-col items-center pt-48 pb-8">
				<h1 className="text-center text-3xl font-bold mb-4">BLOG</h1>
				<p className="text-center mb-16">
					A small river named Duden flows by their place and supplies it with the necessary
					regelialia
				</p>
				<motion.div
					className="text-xl flex flex-col items-center text-slate-400"
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
