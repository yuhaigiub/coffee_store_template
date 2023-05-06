import React from "react";
import BlogPost from "../../../Common/BlogPost";

const Posts = () => {
	return (
		<div className="bg-[#232323] text-white pb-16 px-8">
			<div className="flex flex-col gap-8 divide-y-2">
				<BlogPost
					id="post1"
					title="The delicious Pizza"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={3}
				/>

				<BlogPost
					id="post2"
					title="Martini Style"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={5}
					color="red"
				/>

				<BlogPost
					id="post3"
					title="Fillet Mignon with red wine"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={8}
					color="blue"
				/>
			</div>
		</div>
	);
};

export default Posts;
