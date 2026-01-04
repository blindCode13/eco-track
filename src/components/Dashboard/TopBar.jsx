import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import UserDefault from '../../assets/user_default.png';

const TopBar = () => {
  const {user} = use(AuthContext);
  return (
    <div className="fixed w-full pl-24 md:pl-70 pr-8 md:pr-16">
      <div className="flex items-center justify-between border border-gray-200 rounded-2xl shadow-sm mt-4 bg-white px-6 py-4">
        <h1 className="text-2xl md:text-4xl">Dashboard</h1>
        <img className="size-12 rounded-full border-2 border-(--primary-color)" src={user.photoURL || UserDefault} title={user.displayName}/>
      </div>
    </div>
  );
};

export default TopBar;