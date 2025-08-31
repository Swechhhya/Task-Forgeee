import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  return (
    <>
      <Navbar activeMenu={activeMenu} />
      <div className='flex'>
        <div className='max-[1080px]:hidden'>
          <SideMenu activeMenu={activeMenu} />
        </div>
        <div className='grow mx-5 mt-4'>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
