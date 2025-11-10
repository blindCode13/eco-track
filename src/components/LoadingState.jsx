import Logo from '../assets/logo.png'

const LoadingState = () => {
	return (
		<div className="absolute mx-auto w-full flex items-center justify-center text-7xl font-bold text-gray-800">
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-1000ms]">L</span>
			<span className='className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-900ms]'>
				<img src={Logo}
					alt="EcoTrack logo spinning"
					className="size-16 mx-2 inline-block animate-[spin_3s_linear_infinite]"/>
			</span>
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-800ms]">A</span>
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-700ms]">D</span>
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-600ms]">I</span>
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-500ms]">N</span>
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-400ms]">G</span>
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-300ms]">.</span>
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-200ms]">.</span>
			<span className="inline-block animate-[bounce_1.8s_ease-in-out_infinite] [animation-delay:-100ms]">.</span>
		</div>
	);
};

export default LoadingState;
