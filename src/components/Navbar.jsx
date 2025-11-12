import { NavLink, useNavigate } from 'react-router';
import Logo from '../assets/logo.png';
import { IconContext } from 'react-icons';
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { use, useState } from 'react';
import { FaRunning, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import UserDefault from '../assets/user_default.png';
import Modal from './Modal';

const Navbar = () => {
    const {user, signOutUser, setLoading} = use(AuthContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [modalShow, setModalShow] = useState(false);
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
                    {
                        !user && <Btns navigate={navigate}></Btns>
                    }
                    {
                        user && 
                        <>
                            <img src={(user && user?.photoURL) || UserDefault} referrerPolicy="no-referrer" className='size-12 border-2 border-gray-300 rounded-full cursor-pointer' onClick={() => setDropDown(!dropDown)}/>
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
                modalShow && 
                <Modal>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-(--primary-color)/10">
                            <FaSignOutAlt className="text-(--primary-color) text-2xl" />
                        </div>

                         <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Log Out
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to Log out of your account?
                        </p>

                        <div className="flex justify-center gap-3">
                            <button className="secondery-btn cursor-pointer" onClick={() => setModalShow(false)}>
                                Cancel
                            </button>
                        <button className="primary-btn cursor-pointer" onClick={() => {
                            signOutUser()
                                .then(() => {
                                    toast.success("Successfully logged out.");
                                    navigate("/");
                                })
                                .catch(err => toast.error(err.message))
                                .finally(() => setLoading(false));
                                }}>
                            Log Out
                        </button>
                        </div>
                    </div>
                </Modal>
            }
        </nav>
    );
};

const NavMiddle = () => {
    return (
        <ul className={`items-center justify-center gap-7 flex flex-wrap`}>
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

const ProfileDropdown = ({setDropDown, userData, setModalShow}) => {
  return (
    <div className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:right-4 mt-6 lg:mt-18 w-64 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 z-50">
      
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
        <button className="w-full flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-green-50 transition cursor-pointer">
          <FaRunning className="text-(--primary-color)" />
          My Activities
        </button>

        <button className="w-full flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-green-50 transition cursor-pointer">
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