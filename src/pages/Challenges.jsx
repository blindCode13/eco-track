import LoadingState from '../components/LoadingState';
import ChallengesCard from '../components/ChallengesCard';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Challenges = () => {
    const [filters, setFilters] = useState({});

    const applyFilters = (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const startDate = e.target.startDate.value;
        const endDate = e.target.endDate.value;
        const minParticipant = e.target.minParticipant.value;
        const maxParticipant = e.target.maxParticipant.value;

        setFilters({
            category, startDate, endDate, minParticipant, maxParticipant
        });
        
    };

    const {data = [], isLoading} = useQuery({
      queryKey: [filters],
      queryFn: async () => {
        const result = await axios(`${import.meta.env.VITE_API_URL}/challenges?filters=${JSON.stringify(filters)}`, {params: { dataLimit: 0 }});
        return result.data;
      }
    });


    return (
        <>
        <div>
            <div className="w-fit mx-auto bg-white shadow rounded-xl p-6 mb-8">

      <form className="flex items-center justify-center flex-col lg:flex-row gap-10 w-full" onSubmit={applyFilters}>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">
            Filter by Category
          </span>
          <select
          name='category'
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-48"
          >
            <option value="">Select Category</option>
            <option value="Waste Reduction">Waste Reduction</option>
            <option value="Energy Conservation">Energy Conservation</option>
            <option value="Green Living">Green Living</option>
            <option value="Sustainable Transport">Sustainable Transport</option>
            <option value="Water Conservation">Water Conservation</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-center text-gray-700">
            Filter by Date Range
          </span>
          <div className="flex items-center gap-2">
            <input
              type="date"
              name='startDate'
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />

            <span className="text-gray-500 text-sm">to</span>

            <input
              type="date"
              name='endDate'
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-center text-gray-700">
            Filter by Participants
          </span>

          <div className="flex items-center gap-2">
            <input
              type="number"
              name='minParticipant'
              placeholder="Min"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-20"
            />

            <span className="text-gray-500 text-sm">to</span>

            <input
              type="number"
              placeholder="Max"
              name='maxParticipant'
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-20"
            />
          </div>
        </div>

        <div className="flex items-end">
          <button className="primary-btn px-6 py-2 text-sm" type='submit'>
            Apply
          </button>
        </div>

      </form>
    </div>
        </div>
        {
            isLoading && <LoadingState></LoadingState>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 global-p-x">
            {
                data.map(item => <ChallengesCard data={item} key={item._id}></ChallengesCard>)
            }
        </div>
        </>
    );
};

export default Challenges;