import React from "react";
import BlogPost from "../../../Common/BlogPost";

const Blog = () => {
	return (
		<div className="bg-[#232323] text-white py-16 px-8">
			<h2 className="text-2xl mb-4 text-center">RECENT FROM BLOG</h2>
			<p className="text-justify text-sm mb-8 text-slate-400">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam iure pariatur animi
				nulla. Quas odit ex, eveniet praesentium quibusdam eaque, nostrum voluptatum, officia ipsam
				maxime cumque perspiciatis aspernatur expedita.
			</p>

			<div className="flex flex-col gap-8 divide-y-2">
				<BlogPost
					title="The delicious Pizza"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={3}
				/>

				<BlogPost
					title="Martini Style"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={5}
					color="red"
				/>

				<BlogPost
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

export default Blog;
