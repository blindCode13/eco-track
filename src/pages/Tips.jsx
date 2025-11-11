import {useLoaderData} from "react-router";
import TipsCard from "../components/TipsCard";

const Tips = () => {
	const Data = useLoaderData()
	return (
		<div className="global-p-x">
            <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">Eco Tips</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{
				    Data.map(item => <TipsCard data={item}></TipsCard>)
			    } 
            </div>
		</div>
	);
};

export default Tips;
