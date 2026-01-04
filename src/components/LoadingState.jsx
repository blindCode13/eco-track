import Logo from '../assets/logo.png'

const LoadingState = () => {
	return (
		<div className="absolute w-full mx-auto flex items-center justify-center">
				<img src={Logo}
					alt="EcoTrack logo spinning"
					className="size-16 mx-2 inline-block animate-[spin_3s_linear_infinite]"/>
		</div>
	);
};

export default LoadingState;
