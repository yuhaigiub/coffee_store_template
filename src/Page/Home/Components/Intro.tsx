import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
	return (
		<div className="bg-[#232323] h-[80vh] px-8 text-white">
			<div className="flex flex-col items-center pt-32 pb-8">
				<p className="text-center text-xl mb-4 text-orange-400">Welcome</p>
				<h1 className="text-center text-3xl font-bold mb-4">CREAMY HOT AND READY TO SERVE</h1>
				<p className="text-center">
					A small river named Duden flows by their place and supplies it with the necessary
					regelialia
				</p>
			</div>
			<div className="flex justify-center gap-4">
				<motion.button
					className="px-2 py-2 border-2"
					style={{ color: "#000", backgroundColor: "#c49b63", borderColor: "#c49b63" }}
					whileHover={{
						scale: 1.1,
						borderRadius: 30,
						backgroundColor: "#a46e22",
						borderColor: "#a46e22",
						color: "#fff",
						transition: {
							scale: { duration: 0.25 },
							borderRadius: { duration: 0.3 },
							color: { delay: 0.1, duration: 0.25 },
						},
					}}
					whileTap={{ scale: 0.9 }}>
					Order Now
				</motion.button>
				<motion.button
					className="px-2 py-2 border-2 border-[#c49b63]"
					style={{ color: "#fff", backgroundColor: "#232323", borderColor: "#c49b63" }}
					whileHover={{
						scale: 1.1,
						borderRadius: 30,
						backgroundColor: "#a46e22",
						borderColor: "#a46e22",
						color: "#000",
						transition: {
							scale: { duration: 0.25 },
							borderRadius: { duration: 0.3 },
							color: { delay: 0.1, duration: 0.25 },
						},
					}}
					whileTap={{ scale: 0.9 }}>
					View Menu
				</motion.button>
			</div>
		</div>
	);
};

export default Intro;
