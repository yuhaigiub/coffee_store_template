import React from "react";
import { motion } from "framer-motion";

const Booking: React.FC<{ style?: "yellow" | "black" }> = ({ style = "yellow" }) => {
	return (
		<Container style={style}>
			<h2 className="text-white text-2xl mb-4">BOOK A TABLE</h2>
			<div className="flex flex-col">
				<Input placeholder="First name" style={style} />
				<Input placeholder="Last name" style={style} />
				<Input placeholder="Date" type="date" style={style} />
				<Input placeholder="Time" type="time" style={style} />
				<Input placeholder="Phone" style={style} />
				<Input placeholder="Message" style={style} />
				<motion.button
					className="w-full h-10 mt-4"
					style={{ backgroundColor: style === "yellow" ? "#fff" : "#c49b63" }}
					whileHover={{
						scale: 1.1,
						backgroundColor: style === "yellow" ? "#efefef" : "#a46e22",
						borderRadius: 30,
						transition: {
							borderRadius: {
								duration: 0.3,
							},
						},
					}}
					whileTap={{ scale: 0.9 }}>
					Send
				</motion.button>
			</div>
		</Container>
	);
};

export default Booking;

const Input: React.FC<{ type?: string; placeholder: string; style: "yellow" | "black" }> = ({
	placeholder,
	type = "text",
	style,
}) => {
	if (style === "yellow")
		return (
			<input
				placeholder={placeholder}
				type={type}
				className="w-full outline-none pb-2 bg-transparent placeholder:text-[#121212]  text-white my-2 border-b-2 border-[#121212] focus-within:border-white focus-within:text-white"
			/>
		);
	else
		return (
			<input
				placeholder={placeholder}
				type={type}
				className="w-full outline-none pb-2 bg-transparent placeholder:text-slate-500  text-white my-2 border-b-2 border-slate-500 focus-within:border-white focus-within:text-white"
			/>
		);
};

const Container: React.FC<{ style: "yellow" | "black"; children: React.ReactNode }> = ({
	style,
	children,
}) => {
	if (style === "yellow") return <div className="bg-[#c49b63] py-16 px-8">{children}</div>;
	else return <div className="bg-[#232323] py-16 px-8">{children}</div>;
};
