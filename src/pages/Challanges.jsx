import Logo from '../assets/logo.png';
import { useLoaderData } from "react-router";
import LoadingState from '../components/LoadingState';
import ChallangesCard from '../components/ChallangesCard';

const Challanges = () => {
    const Data = useLoaderData()
    console.log(Data);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 global-p-x">
            {
                Data.map(item => <ChallangesCard data={item}></ChallangesCard>)
            }
        </div>
    );
};

export default Challanges;