import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Image: React.FC<{ color?: string }> = ({ color }) => {
	if (color === "pink") {
		return <div className="h-20 bg-pink-300 md:aspect-video md:h-48 lg:h-36"></div>;
	}
	if (color === "red") {
		return <div className="h-20 bg-red-300 md:aspect-video md:h-48 lg:h-36"></div>;
	}
	if (color === "yellow") {
		return <div className="h-20 bg-yellow-300 md:aspect-video md:h-48 lg:h-36"></div>;
	}
	if (color === "blue") {
		return <div className="h-20 bg-blue-300 md:aspect-video md:h-48 lg:h-36"></div>;
	}
	return <div className="h-20 bg-white md:aspect-video md:h-48 lg:h-36"></div>;
};

const BlogPost: React.FC<{
	id: string;
	title: string;
	description: string;
	date: Date;
	author: string;
	comments: number;
	color?: string;
}> = ({ id, title, description, date, author, comments, color }) => {
	const navigate = useNavigate();
	const img = <Image color={color} />;

	return (
		<motion.article
			className="flex flex-col gap-2 pt-8 cursor-pointer md:px-4 md:items-center"
			variants={{
				hover: {
					filter: "contrast(150%)",
				},
			}}
			whileHover="hover"
			onClick={() => {
				navigate(`/blog/${id}`);
			}}>
			{img}
			<div className="flex gap-4 text-sm items-center">
				<p className="text-slate-300">{date.toLocaleDateString()}</p>
				<p className="font-semibold">{author}</p>
				<p className="flex items-center">
					<strong className="text-xl text-yellow-300">{"#"}</strong> {comments}
				</p>
			</div>
			<motion.h3
				className="text-2xl md:text-3xl"
				variants={{
					hover: {
						color: "#999",
						scaleY: 1.1,
					},
				}}>
				{title}
			</motion.h3>
			<p className="text-sm text-justify text-slate-300 md:text-center md:px-8">{description}</p>
		</motion.article>
	);
};

export default BlogPost;
