import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import RegisterImage from "../../assets/register_bg.png";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-18 flex items-center justify-center global-p-x">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row-reverse overflow-hidden max-w-5xl w-full">

        <div className="hidden lg:block w-1/2">
          <img
            src={RegisterImage}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Join EcoTrack</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Photo URL</label>
              <input
                type="text"
                placeholder="Enter your photo URL"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-(--primary-color)"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full primary-btn">
              Register
            </button>

            <div className="flex items-center my-4">
              <hr className="grow border-gray-300" />
              <span className="px-3 text-gray-400 text-sm">or</span>
              <hr className="grow border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer"
            >
              <FaGoogle className="text-(--primary-color) text-xl" />
              <span className="font-medium text-gray-700">Register with Google</span>
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Already have an account?{" "}
            <span className="text-(--primary-color) font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
