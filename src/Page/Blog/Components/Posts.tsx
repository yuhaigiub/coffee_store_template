import React from "react";
import BlogPost from "../../../Common/BlogPost";

const Posts = () => {
	return (
		<div className="bg-[#232323] text-white pb-16 px-8 lg:py-36">
			<div className="flex flex-col gap-8 divide-y-2 lg:grid lg:grid-cols-3 lg:divide-y-0 lg:divide-x-2 divide-slate-600 lg:gap-0">
				<BlogPost
					id="post1"
					title="The delicious Pizza"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={3}
					image={<img src="blog1.webp" className="aspect-video bg-pink-300 lg:h-56" />}
				/>

				<BlogPost
					id="post2"
					title="Martini Style"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={5}
					image={<img src="blog2.webp" className="aspect-video bg-blue-300 lg:h-56" />}
				/>

				<BlogPost
					id="post3"
					title="Fillet Mignon with red wine"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={8}
					image={<img src="blog3.webp" className="aspect-video bg-red-300 lg:h-56" />}
				/>
			</div>
		</div>
	);
};

export default Posts;
