import { useLoaderData } from "react-router";
import EventsCard from "../components/EventsCard";

const Events = () => {
    const Data = useLoaderData()
	return (
		<div className="global-p-x">
			<h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">Events</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{
				    Data.map(item => <EventsCard data={item}></EventsCard>)
			    } 
            </div>
		</div>
	);
};

export default Events;
