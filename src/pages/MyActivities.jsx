import { use } from "react";
import useFetchedData from "../hooks/useFetchedData";
import { AuthContext } from "../contexts/AuthContext";
import LoadingState from "../components/LoadingState";
import { useNavigate } from "react-router";

const MyActivities = () => {
    const {user} = use(AuthContext);
    const navigate = useNavigate();
    const [myChallenges, loadingM] = useFetchedData(`/challenges?email=${user.email}`);
    const [ongoingChallenges, loading] = useFetchedData(`/userChallenges?&userId=${user.email}`);

    if (loading || loadingM) { return <LoadingState></LoadingState> };
  return (
    <div className="global-p-x py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">My Activities</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          My Challenges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            myChallenges.map(item => <MyChallenges key={item._id} data={item}></MyChallenges>)
          }
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Ongoing Challenges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                ongoingChallenges.map(item => <OngoingChallenges key={item.challengeId} data={item} navigate={navigate}></OngoingChallenges>)
            }
        </div>
      </section>
    </div>
  );
};

const MyChallenges = ({data}) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              {data.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Created by you • Duration: {data.duration}
            </p>

            <div className="mt-4 flex items-center gap-2">
                <button className="primary-btn w-full">
                    View Details
                </button>
                <button className="secondery-btn w-full">
                    Edit
                </button>
            </div>
          </div>
    );
};

const OngoingChallenges = ({data, navigate}) => {
  const progress = data.progress;
  const duration = data.duration;

  const percent = Math.round((progress / duration) * 100);

  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {data.title}
      </h3>

      <p className="text-sm text-gray-500">
        Progress:{" "}
        <span className="text-(--primary-color)">
          {progress} / {duration} days
        </span>
      </p>

      <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
        <div
          className="h-full bg-(--primary-color) rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <button className="primary-btn w-full mt-4" onClick={() => navigate(`/my-activities/${data.challengeId}`)}>
        Track Progress
      </button>
    </div>
  );
};

export default MyActivities;