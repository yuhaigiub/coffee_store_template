import React from "react";
import { motion } from "framer-motion";

const StaggerWrap: React.FC<{ children?: React.ReactNode; key: string }> = ({ children, key }) => {
	return (
		<motion.div
			key={key}
			className="flex flex-col gap-8 md:flex-row md:justify-center"
			variants={{
				animate: {
					transition: {
						staggerChildren: 0.05,
					},
				},
			}}
			initial="initial"
			animate="animate">
			{children}
		</motion.div>
	);
};

export default StaggerWrap;
