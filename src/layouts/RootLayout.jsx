import {Outlet, useLocation} from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { use, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import LoadingState from "../components/LoadingState";

const RootLayout = () => {

	const {loading} = use(AuthContext);
	const path = useLocation();
	useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, [path]);

	return (
		<>
			{
				loading ? <div className="min-h-screen flex items-center justify-center"><LoadingState></LoadingState></div> : 
					<div className="max-w-[1920px] mx-auto">
						<Navbar></Navbar>
						<div className="pt-25 min-h-screen">
							<Outlet></Outlet>
						</div>
						<Footer></Footer>
					</div>
			}
			<ToastContainer/>
		</>
	);
};

export default RootLayout;
