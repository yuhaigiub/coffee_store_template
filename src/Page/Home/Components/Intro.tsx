import React, { useState, useEffect } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const variants: Variants = {
	initial: {
		x: "-100%",
	},
	animate: {
		x: 0,
		transition: {
			duration: 0.7,
		},
	},
	exit: {
		x: "100%",
		transition: {
			duration: 0.7,
		},
	},
};

const Intro: React.FC = () => {
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);

	const introImages = [
		<motion.div
			key="intro1"
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="absolute w-full h-full top-0 bg-[url('/intro1.jpg')] bg-cover bg-top opacity-60 z-10"
		/>,
		<motion.div
			key="intro2"
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="absolute w-full h-full top-0 bg-[url('/intro2.jpg')] bg-cover bg-left-top opacity-40 z-10"
		/>,
		<motion.div
			key="intro3"
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="absolute w-full h-full top-0 bg-[url('/intro3.jpg')] bg-cover bg-top opacity-60 z-10"
		/>,
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((i) => (i + 1) % introImages.length);
		}, 1000 * 5); // 10 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="bg-[#232323] h-[80vh] lg:h-[85vh] text-white relative overflow-hidden">
			<div className="flex flex-col items-center pt-32 pb-8 relative z-20 px-8">
				<p className="text-center text-xl mb-4 text-orange-400 lg:text-3xl">Welcome</p>
				<h1 className="text-center text-3xl font-bold mb-4 lg:text-5xl">
					CREAMY HOT AND READY TO SERVE
				</h1>
				<p className="text-center lg:text-lg">
					A small river named Duden flows by their place and supplies it with the necessary
					regelialia
				</p>
			</div>
			<div className="flex justify-center gap-4 relative z-20">
				<motion.button
					className="px-2 py-2 border-2 lg:px-8 lg:py:4"
					style={{ color: "#000", backgroundColor: "#c49b63", borderColor: "#c49b63" }}
					whileHover={{
						scale: 1.1,
						backgroundColor: "#a46e22",
						borderColor: "#a46e22",
						color: "#fff",
						transition: {
							scale: { duration: 0.25 },
							color: { delay: 0.1, duration: 0.25 },
						},
					}}
					whileTap={{ scale: 0.9 }}>
					Order Now
				</motion.button>
				<motion.button
					className="px-2 py-2 border-2 border-[#c49b63] lg:px-8 lg:py-4"
					style={{ color: "#fff", backgroundColor: "#232323", borderColor: "#c49b63" }}
					whileHover={{
						scale: 1.1,
						backgroundColor: "#a46e22",
						borderColor: "#a46e22",
						color: "#000",
						transition: {
							scale: { duration: 0.25 },
							color: { delay: 0.1, duration: 0.25 },
						},
					}}
					whileTap={{ scale: 0.9 }}
					onClick={() => {
						navigate("/menu");
					}}>
					View Menu
				</motion.button>
			</div>
			<AnimatePresence mode="popLayout">{introImages[index]}</AnimatePresence>
		</div>
	);
};

export default Intro;
