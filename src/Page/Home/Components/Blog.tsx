import React from "react";
import BlogPost from "../../../Common/BlogPost";

const Blog = () => {
	return (
		<div className="bg-[#232323] text-white py-16 px-8 md:py-36">
			<h2 className="text-2xl mb-4 text-center md:text-4xl">RECENT FROM BLOG</h2>
			<p className="text-justify text-sm mb-8 text-slate-400 md:text-center md:w-1/3 md:m-auto md:mb-12">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam iure pariatur animi
				nulla. Quas odit ex, eveniet praesentium quibusdam eaque, nostrum voluptatum, officia ipsam
				maxime cumque perspiciatis aspernatur expedita.
			</p>

			<div className="flex flex-col gap-8 divide-y-2 md:flex-row md:divide-y-0 md:divide-x-2 md:gap-0 md:divide-slate-600 md:justify-center">
				<BlogPost
					id="post1"
					title="The delicious Pizza"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={3}
					image={
						<img src="blog1.webp" className="h-20 bg-pink-300 md:aspect-video md:h-56 lg:h-56" />
					}
				/>

				<BlogPost
					id="post2"
					title="Martini Style"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={5}
					image={
						<img src="blog2.webp" className="h-20 bg-pink-300 md:aspect-video md:h-56 lg:h-56" />
					}
				/>

				<BlogPost
					id="post3"
					title="Fillet Mignon with red wine"
					description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
					date={new Date("2023-04-18")}
					author="Admin"
					comments={8}
					image={
						<img src="blog3.webp" className="h-20 bg-pink-300 md:aspect-video md:h-56 lg:h-56" />
					}
				/>
			</div>
		</div>
	);
};

export default Blog;
