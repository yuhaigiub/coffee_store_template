import React from "react";

const BestSeller = () => {
	return (
		<div className="bg-[#232323] text-white py-16 px-8 lg:py-36 lg:px-48">
			<h2 className="text-2xl mb-4 text-center lg:text-4xl">DISCOVER OUR BEST COFFEE SELLER</h2>
			<p className="text-justify text-sm mb-8 text-slate-400 lg:w-1/2 lg:text-center lg:m-auto lg:mb-12">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio facere aliquid a numquam
				perspiciatis totam voluptates, fugit id nulla quos sunt maiores tenetur necessitatibus
				nostrum iusto, recusandae in? Molestias, error! Tenetur, cupiditate in maiores, modi natus
				minima, voluptatem sit pariatur ipsum aliquam molestias. Laboriosam similique cupiditate
				esse ut dolores deleniti.
			</p>

			<div className="flex flex-col gap-8 lg:flex-row lg:justify-center">
				<Item
					name="Capuccino"
					price={5.99}
					description="A small river named Duden flows by their place and supplies"
					img={<img src="menu1.webp" className="bg-pink-300 aspect-square lg:h-36" />}
				/>
				<Item
					name="Espresso"
					price={4.99}
					description="A small river named Duden flows by their place and supplies"
					img={<img src="menu2.webp" className="bg-green-300 aspect-square lg:h-36" />}
				/>
				<Item
					name="Black Coffee"
					price={1.99}
					description="A small river named Duden flows by their place and supplies"
					img={<img src="menu3.webp" className="bg-blue-300 aspect-square lg:h-36" />}
				/>
				<Item
					name="Milk Coffee"
					price={2.79}
					description="A small river named Duden flows by their place and supplies"
					img={<img src="menu4.webp" className="bg-yellow-300 aspect-square lg:h-36" />}
				/>
			</div>
		</div>
	);
};

export default BestSeller;

const Item: React.FC<{
	name: string;
	price: number;
	description: string;
	img: React.ReactNode;
}> = ({ name, price, description, img }) => {
	return (
		<div className="flex flex-col gap-2 lg:items-center">
			{img}
			<h3 className="text-2xl text-center lg:text-3xl">{name}</h3>
			<p className="text-slate-400 text-center text-sm lg:w-36">{description}</p>
			<p className="text-[#c49b63] text-2xl text-center">$ {price}</p>
		</div>
	);
};
