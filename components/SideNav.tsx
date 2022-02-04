import React from 'react';
import { useAppSelector } from '../app/hooks';


const SideNav: React.FC = () => {
  const isOpen = useAppSelector(state => state.sidebar.isOpen)

  return (
    <div className={`z-10 min-h-screen max-h-screen w-3/4 top-0 left-0 fixed bg-gray-50 shadow-xl ${isOpen ? "translate-x-0 " : "-translate-x-full"} ease-in-out duration-300 p-4 flex flex-col justify-items-center space-y-40 items-center`
    }>
      <div className=" ">
        <p className="text-3xl ">LOGO HERE</p>
      </div>
      <div className="w-full flex-col space-y-20 p-4 ">
        <p className="text-center text-3xl tracking-wider ">Home</p>
        <p className="text-center text-3xl tracking-wider ">About</p>
        <p className="text-center text-3xl tracking-wider ">Contact</p>
      </div>
    </div >
  )
};

export default SideNav;
