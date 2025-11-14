import { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import useFetchedData from "../hooks/useFetchedData";
import { useNavigate, useParams } from "react-router";
import LoadingState from "../components/LoadingState";
import Modal from "../components/Modal";
import { IoIosWarning } from "react-icons/io";
import NotFound from "../components/NotFound";

const EditChallenge = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {user} = use(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [challengeData, loading] = useFetchedData(`/challenges/${id}`, {params: {dataLimit: 0}});

    if (loading) {return <LoadingState></LoadingState>}
    if (challengeData.length === 0) {return <NotFound></NotFound>}

    const handleChallengeDelete = () => {
        setShowModal(false);
        axios.delete(`https://eco-track-server-eta.vercel.app/challenges/${id}`)
            .then(() => toast.success("Successfully deleted the chellenge"))
            .catch(err => toast.error(err.message))
            .finally(() => navigate("/"));

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const duration = e.target.duration.value;
        const target = e.target.target.value;
        const participants = 0;
        const impactMetric = e.target.impactMetric.value;
        const createdBy = user.email;
        const startDate = e.target.startDate.value;
        const endDate = e.target.endDate.value;
        const imageUrl = e.target.imageUrl.value;

    const data = {title, category, description, duration, target, participants, impactMetric, createdBy, startDate, endDate, imageUrl}

    axios.post("https://eco-track-server-eta.vercel.app/challenges", data)
      .then(() => toast.success("Successfully added the challenge"))
      .catch(err => toast.error(err))
  }

  return (
    <div className="mt-2 flex items-center justify-center bg-gray-50 global-p-x py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Edit Challenge
        </h2>

        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder={challengeData.title}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Category
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              name="category"
              defaultValue={challengeData.category}
              required
            >
              <option value="">Select category</option>
              <option>Energy Conservation</option>
              <option>Water Conservation</option>
              <option>Sustainable Transport</option>
              <option>Waste Reduction</option>
              <option>Green Living</option>
            </select>
          </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder={challengeData.description}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              name="description"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Duration (days)
              </label>
              <input
                type="number"
                placeholder={challengeData.duration}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                name="duration"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Target
              </label>
              <input
                type="text"
                placeholder={challengeData.target}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                name="target"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                defaultValue={challengeData.startDate}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                name="startDate"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                defaultValue={challengeData.endDate}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                name="endDate"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Impact Metric
            </label>
            <input
              type="text"
              placeholder={challengeData.impactMetric}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              name="impactMetric"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              placeholder={challengeData.imageUrl}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              name="imageUrl"
              required
            />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <input type="submit" className="primary-btn w-full" value="Edit Challenge"/>
            <button type="button" className="w-full secondery-btn" onClick={() => {setShowModal(true)}}>
                Delete Challenge
            </button>
          </div>
        </form>
        {
            showModal && 
            <Modal>
                            <div className="text-center">
                                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-(--primary-color)/10">
                                    <IoIosWarning className="text-(--primary-color) text-2xl" />
                                </div>
        
                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    Delete
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Are you sure you want to delete the challenge?
                                </p>
        
                                <div className="flex justify-center gap-3">
                                    <button className="secondery-btn cursor-pointer" onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button>
                                <button className="primary-btn cursor-pointer" onClick={handleChallengeDelete}>
                                    Delete
                                </button>
                                </div>
                            </div>
                        </Modal>
        }
      </div>
    </div>
  );
};

export default EditChallenge;