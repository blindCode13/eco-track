import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router';
import LoadingState from '../../components/LoadingState';

const MyTasks = () => {
  const {user} = use(AuthContext);
  const navigate = useNavigate();
  const { data: ongoingChallenges = [], isLoading } = useQuery({
    queryKey: ['userId'],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/userChallenges?&userId=${user.email}`);
      return result.data;
    },});

    if (isLoading) return <LoadingState />
  return (
     <div className="global-p-x py-10 bg-gray-50">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Ongoing Challenges
        </h2>
            {
                ongoingChallenges.length === 0 && "No challenges found."
            }
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            {
                ongoingChallenges.map(item => <TaskChallenge key={item.challengeId} data={item} navigate={navigate}></TaskChallenge>)
            }
        </div>
      </section>
    </div>
  );
};

const TaskChallenge = ({data, navigate}) => {
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

      <button className="primary-btn w-full mt-4" onClick={() => navigate(`/dashboard/track-challenge/${data.challengeId}`)}>
        Track Progress
      </button>
    </div>
  );
};

export default MyTasks;