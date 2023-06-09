import React from "react";
import { motion } from "framer-motion";

const Story: React.FC = () => {
	return (
		<div className="lg:bg-[#232323] relative w-full">
			<div className="h-40 bg-cover lg:w-[45vw] lg:h-[55vh] opacity-80 relative">
				<img src="story.jpg" className="absolute w-full h-full" />
			</div>
			<motion.div
				initial={{
					opacity: 0,
					x: 50,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.03,
					type: "spring",
					stiffness: 300,
					damping: 24,
				}}
				className="bg-[#121212] text-white py-16 px-8 lg:w-[40vw] lg:absolute top-16 left-[38vw] lg:opacity-80">
				<h2 className="text-2xl mb-4 text-center lg:text-4xl">DISCOVER OUR STORY</h2>
				<p className="text-justify text-sm text-slate-400">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio facere aliquid a numquam
					perspiciatis totam voluptates, fugit id nulla quos sunt maiores tenetur necessitatibus
					nostrum iusto, recusandae in? Molestias, error! Tenetur, cupiditate in maiores, modi natus
					minima, voluptatem sit pariatur ipsum aliquam molestias. Laboriosam similique cupiditate
					esse ut dolores deleniti.
				</p>
			</motion.div>
		</div>
	);
};

export default Story;
