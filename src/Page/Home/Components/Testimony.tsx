import React from "react";

const Testimony = () => {
	const comments = [
		<Comment
			name="Adam Ragusea"
			time={new Date("2023-04-17")}
			text={`“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”`}
		/>,
		<Comment
			name="Kylian Mbappe"
			time={new Date("2023-04-17")}
			text={`“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”`}
		/>,
		<Comment
			name="Erling Haaland"
			time={new Date("2023-04-17")}
			text={`“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”`}
		/>,
		<Comment
			name="Albert Einstein"
			time={new Date("2023-04-17")}
			text={`“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”`}
		/>,
	];

	return (
		<div className="bg-[#232323] text-white py-16">
			<div className="px-8">
				<h2 className="text-2xl mb-4 text-center">WHAT THE CUSTOMERS SAY</h2>
				<p className="text-justify text-sm text-slate-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore quae sequi vitae,
					vel atque!
				</p>
			</div>

			<div className="mt-8 flex flex-col">
				{comments.map((comment, index) => {
					if (index % 2 === 0) {
						return (
							<div
								key={index}
								className="bg-[#c49b63] px-8 py-4 flex flex-col gap-2 text-[#232323]">
								{comment}
							</div>
						);
					}
					return (
						<div key={index} className="bg-[#936c35] px-8 py-4 flex flex-col gap-2 text-slate-100">
							{comment}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Testimony;

const Comment: React.FC<{ text: string; name: string; time: Date }> = ({ text, name, time }) => {
	return (
		<>
			<blockquote className="text-sm text-justify">{text}</blockquote>
			<div className="flex gap-2 items-center">
				<div className="w-8 aspect-square rounded-full bg-red-400"></div>
				<div>
					<p className="font-semibold text-black">{name}</p>
					<p className="text-xs text-black">{time.toDateString()}</p>
				</div>
			</div>
		</>
	);
};
