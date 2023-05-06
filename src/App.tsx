import { Layout } from "./Layout/_index";
import { Blog, Post, Home, Menu } from "./Page/_index";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="blog">
					<Route index element={<Blog />} />
					<Route path=":id" element={<Post />} />
				</Route>
				<Route path="menu" element={<Menu />} />
			</Route>
		</Routes>
	);
}

export default App;
