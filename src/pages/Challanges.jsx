import LoadingState from '../components/LoadingState';
import ChallangesCard from '../components/ChallangesCard';
import useFetchedData from '../hooks/useFetchedData';

const Challanges = () => {
    const [data, loading] = useFetchedData("/challanges", {params: { dataLimit: 0 }});
    if (loading) { return <LoadingState></LoadingState> };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 global-p-x">
            {
                data.map(item => <ChallangesCard data={item} key={item._id}></ChallangesCard>)
            }
        </div>
    );
};

export default Challanges;