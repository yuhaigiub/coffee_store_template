import React, { useEffect, useState } from "react";
import { About, Service, Contact, Copyright } from "./Components/_index";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout: React.FC = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const handleClick = (url: string) => {
		setIsOpen(false);
		navigate(url);
	};

	return (
		<div>
			<motion.header layout className="bg-black text-white sticky top-0 z-10">
				<div className="flex items-center justify-between h-20 px-8">
					<button
						className="text-center font-bold cursor-pointer"
						onClick={() => {
							window.scrollTo(0, 0);
							navigate("/");
						}}>
						Coffee Store
					</button>
					<motion.button
						style={{ color: isOpen ? "#c49b63" : "#fff" }}
						whileHover={{
							color: "#c49b63",
							scale: 1.2,
							transition: {
								scale: { duration: 0.2 },
							},
						}}
						whileTap={{ scale: 0.85 }}
						onClick={() => {
							setIsOpen((value) => !value);
						}}>
						Menu
					</motion.button>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.ul
							className="list-none flex flex-col justify-start overflow-hidden"
							layout
							variants={menuVariants}
							initial="enter"
							animate="open"
							exit="close">
							<li>
								<MenuButton
									text="HOME"
									handleClick={() => {
										handleClick("/");
									}}
								/>
							</li>
							<li>
								<MenuButton
									text="MENU"
									handleClick={() => {
										handleClick("/menu");
									}}
								/>
							</li>
							{/* <li>
								<MenuButton
									text="ABOUT"
									handleClick={() => {
										handleClick("/about");
									}}
								/>
							</li> */}
							<li>
								<MenuButton
									text="BLOG"
									handleClick={() => {
										handleClick("/blog");
									}}
								/>
							</li>
						</motion.ul>
					)}
				</AnimatePresence>
			</motion.header>

			<div id="top" />
			<main className="relative">
				<Outlet />
			</main>

			<footer className="bg-black">
				<About />
				<Service />
				<Contact />
				<Copyright />
			</footer>
		</div>
	);
};

export default Layout;

const menuVariants: Variants = {
	enter: {
		opacity: 0,
		height: 0,
	},
	open: {
		opacity: 1,
		height: 16 * 3 * 3,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 24,
		},
	},
	close: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.2,
		},
	},
};

const MenuButton: React.FC<{ text: string; handleClick: () => void }> = ({ text, handleClick }) => {
	return (
		<motion.button
			className="w-full text-left py-2 px-8"
			onClick={handleClick}
			whileHover={{ color: "#c49b63", backgroundColor: "#232323" }}>
			{text}
		</motion.button>
	);
};
