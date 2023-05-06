import React from "react";

const BestSeller = () => {
	return (
		<div className="bg-[#232323] text-white py-16 px-8">
			<h2 className="text-2xl mb-4 text-center">DISCOVER OUR BEST COFFEE SELLER</h2>
			<p className="text-justify text-sm mb-8 text-slate-400">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio facere aliquid a numquam
				perspiciatis totam voluptates, fugit id nulla quos sunt maiores tenetur necessitatibus
				nostrum iusto, recusandae in? Molestias, error! Tenetur, cupiditate in maiores, modi natus
				minima, voluptatem sit pariatur ipsum aliquam molestias. Laboriosam similique cupiditate
				esse ut dolores deleniti.
			</p>

			<div className="flex flex-col gap-8">
				<Item
					color="red"
					name="Capuccino"
					price={5.99}
					description="A small river named Duden flows by their place and supplies"
				/>
				<Item
					color="blue"
					name="Espresso"
					price={4.99}
					description="A small river named Duden flows by their place and supplies"
				/>
				<Item
					color="yellow"
					name="Black Coffee"
					price={1.99}
					description="A small river named Duden flows by their place and supplies"
				/>
				<Item
					color="pink"
					name="Milk Coffee"
					price={2.79}
					description="A small river named Duden flows by their place and supplies"
				/>
			</div>
		</div>
	);
};

export default BestSeller;

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
