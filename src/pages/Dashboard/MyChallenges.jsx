import React, {use} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import LoadingState from '../../components/LoadingState';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MyChallenges = () => {
  const navigate = useNavigate();
	const {user} = use(AuthContext);
	const { data: myChallenges = [], isLoading } = useQuery({
    queryKey: ['createdBy'],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/challenges?email=${user.email}`);
      return result.data;
    },});

	if (isLoading) return <LoadingState/>
	
	return (
		<div>
			<div className="global-p-x py-10 bg-gray-50">

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						My Challenges
					</h2>

					{
					myChallenges.length === 0 && "No challenges found."
				}
					<div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
						{
						!isLoading && myChallenges.map(item => <Challenges key={
								item._id
							}
							data={item}
							navigate={navigate}></Challenges>)
					} </div>
				</section>
			</div>
		</div>
	);
};

const Challenges = ({data, navigate}) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              {data.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Created by you • Duration: {data.duration}
            </p>

            <div className="mt-4 flex items-center gap-4">
                <button className="primary-btn w-full" onClick={() => navigate(`/challenges/${data._id}`)}>
                    View Details
                </button>
                <button className="secondery-btn w-full" onClick={() => navigate(`/dashboard/edit-challenge/${data._id}`)}>
                    Edit
                </button>
            </div>
          </div>
    );
};

export default MyChallenges;
