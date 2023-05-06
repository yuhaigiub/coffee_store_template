import React from "react";

const Image: React.FC<{ color?: string }> = ({ color }) => {
	if (color === "pink") {
		return <div className="h-20 bg-pink-300"></div>;
	}
	if (color === "red") {
		return <div className="h-20 bg-red-300"></div>;
	}
	if (color === "yellow") {
		return <div className="h-20 bg-yellow-300"></div>;
	}
	if (color === "blue") {
		return <div className="h-20 bg-blue-300"></div>;
	}
	return <div className="h-20 bg-white"></div>;
};

const Item: React.FC<{ color?: string; name: string; price: number; description: string }> = ({
	color,
	name,
	price,
	description,
}) => {
	const img = <Image color={color} />;
	return (
		<div className="flex flex-col gap-2">
			{img}
			<h3 className="text-2xl text-center">{name}</h3>
			<p className="text-slate-400 text-center text-sm">{description}</p>
			<p className="text-[#c49b63] text-2xl text-center">$ {price}</p>
		</div>
	);
};

export default Item;
