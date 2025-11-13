import { useNavigate, useParams } from "react-router";
import useFetchedData from "../hooks/useFetchedData";
import LoadingState from "./LoadingState";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const ChallengeJoin = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const {user} = use(AuthContext);
  const [data, loading] = useFetchedData(`/challenges/${id}`);
  const [userChallengeData, loadingU] = useFetchedData(`/userChallenges/${id}`);


  if (loading || loadingU) { return <LoadingState></LoadingState> };
  const date = new Date();

  const sendData = {
    userId: user.email,
    challengeId: data._id,
    status: "Not Started",
    progress: 0,
    joinDate: date.toISOString()
  }

  const handleJoinReq = () => {
    axios.post("http://localhost:3000/userChallenges", sendData)
      .then(() => toast.success("Successfully Joined"))
      .catch(err => toast(err))
  }

  return (
    <div className="mt-18 flex items-center justify-center backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md animate-fadeIn">

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Join Challenge
        </h2>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="space-y-3 text-gray-700">
          <h3 className="text-2xl font-semibold text-(--primary-color)">
            {data.title}
          </h3>

          <p className="text-gray-600">
            Start Date: <span className="font-semibold">{data.startDate}</span>
          </p>

          <p className="text-gray-600">
            End Date: <span className="font-semibold">{data.endDate}</span>
          </p>

          <p className="mt-2 text-sm text-gray-600">
            {
              userChallengeData ? 'You have already joined this challenge start track your progress now!!' : 'Ready to begin this challenge and start tracking your progress?'
            }
          </p>
        </div>

        <div className="mt-8">
          {
            userChallengeData ? 
              <button className="primary-btn w-full" onClick={() => navigate("/track")}>
                Track Progress
              </button> : 
              <button className="primary-btn w-full" onClick={handleJoinReq}>
                Join Now
              </button>
          }
        </div>

      </div>
    </div>
  );
};

export default ChallengeJoin;