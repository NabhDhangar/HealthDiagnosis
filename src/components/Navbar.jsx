import React from 'react';
import { CiSettings } from "react-icons/ci";

const Navbar = ({ doctorName, speciality }) => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            {/* Left Items */}
            <span>Logo</span>
            <ul className="flex space-x-4">
                <li className="hover:text-gray-300 cursor-pointer">Overview</li>
                <li className="hover:text-gray-300 cursor-pointer bg-blue-400 p-0.5 rounded-full">Patient</li>
                <li className="hover:text-gray-300 cursor-pointer">Schedule</li>
                <li className="hover:text-gray-300 cursor-pointer">Message</li>
                <li className="hover:text-gray-300 cursor-pointer">Transactions</li>
            </ul>

            {/* Center - Doctor Info */}
            <div>
                <h1 className="text-lg font-bold">{doctorName}</h1>
                <p className="text-sm text-gray-400">{speciality}</p>
            </div>

            {/* Right - Settings */}
            <button >
            <CiSettings />
            </button>
        </nav>
    );
};

export default Navbar;
