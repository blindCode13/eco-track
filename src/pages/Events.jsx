import { useQuery } from "@tanstack/react-query";
import EventsCard from "../components/EventsCard";
import LoadingState from "../components/LoadingState";
import axios from "axios";

const Events = () => {
	const {data: events = [], isLoading} = useQuery({
      queryKey: ['events'],
      queryFn: async () => {
        const result = await axios(`${import.meta.env.VITE_API_URL}/events`, {params: {dataLimit: 0}});
        return result.data;
      }
    });
		
	if (isLoading) { return <LoadingState></LoadingState> };

	return (
		<div className="global-p-x">
			<h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">Events</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{
				    events.map(item => <EventsCard data={item} key={item._id}></EventsCard>)
			    } 
            </div>
		</div>
	);
};

export default Events;
