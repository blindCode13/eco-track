import { NavLink, useNavigate } from 'react-router';
import { IconContext } from 'react-icons';
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { use, useState } from 'react';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { AuthContext } from '../contexts/AuthContext';
import UserDefault from '../assets/user_default.png';
import Logo from './Logo';
import LogoutConfirmation from './LogoutConfirmation';

const Navbar = () => {
    const {user, signOutUser, setLoading} = use(AuthContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className='fixed max-w-[1920px] w-full global-p-x py-4 shadow-sm z-20 bg-white'>
            <div className='flex items-center justify-between'>
            <Logo />
            <div className='hidden lg:flex'><NavMiddle></NavMiddle></div>
            <div className='flex items-center'>
                <div className='hidden lg:flex'>
                    {
                        !user && <Btns navigate={navigate}></Btns>
                    }
                    {
                        user && 
                        <>
                            <img src={(user && user?.photoURL) || UserDefault} referrerPolicy="no-referrer" className='size-12 border-2 border-(--primary-color) rounded-full cursor-pointer' onClick={() => setDropDown(!dropDown)}/>
                            {
                                dropDown && <ProfileDropdown setDropDown={setDropDown} userData={user} signOutUser={signOutUser} setLoading={setLoading} navigate={navigate} setModalShow={setModalShow}></ProfileDropdown>
                            }
                        </>
                    }
                </div>
                <IconContext.Provider value={{size: 46, color: 'var(--primary-color)'}}>
                    <div className='lg:hidden' onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? <IoMdCloseCircleOutline/> : <MdOutlineMenuOpen/>}</div>
                </IconContext.Provider>
            </div>
            </div>
            <div className={`lg:hidden ${isExpanded ? 'flex' : 'hidden'} flex-col items-center gap-4 mt-3`}>
                <div className='py-4'><NavMiddle></NavMiddle></div>

                    {
                        !user && <Btns navigate={navigate}></Btns>
                    }
                    {
                        user && 
                        <>
                            <img src={(user && user?.photoURL) || UserDefault} referrerPolicy="no-referrer" className='size-12 border-2 border-gray-300 rounded-full cursor-pointer' onClick={() => setDropDown(!dropDown)}/>
                            {
                                dropDown && 
                                <div>
                                    <ProfileDropdown setDropDown={setDropDown} userData={user} signOutUser={signOutUser} setLoading={setLoading} navigate={navigate} setModalShow={setModalShow}></ProfileDropdown>
                                </div>
                            }
                        </>
                    }
                    
            </div>

            {
                modalShow && <LogoutConfirmation setModalShow={setModalShow}></LogoutConfirmation>
            }
        </nav>
    );
};

const NavMiddle = () => {
    return (
        <ul className={`items-center justify-center gap-7 flex flex-wrap`}>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/challenges"} end>Challenges</NavLink></li>
            <li><NavLink to={"/tips"}>Tips</NavLink></li>
            <li><NavLink to={"/events"}>Events</NavLink></li>
            <li><NavLink to={"/dashboard/add-challenge"}>Add Challenge</NavLink></li>
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

const ProfileDropdown = ({setDropDown, userData, setModalShow, navigate}) => {
  return (
    <div className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:right-4 mt-6 lg:mt-18 w-72 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 z-50">
      
      <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
            <h2 className="text-lg font-semibold text-gray-800">{userData.displayName}</h2>
            <div className="flex items-center text-gray-500 text-sm mt-1">
                {userData.email}
            </div>
        </div>
        <div>
            <IoMdCloseCircleOutline className="size-7 text-(--primary-color) cursor-pointer" onClick={() => setDropDown(false)}/>
        </div>
      </div>

      <div className="py-2">
        <button className="w-full flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-green-50 transition cursor-pointer" onClick={() => {navigate("/dashboard"); setDropDown(false)}}>
          <RiDashboardHorizontalFill className="size-5 text-(--primary-color)" />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-green-50 transition cursor-pointer" onClick={() => {navigate("/dashboard/profile"); setDropDown(false)}}>
          <FaUser className="text-(--primary-color)" />
          Profile
        </button>
      </div>

      <div className="border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-green-50 transition cursor-pointer"
         onClick={() => {
                setDropDown(false);
                setModalShow(true);
         }}>
          <FaSignOutAlt className="text-(--primary-color)" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;