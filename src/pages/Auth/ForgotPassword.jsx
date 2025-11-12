import { sendPasswordResetEmail } from "firebase/auth";
import { FaKey } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";
import LoadingState from "../../components/LoadingState";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    if (loading) { return <LoadingState></LoadingState> }

    const handleFormRequest = (e) => {
        e.preventDefault();
        setLoading(true);
        sendPasswordResetEmail(auth, (location.state.email ? location.state.email : e.target.email.value))
            .then(() => {
                toast.success("Password reset instructions has been sent to your email.");
                navigate(location.state.path);
            })
            .catch(err => toast.error(err.message))
            .finally(() => setLoading(false));
    }

  return (
    <div className="m-18 flex items-center justify-center bg-gray-50 global-p-x">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-100">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-(--primary-color)/10 mb-4">
          <FaKey className="text-(--primary-color) text-2xl" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Forgot Password?
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Don’t worry! Enter your email and we’ll send you reset instructions.
        </p>

        <form className="space-y-5" onSubmit={handleFormRequest}>
          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              defaultValue={location.state ? location.state.email : '' }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              required
            />
          </div>

          <button type="submit" className="primary-btn w-full mt-2">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;