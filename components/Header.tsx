import React from 'react';
import { AiOutlineAlignRight } from "react-icons/ai";

const Header: React.FC = () => {
    return <div className="bg-red-100 p-10 flex justify-between align-middle">
        <div className="hidden md:block">menus here</div>
        <div className=""><p className="text-2xl">Tie&Dye Zone</p></div>
        <div className="hidden md:block">icons here</div>
        <div className="cursor-pointer md:hidden">
            <AiOutlineAlignRight size={25} />
        </div>
    </div>;
};

export default Header;
