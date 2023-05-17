import React from "react";
import { motion } from "framer-motion";

const StaggerWrap: React.FC<{ children?: React.ReactNode; id: string }> = ({ children, id }) => {
	return (
		<motion.div
			key={id}
			className="flex flex-col gap-8 lg:flex-row lg:justify-center"
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
