import React from "react";
import { motion } from "framer-motion";

const Image: React.FC<{ color?: string }> = ({ color }) => {
	if (color === "pink") {
		return <div className="h-20 bg-pink-300 md:aspect-square md:h-56"></div>;
	}
	if (color === "red") {
		return <div className="h-20 bg-red-300 md:aspect-square md:h-56"></div>;
	}
	if (color === "yellow") {
		return <div className="h-20 bg-yellow-300 md:aspect-square md:h-56"></div>;
	}
	if (color === "blue") {
		return <div className="h-20 bg-blue-300 md:aspect-square md:h-56"></div>;
	}
	return <div className="h-20 bg-white md:h-56 md:aspect-square"></div>;
};

const Item: React.FC<{ color?: string; name: string; price: number; description: string }> = ({
	color,
	name,
	price,
	description,
}) => {
	const img = <Image color={color} />;
	return (
		<motion.div
			key={name}
			className="flex flex-col gap-2 md:justify-start md:items-center md:w-56"
			variants={{
				initial: { opacity: 0, y: 50 },
				animate: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5 } },
			}}>
			{img}
			<h3 className="text-2xl text-center">{name}</h3>
			<p className="text-slate-400 text-center text-sm">{description}</p>
			<p className="text-[#c49b63] text-2xl text-center">$ {price}</p>
		</motion.div>
	);
};

export default Item;
