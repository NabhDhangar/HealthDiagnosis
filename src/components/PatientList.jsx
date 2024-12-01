import React from 'react';
import { FaSearch } from "react-icons/fa";

const PatientList = ({ patients, onSelectPatient }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-full">
            <div className="flex flex-col-2 place-content-between">
                <div className="text-lg font-bold mb-3">Patients </div>
                <div><FaSearch /></div>
            </div>
            
            <ul className="space-y-2">
                {patients.map((patient, index) => (
                    <li
                        key={index}
                        className="cursor-pointer p-2 rounded hover:bg-gray-100"
                        onClick={() => onSelectPatient(patient)}
                    >
                        <div className='flex'>
                            <img src={patient.profile_picture} width="35px"></img>
                            <div className='text-xs ml-2'>
                                <div className='text-md'>{patient.name}</div>
                                {patient.gender} , {patient.age}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
