import { useNavigate, useParams } from "react-router";
import LoadingState from "./LoadingState";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ChallengeDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const {data: challenge = [], isLoading} = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/challenges/${id}`, {params: {challengeLimit: 0}});
      return result.data;
    }
  });

  if (isLoading) { return <LoadingState></LoadingState> }
  if (challenge.length === 0) {return navigate("/404", {replace: true})};
  return (
    <section className="mt-18 bg-gray-50 flex items-center justify-center py-12 global-p-x">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <img
            src={challenge.imageUrl}
            className="w-full h-full"
          />
        </div>

        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {challenge.title}
            </h1>
            <p className="text-sm text-(--primary-color) font-semibold uppercase mb-4">
              {challenge.category}
            </p>

            <p className="text-gray-600 leading-relaxed mb-12">
              {challenge.description}
            </p>

            <div className="grid grid-cols-2 gap-2 text-gray-700 mb-8">
              <p><span className="font-semibold">Duration:</span> {challenge.duration} days</p>
              <p><span className="font-semibold">Target:</span> {challenge.target}</p>
              <p><span className="font-semibold">Metric:</span> {challenge.impactMetric}</p>
              <p><span className="font-semibold">Participants:</span> {challenge.participants} joined</p>
              <p><span className="font-semibold">Start:</span> {challenge.startDate}</p>
              <p><span className="font-semibold">End:</span> {challenge.endDate}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="w-full primary-btn" onClick={() => navigate(`/challenges/join/${id}`)}>
              Join Challenge
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Created by: <span className="font-medium text-gray-700">{challenge.createdBy}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeDetails;