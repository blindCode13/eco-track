import { use, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import RegisterImage from "../../assets/register_bg.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import LoadingState from "../../components/LoadingState";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const {user, createUser, loading, setLoading, signInWithGoogle} = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState('');

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{6,}$/;

  useEffect(() => {
    if (user) { navigate("/") }
  }, [navigate, user]);

  if (loading) { return <LoadingState></LoadingState> }

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) { setPassError("Password should be at least 6 characters long."); }
    else if (passwordRegex.test(password)) {
      createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: photourl })
          .then(() => {
            e.target.reset();
            toast.success("Your account has been created succesfully.");
          })
          .catch(() => {
            toast.error("Your account has been created but there was a problem to set your name or photourl");
          })
      })
      .finally(() => setLoading(false));
    }
    else {
      setPassError("Password should contain at least one uppercase, one lowercase and one special character.");
    }

  };

  return (
    <div className="mt-10 flex items-center justify-center global-p-x">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row-reverse overflow-hidden max-w-5xl w-full">

        <div className="hidden lg:block w-1/2">
          <img
            src={RegisterImage}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Join EcoTrack</h2>

          <form className="space-y-5" onSubmit={handleRegisterForm}>
            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)" required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Photo URL</label>
              <input
                type="text"
                name="photourl"
                placeholder="Enter your photo URL"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)" required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)" required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-(--primary-color)"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
                {
                  passError && <h1 className="text-red-600 mt-1">{passError}</h1>
                }
            </div>

            <input type="submit" className="w-full primary-btn" value="Register"/>

            <div className="flex items-center my-4">
              <hr className="grow border-gray-300" />
              <span className="px-3 text-gray-400 text-sm">or</span>
              <hr className="grow border-gray-300" />
            </div>
          </form>
          <button
              className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer" onClick={() => {
                signInWithGoogle()
                  .then(() => toast.success("Successfully registered account via Google."))
                  .catch(err => toast.error(err.message))
                  .finally(setLoading(false));
              }}
            >
              <FaGoogle className="text-(--primary-color) text-xl" />
              <span className="font-medium text-gray-700">Register with Google</span>
            </button>

          <p className="text-sm text-gray-600 text-center mt-6">
            Already have an account?{" "}
            <span className="text-(--primary-color) font-semibold cursor-pointer hover:underline">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
