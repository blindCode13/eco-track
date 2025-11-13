import { useState } from "react";
import Modal from "../components/Modal";
import { useParams } from "react-router";
import LoadingState from "./LoadingState";
import useFetchedData from "../hooks/useFetchedData";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import NotFound from "./NotFound";

const TrackChallenge = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [reload, setReload] = useState(0);

  const [userChallengeData, loadingU] = useFetchedData(
    `/userChallenges?challengeId=${id}&userId=${user.email}&r=${reload}`
  );
  const [challengeData, loadingC] = useFetchedData(`/challenges/${id}`, {params: {dataLimit: 0}});

  const [showModal, setShowModal] = useState(false);
  const [impact, setImpact] = useState("");

  if (loadingU || loadingC) return <LoadingState />;
  if (userChallengeData.length === 0) {return <NotFound></NotFound>}

  const { title, progress, duration } = userChallengeData;

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setImpact("");
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const initImpact = challengeData.impactMetric;
    const impactMetric = e.target.impactMetric.value;

    const splited = initImpact.split(" ");
    let metricVal = parseInt(splited[0]);
    let dataToSend;

    if (metricVal) {
      metricVal += parseInt(impactMetric);
      dataToSend = metricVal + " " + splited.slice(1).join(" ");
    } else {
      metricVal = impactMetric;
      dataToSend = metricVal + " " + splited.join(" ");
    }

    axios.patch(`http://localhost:3000/userChallenges?challengeId=${id}&userId=${user.email}`, {increment: true})
      .then(() => {
        axios.patch(`http://localhost:3000/challenges/${id}`, {dataForPatch: dataToSend})
          .then(() => {
            toast.success("You have fullfilled your challenge for the day. Keep it up!!");
            setReload(init => init+1);
          })
        
      })
    // You will PATCH here with progress+1 and impact
    // After success → reload / re-mount

    closeModal();
  };

  const percent = Math.round((progress / duration) * 100);
  const days = Array.from({ length: duration }, (_, i) => i + 1);

  return (
    <div className="mt-18 bg-gray-50 global-p-x py-10 flex justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>

        <p className="text-gray-600 mb-6">
          Track your daily progress and log your impact.
        </p>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Progress: {progress} / {duration} days ({percent}%)
          </p>

          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="h-full bg-(--primary-color) transition-all"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Daily Check-In
        </h3>

        <div className="space-y-2 max-h-64 overflow-y-auto pr-1 mb-6">
          {days.map((day) => (
            <div
              key={day}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
            >
              <span className="font-medium">Day {day}</span>

              {day <= progress ? (
                <span className="text-green-600 font-semibold">✓ Completed</span>
              ) : (
                <span className="text-gray-400 font-semibold">— Pending</span>
              )}
            </div>
          ))}
        </div>

        <button
          className="primary-btn w-full"
          disabled={progress >= duration}
          onClick={openModal}
        >
          {progress >= duration
            ? "Challenge Completed 🎉"
            : "Mark Today as Completed"}
        </button>

        {showModal && (
          <Modal>
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Log Today’s Impact
              </h3>

              <input
                type="number"
                value={impact}
                name="impactMetric"
                onChange={(e) => setImpact(e.target.value)}
                placeholder="Enter impact metric…"
                className="w-full border border-(--primary-color) rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                required
              />

              <div className="flex gap-3 mt-6">
                <input type="submit" className="primary-btn w-full" value="Submit"/>

                <button
                  type="button"
                  className="w-full secondery-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </Modal>
        )}

      </div>
    </div>
  );
};

export default TrackChallenge;