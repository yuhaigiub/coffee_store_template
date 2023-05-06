import React from "react";
import { getPost } from "../../../Test/api";
import { processPostData } from "../../../Test/utility";

const Content: React.FC<{ id: string }> = ({ id }) => {
	const postData = getPost(id as string);
	const content = processPostData(postData.content);

	return (
		<div className="bg-[#232323] py-16 px-8 text-slate-300">
			<h2 className="text-2xl pb-8 font-bold text-white">{postData.title}</h2>
			<div className="flex flex-col gap-4 text-justify">
				{content.map((part, index) => {
					if (part[0] === "i")
						if (part[1] === "unknown") {
							return <div key={index} className="h-40 bg-pink-400" />;
						} else {
							return <image href={part[1]} />;
						}
					else return <p key={index}>{part[1]}</p>;
				})}
			</div>
		</div>
	);
};

export default Content;
