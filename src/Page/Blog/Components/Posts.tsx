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
					image={
						<img src="blog1.webp" className="h-20 bg-pink-300 md:aspect-video md:h-48 lg:h-36" />
					}
				/>

				<BlogPost
					id="post2"
					title="Martini Style"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={5}
					color="red"
					image={
						<img src="blog2.webp" className="h-20 bg-red-300 md:aspect-video md:h-48 lg:h-36" />
					}
				/>

				<BlogPost
					id="post3"
					title="Fillet Mignon with red wine"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={8}
					color="blue"
					image={
						<img src="blog3.webp" className="h-20 bg-blue-300 md:aspect-video md:h-48 lg:h-36" />
					}
				/>
			</div>
		</div>
	);
};

export default Posts;
