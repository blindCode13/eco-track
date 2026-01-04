import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import UserDefault from '../../assets/user_default.png';
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import LoadingState from "../../components/LoadingState";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const {user} = use(AuthContext);

  const handleFormSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;

    updateProfile(auth.currentUser, { displayName: name, photoURL: photourl })
        .then(() => {
          e.target.reset();
          toast.success("Your profile has been updated successfully.");
        })
        .catch(() => {
          toast.error("Failed to update your profile. Something went wrong.");
        })
        .finally(() => setLoading(false));
  }

  if (loading) { return <LoadingState></LoadingState> }

  return (
    <div className="mt-18 flex items-center justify-center bg-gray-50 global-p-x">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl">
        
        <div className="flex flex-col items-center text-center md:w-1/3">
          <img
            src={(user && user?.photoURL) || UserDefault}
            className="w-32 h-32 rounded-full object-cover border-4 border-(--primary-color)"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.displayName}</h2>
          <p className="text-gray-500 text-sm mt-1">{user.email}</p>
        </div>

        <div className="w-full md:w-2/3">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="Enter photo URL..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                required
              />
            </div>

            <button type="submit" className="primary-btn w-full md:w-auto">
              Update Profile
            </button>
          </form>

          <div className="mt-4 text-(--primary-color) text-sm underline hover:opacity-80">
            <Link to={"/forgot-password"} state={{email: user.email}}>Request password reset</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;