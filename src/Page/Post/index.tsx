import React, { useEffect } from "react";
import { Content, Comments } from "./Components/_index";
import { useParams } from "react-router-dom";

const Post = () => {
	const { id } = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Content id={id as string} />
			<Comments id={id as string} />
		</>
	);
};

export default Post;
