import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import LoginImage from "../../assets/login_bg.png";
import { Link } from "react-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-18 flex items-center justify-center global-p-x">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden max-w-5xl w-full">
        
        <div className="hidden lg:block w-1/2">
          <img
            src={LoginImage}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Login to EcoTrack</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)" required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
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
            </div>

            <span className="flex justify-end text-sm text-gray-500 hover:text-(--primary-color) cursor-pointer">
              <Link to={"/forgot-password"}>Forgot your password?</Link>
            </span>

            <input type="submit" className="w-full primary-btn" value="Login"/>

            <div className="flex items-center my-4">
              <hr className="grow border-gray-300" />
              <span className="px-3 text-gray-400 text-sm">or</span>
              <hr className="grow border-gray-300" />
            </div>

          </form>
          <button
              className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer"
            >
              <FaGoogle className="text-(--primary-color) text-xl" />
              <span className="font-medium text-gray-700">Sign in with Google</span>
            </button>

          <p className="text-sm text-gray-600 text-center mt-6">
            Don’t have an account?{" "}
            <span className="text-(--primary-color) font-semibold cursor-pointer hover:underline">
              <Link to={"/register"}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
