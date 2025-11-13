import { Navigate, useNavigate, useParams } from "react-router";
import useFetchedData from "../hooks/useFetchedData";
import LoadingState from "./LoadingState";

const ChallengeDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [data, loading] = useFetchedData(`/challenges/${id}`, {params: {dataLimit: 0}});

  if (loading) { return <LoadingState></LoadingState> }
  return (
    <section className="mt-18 bg-gray-50 flex items-center justify-center py-12 global-p-x">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <img
            src={data.imageUrl}
            className="w-full h-full"
          />
        </div>

        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {data.title}
            </h1>
            <p className="text-sm text-(--primary-color) font-semibold uppercase mb-4">
              {data.category}
            </p>

            <p className="text-gray-600 leading-relaxed mb-12">
              {data.description}
            </p>

            <div className="grid grid-cols-2 gap-2 text-gray-700 mb-8">
              <p><span className="font-semibold">Duration:</span> {data.duration} days</p>
              <p><span className="font-semibold">Target:</span> {data.target}</p>
              <p><span className="font-semibold">Metric:</span> {data.impactMetric}</p>
              <p><span className="font-semibold">Participants:</span> {data.participants} joined</p>
              <p><span className="font-semibold">Start:</span> {data.startDate}</p>
              <p><span className="font-semibold">End:</span> {data.endDate}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="w-full primary-btn" onClick={() => navigate(`/challenges/join/${id}`)}>
              Join Challenge
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Created by: <span className="font-medium text-gray-700">{data.createdBy}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeDetails;