import LoadingState from "../components/LoadingState";
import TipsCard from "../components/TipsCard";
import useFetchedData from "../hooks/useFetchedData";

const Tips = () => {
	const [data, loading] = useFetchedData("/tips", {params: { dataLimit: 0 }});
	if (loading) { return <LoadingState></LoadingState> };

	return (
		<div className="global-p-x">
            <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">Eco Tips</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{
				    data.map(item => <TipsCard data={item} key={item._id}></TipsCard>)
			    } 
            </div>
		</div>
	);
};

export default Tips;
