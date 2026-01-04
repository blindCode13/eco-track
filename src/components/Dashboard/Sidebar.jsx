import {
  FiGrid,
  FiCheckSquare,
  FiLogOut,
} from "react-icons/fi";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import Logo from "../Logo";
import LogoImg from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import LogoutConfirmation from "../LogoutConfirmation";

const Sidebar = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    {
      modalShow && <LogoutConfirmation setModalShow={setModalShow}/>
    }
      <aside className="fixed w-20 md:w-64 min-h-screen bg-white flex flex-col">
      {/* Logo */}
      <div className="w-fit mx-auto py-6">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <img
          className="flex md:hidden size-8"
          src={LogoImg}
          alt="Logo"
        />
      </div>

      {/* Navigation */}
      <nav className="px-4 pt-6 flex flex-col flex-1">
        {/* Menu (Top) */}
        <div>
          <p className="text-xs text-gray-400 uppercase mb-3 hidden md:flex">
            Menu
          </p>

          <SidebarItem icon={<FiGrid />} label="" />
          <SidebarItem icon={<RiStickyNoteAddLine />} label="Add Challenge" />
          <SidebarItem icon={<GrNotes />} label="My Challenges" />
          <SidebarItem icon={<FiCheckSquare />} label="My Tasks" />
        </div>

        {/* General (Bottom) */}
        <div className="mt-auto pb-6">
          <p className="text-xs text-gray-400 uppercase mb-3 hidden md:flex">
            General
          </p>

          <SidebarItem icon={<FaRegUser />} label="Profile" />
          <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer mb-1 hover:bg-gray-100" onClick={() => setModalShow(true)}>
            <div className="flex items-center gap-3">
              <span className="text-lg">{<FiLogOut />}</span>
              <span className="hidden md:block">Logout</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
    </>
  );
};

const SidebarItem = ({ icon, label }) => {
  const location = useLocation();
  const pathname = location.pathname == '/dashboard' ? 'home' : location.pathname;
  const navigate = useNavigate();
  const navigateLink = label.toLowerCase().split(" ").join("-") || "home";
  const active = pathname.includes(navigateLink);

  return (
    <div
      className={`flex items-center px-4 py-2 rounded-lg cursor-pointer mb-1
        ${
            active
            ? "bg-(--primary-color)/10 text-(--primary-color) font-medium pointer-events-none"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      onClick={() => navigate(label && `/dashboard/${label.toLowerCase().split(" ").join("-")}`)}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span className="hidden md:block">{label || "Overview"}</span>
      </div>
    </div>
  );
};

export default Sidebar;
