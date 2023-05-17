import React from "react";
import { getComments } from "../../../Test/api";

const Comments: React.FC<{ id: string }> = ({ id }) => {
	const comments = getComments(id as string);

	return (
		<div className="bg-[#232323] pb-16 px-8 text-white lg:py-36 lg:px-48">
			<h2 className="text-2xl pb-8 font-bold text-white">Comments</h2>
			<div className="flex flex-col gap-8">
				{comments.map((comment, index) => {
					return (
						<article key={index} className="">
							<div className="flex gap-4 items-center">
								{comment.image === "unknown" ? (
									<div className="h-10 aspect-square bg-red-300 rounded-full" />
								) : (
									<image href={comment.image} />
								)}
								<h3 className="text-xl font-bold pb-4">{comment.name}</h3>
							</div>
							<p className="text-justify text-slate-300">{comment.content}</p>
						</article>
					);
				})}
			</div>
		</div>
	);
};

export default Comments;
