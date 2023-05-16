import React from "react";

const Story = () => {
	return (
		<div className="md:bg-[#232323] relative w-full">
			<div className="h-40 bg-pink-300 md:w-[45vw] md:h-[55vh]"></div>
			<div className="bg-[#121212] text-white py-16 px-8 md:w-[40vw] md:absolute top-16 left-[38vw] md:opacity-80">
				<h2 className="text-2xl mb-4 text-center md:text-4xl">DISCOVER OUR STORY</h2>
				<p className="text-justify text-sm text-slate-400">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio facere aliquid a numquam
					perspiciatis totam voluptates, fugit id nulla quos sunt maiores tenetur necessitatibus
					nostrum iusto, recusandae in? Molestias, error! Tenetur, cupiditate in maiores, modi natus
					minima, voluptatem sit pariatur ipsum aliquam molestias. Laboriosam similique cupiditate
					esse ut dolores deleniti.
				</p>
			</div>
		</div>
	);
};

export default Story;
