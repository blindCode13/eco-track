import Sidebar from '../components/Dashboard/Sidebar';
import { Outlet } from 'react-router';
import TopBar from '../components/Dashboard/TopBar';
import { ToastContainer } from 'react-toastify';

const DashboardLayout = () => {
    return (
        <div className='w-full'>
            <TopBar></TopBar>
            <Sidebar></Sidebar>
            <div className='pl-16 md:pl-55 pt-24'>
                <Outlet></Outlet>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DashboardLayout;