import LoadingState from '../components/LoadingState';
import ChallengesCard from '../components/ChallengesCard';
import useFetchedData from '../hooks/useFetchedData';

const Challenges = () => {
    const [data, loading] = useFetchedData("/challenges", {params: { dataLimit: 0 }});
    if (loading) { return <LoadingState></LoadingState> };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 global-p-x">
            {
                data.map(item => <ChallengesCard data={item} key={item._id}></ChallengesCard>)
            }
        </div>
    );
};

export default Challenges;