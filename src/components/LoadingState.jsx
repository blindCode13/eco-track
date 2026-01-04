import Logo from '../assets/logo.png'

const LoadingState = () => {
	return (
		<div className="absolute mx-auto w-full flex items-center justify-center text-7xl font-bold text-gray-800">
				<img src={Logo}
					alt="EcoTrack logo spinning"
					className="size-16 mx-2 inline-block animate-[spin_3s_linear_infinite]"/>
		</div>
	);
};

export default LoadingState;
