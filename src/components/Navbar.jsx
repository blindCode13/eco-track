import { NavLink, useNavigate } from 'react-router';
import Logo from '../assets/logo.png';
import { IconContext } from 'react-icons';
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className='fixed max-w-[1920px] w-full global-p-x py-4 shadow-sm z-20 bg-white'>
            <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 cursor-pointer' onClick={() => navigate("/")}>
                <img src={Logo} className='size-10'/><h1 className='font-bold text-3xl'>EcoTrack</h1>
            </div>
            <div className='hidden lg:flex'><NavMiddle></NavMiddle></div>
            <div className='flex items-center'>
                <div className='hidden lg:flex'>
                    <Btns navigate={navigate}></Btns>
                </div>
                <IconContext.Provider value={{size: 46, color: 'var(--primary-color)'}}>
                    <div className='lg:hidden' onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? <IoMdCloseCircleOutline/> : <MdOutlineMenuOpen/>}</div>
                </IconContext.Provider>
            </div>
            </div>
            <div className={`lg:hidden ${isExpanded ? 'flex' : 'hidden'} flex-col items-center gap-6 mt-3`}>
                <NavMiddle flexVal={'flex-col'}></NavMiddle>
                <Btns navigate={navigate}></Btns>
            </div>
        </nav>
    );
};

const NavMiddle = ({flexVal}) => {
    return (
        <ul className={`items-center gap-7 flex ${flexVal}`}>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/challanges"} end>Challanges</NavLink></li>
            <li><NavLink to={"/tips"}>Tips</NavLink></li>
            <li><NavLink to={"/events"}>Events</NavLink></li>
            <li><NavLink to={"/leaderboard"}>Leaderboard</NavLink></li>
        </ul>
    );
};

const Btns = ({navigate}) => {
    return (
        <div className='items-center gap-4 flex'>
            <button className='primary-btn' onClick={() => navigate("/login")}>Login</button>
            <button className='secondery-btn' onClick={() => navigate("/register")}>Register</button>
        </div>
    );
};

export default Navbar;