import { useQuery } from "@tanstack/react-query";
import LoadingState from "../components/LoadingState";
import TipsCard from "../components/TipsCard";
import axios from "axios";

const Tips = () => {
	const {data: tips = [], isLoading} = useQuery({
      queryKey: ['tips'],
      queryFn: async () => {
        const result = await axios(`${import.meta.env.VITE_API_URL}/tips`, {params: {dataLimit: 0}});
        return result.data;
      }
    });

	if (isLoading) { return <LoadingState></LoadingState> };

	return (
		<div className="global-p-x">
            <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">Eco Tips</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{
				    tips.map(item => <TipsCard data={item} key={item._id}></TipsCard>)
			    } 
            </div>
		</div>
	);
};

export default Tips;
