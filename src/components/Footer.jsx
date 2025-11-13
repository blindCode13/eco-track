import { Link } from 'react-router';
import Logo from '../assets/logo.png';
import { IconContext } from 'react-icons';
import { FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className='w-full bg-white relative mt-10'>
            <div className='global-p-x'>
                <div className='grid grid-cols-1 max-[48rem]:text-center md:grid-cols-3 gap-8 justify-items-center py-14 border-b-2 border-gray-300'>
                <div className='flex flex-col items-center md:items-start'>
                    <div className='flex items-center gap-4'>
                        <img src={Logo} className='size-10'/><h1 className='font-bold text-3xl'>EcoTrack</h1>
                    </div>
                    <p className='des mt-4'>EcoTrack is a growing community for those who believe change begins with everyday choices. Here, people discover sustainability challenges, share practical eco-tips, and explore local green events that make caring for the planet part of daily life. Together, we learn, act, and track real progress toward a cleaner, more connected world.</p>
                </div>
                <div>
                    <h1 className='text-3xl text-(--primary-color) font-bold'>Quick Links</h1>
                    <ul className='flex flex-col mt-4 gap-2 ml-2'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/challenges"}>Challenges</Link></li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='cursor-pointer'>Terms and Conditions</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-3xl text-(--primary-color) font-bold'>Social Links</h1>
                    <IconContext.Provider value={{ color: '#000', size: 24 }}>
                        <div className='flex flex-col items-start gap-4 mt-4 max-[1100px]:justify-center'>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <FaFacebook /> - Facebook
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <FaXTwitter /> - Twitter
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <FaInstagram /> - Instagram
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <FaDiscord /> - Discord
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>

            <p className='text-center py-5'>&copy; 2025 EcoTrack</p>
            <p className='text-center pb-5 max-w-[600px] mx-auto'>EcoTrack is built with accessibility and privacy in mind. We’re committed to making sustainability inclusive and protecting your data.</p>

            </div>
        </footer>
    );
};

export default Footer;