import React from "react";
import BlogPost from "../../../Common/BlogPost";

const Blog = () => {
	return (
		<div className="bg-[#232323] text-white py-16 px-8 lg:py-36">
			<h2 className="text-2xl mb-4 text-center lg:text-4xl">RECENT FROM BLOG</h2>
			<p className="text-justify text-sm mb-8 text-slate-400 lg:text-center lg:w-1/3 lg:m-auto lg:mb-12">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam iure pariatur animi
				nulla. Quas odit ex, eveniet praesentium quibusdam eaque, nostrum voluptatum, officia ipsam
				maxime cumque perspiciatis aspernatur expedita.
			</p>

			<div className="flex flex-col gap-8 divide-y-2 lg:flex-row lg:divide-y-0 lg:divide-x-2 lg:gap-0 lg:divide-slate-600 lg:justify-center">
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

export default Blog;
