import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogPost: React.FC<{
	id: string;
	title: string;
	description: string;
	date: Date;
	author: string;
	comments: number;
	image: React.ReactNode;
}> = ({ id, title, description, date, author, comments, image }) => {
	const navigate = useNavigate();
	return (
		<div className="lg:px-8">
			<motion.div
				className="flex flex-col gap-2 pt-8 cursor-pointer lg:px-4 lg:items-center lg:gap-4"
				variants={{
					hover: {
						filter: "contrast(150%)",
					},
				}}
				whileHover="hover"
				onClick={() => {
					navigate(`/blog/${id}`);
				}}>
				{image}
				<div className="flex gap-4 text-sm items-center">
					<p className="text-slate-300">{date.toLocaleDateString()}</p>
					<p className="font-semibold">{author}</p>
					<p className="flex items-center">
						<strong className="text-xl text-yellow-300">{"#"}</strong> {comments}
					</p>
				</div>
				<motion.h3
					className="text-2xl lg:text-3xl lg:px-10 lg:text-center"
					variants={{
						hover: {
							color: "#999",
							scaleY: 1.1,
						},
					}}>
					{title}
				</motion.h3>
				<p className="text-sm text-justify text-slate-300 lg:text-center lg:px-10">{description}</p>
			</motion.div>
		</div>
	);
};

export default BlogPost;
