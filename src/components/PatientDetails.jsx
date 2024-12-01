import React from 'react';
import { CiCalendar } from "react-icons/ci";
import { CgGenderFemale } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";
import { AiOutlineFileProtect } from "react-icons/ai";

const PatientDetails = ({ selectedPatient }) => {
    if (!selectedPatient) {
        return (
            <div className="bg-white p-4 rounded-lg shadow-md h-2/5 mb-2">
                <p className="text-gray-500">Select a patient to see details.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md  " >
            <div className='flex-col items-center justify-items-center'><img src={selectedPatient.profile_picture}
                alt='Img'
            />
            <h2 className="text-lg font-bold mb-4">{selectedPatient.name}</h2></div>
            <div className="flex flex-col flex-wrap gap-3"><div className="flex">
                <div ><CiCalendar className='h-10 w-7'/></div>
                <div className='flex-col ml-3'>
                    <div className='text-sm'>Date of Birth:</div>
                    <div>{selectedPatient.date_of_birth}</div>
                </div>
            </div>
            <div className="flex">
                <div ><CgGenderFemale className='h-10 w-7'/></div>
                <div className='flex-col ml-3'>
                    <div className='text-sm'>Gender:</div>
                    <div>{selectedPatient.gender}</div>
                </div>
            </div>
            <div className="flex">
                <div ><IoMdCall className='h-10 w-6'/></div>
                <div className='flex-col ml-3'>
                    <div className='text-sm'>Contact Info:</div>
                    <div>{selectedPatient.phone_number}</div>
                </div>
            </div>
            <div className="flex">
                <div className=''><IoMdCall className='h-10 w-6'/></div>
                <div className='flex-col ml-3'>
                    <div className='text-sm'>Emergency Contacts:</div>
                    <div>{selectedPatient.emergency_contact}</div>
                </div>
            </div>
            <div className="flex">
                <div ><AiOutlineFileProtect className='h-10 w-7'/></div>
                <div className='flex-col ml-3'>
                    <div className='text-sm'>Insurance Provider:</div>
                    <div>{selectedPatient.insurance_type}</div>
                </div>
            </div></div>
            <button className='hover:text-gray-300 bg-blue-300 p-2 rounded-full m-5'>Show All Information</button>
        </div>
    );
};

export default PatientDetails;
