import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Modal from './Modal';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutConfirmation = ({setModalShow}) => {
  const navigate = useNavigate();
  const {signOutUser, setLoading} = use(AuthContext)
	return (
		<Modal>
			<div className="text-center">
				<div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-(--primary-color)/10">
					<FaSignOutAlt className="text-(--primary-color) text-2xl"/>
				</div>

				<h2 className="text-xl font-semibold text-gray-800 mb-2">
					Log Out
				</h2>
				<p className="text-gray-600 mb-6">
					Are you sure you want to Log out of your account?
				</p>

				<div className="flex justify-center gap-3">
					<button className="secondery-btn cursor-pointer"
						onClick={
							() => setModalShow(false)
					}>
						Cancel
					</button>
					<button className="primary-btn cursor-pointer"
						onClick={
							() => {
								signOutUser().then(() => {
									toast.success("Successfully logged out.");
									navigate("/", {replace: true});
								}).catch(err => toast.error(err.message)). finally(() => setLoading(false));
							}
					}>
						Log Out
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default LogoutConfirmation;
