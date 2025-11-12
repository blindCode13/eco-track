import {Outlet, useLocation} from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const RootLayout = () => {

	const path = useLocation();
	useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, [path])

	return (
		<div className="max-w-[1920px] mx-auto">
			<Navbar></Navbar>
			<div className="pt-25 min-h-screen">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default RootLayout;
