import React from 'react';
import { useAppDispatch } from "../app/hooks"
import { AiOutlineAlignRight } from "react-icons/ai";
import { toggleSidebar } from '../features/navigation/sideBarSlice';

const Header: React.FC = () => {
    const dispatch = useAppDispatch()

    const toggleSidebarHandler = () => {
        dispatch(toggleSidebar())
    }

    return <div className="shadow-lg bg-white sticky top-0 z-10 flex-1 p-10 flex justify-between align-middle">
        <div className="hidden md:block">menus here</div>
        <div className=""><p className="text-2xl">Tie&Dye Zone</p></div>
        <div className="hidden md:block">icons here</div>
        <div className="cursor-pointer md:hidden" onClick={toggleSidebarHandler}>
            <AiOutlineAlignRight size={25} />
        </div>
    </div>;
};

export default Header;
