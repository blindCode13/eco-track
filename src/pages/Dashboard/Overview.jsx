import { FiTarget, FiActivity, FiUsers } from "react-icons/fi";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import LoadingState from "../../components/LoadingState";

const Overview = () => {
  const {user} = use(AuthContext);
  const {data: stats = [], isLoading} = useQuery({
    queryKey: ['totalChallenges'],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/userStats?email=${user.email}`);
      return result.data;
    }
  })
  console.log(stats);
  if (isLoading) return <LoadingState />
  return (
    <section className="w-full py-10 global-p-x">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
        Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">

        {/* My Challenges */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 mb-4">
            <FiTarget className="text-xl text-indigo-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900">{stats.totalChallenges}</div>
          <div className="text-sm text-gray-500 mt-1">
            My Challenges
          </div>
        </div>

        {/* Joined Challenges */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 mb-4">
            <FiActivity className="text-xl text-emerald-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900">{stats.joinedChallenges}</div>
          <div className="text-sm text-gray-500 mt-1">
            Joined Challenges
          </div>
        </div>

        {/* Total Participants */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-50 mb-4">
            <FiUsers className="text-xl text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900">{stats.participants}</div>
          <div className="text-sm text-gray-500 mt-1">
            Total Participants
          </div>
        </div>

      </div>
    </section>
  );
};

export default Overview;
