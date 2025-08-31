import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className='flex gap-5 bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30 items-center'>
      <button
        className='block lg:hidden text-black'
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className='text-2xl' />
        ) : (
          <HiOutlineMenu className='text-2xl' />
        )}
      </button>

      <h2 className='text-lg font-medium text-black'>TaskForge</h2>

      {openSideMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-10"
            onClick={() => setOpenSideMenu(false)}
          />
          <div className='fixed top-[61px] left-0 bg-white z-20 shadow-md'>
            <SideMenu activeMenu={activeMenu} />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
