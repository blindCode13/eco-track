import { useNavigate } from 'react-router';
import LogoImg from '../assets/logo.png';

const Logo = () => {
  const navigate = useNavigate();
	return (
		<div className='flex items-center gap-4 cursor-pointer' onClick={() => navigate("/")}>
			<img src={LogoImg} className='size-10'/><h1 className='font-bold text-3xl'>EcoTrack</h1>
		</div>
	);
};

export default Logo;
