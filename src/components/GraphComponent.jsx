import React, { useEffect, useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const GraphComponent = ({ selectedPatient }) => {
    if (!selectedPatient) {
        return (
            <div className="bg-white p-4 rounded-lg my-2 shadow-md h-1/5">
                <p className="text-gray-500">Select a patient to see details.</p>
            </div>
        );
    }
    const initialState={
        labels:[],
        systolic:[],
        diastolic:[],
    }

    const [data,setData]=useState(initialState)
    

    useEffect(()=>{
        const labels = selectedPatient.diagnosis_history.map((reading) => `${reading.month}-${reading.year}`);
        const systolic = selectedPatient.diagnosis_history.map((reading) => reading.blood_pressure.systolic.value);
        const diastolic = selectedPatient.diagnosis_history.map((reading) => reading.blood_pressure.diastolic.value);

    setData({labels, systolic, diastolic});
    },[selectedPatient])
    console.log(data)
    
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Systolic',
                data: data.systolic,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
            },
            {
                label: 'Diastolic',
                data: data.diastolic,
                borderColor: 'rgba(192, 75, 192, 1)',
                backgroundColor: 'rgba(192, 75, 192, 0.2)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Blood Pressure' },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md  ">
            <h1 className='text-3xl font-bold m-2 mb-5'>Diagnosis History</h1>
            <div className='flex'>
            <span className='grow'><Line className='grow' data={chartData} options={options} /></span>
            <div className='flex flex-col mt-5 ml-4'>
            <div >
                <div className='flex'>
                    <FaCircle className='m-1 text-blue-300'/>
                    <div>Systolic</div>
                </div>
            <div className='ml-2 text-xl font-semibold'>{selectedPatient.diagnosis_history[0].blood_pressure.systolic.value}</div>
            <div className='flex'><FaChevronCircleUp className='text-xs m-1'/>
            <div className='text-xs '>{selectedPatient.diagnosis_history[0].blood_pressure.systolic.levels}</div></div>
            </div>
            <hr className='mt-2 mb-2'></hr>
            <div>
                <div className='flex'>
                    <FaCircle className='m-1 text-purple-300'/>
                    <div>Diastolic</div>
                </div>
            <div className='ml-2 text-xl font-semibold'>{selectedPatient.diagnosis_history[0].blood_pressure.diastolic.value}</div>
            <div className='flex'><FaChevronCircleDown className='text-xs m-1'/>
            <div className='text-xs '>{selectedPatient.diagnosis_history[0].blood_pressure.diastolic.levels}</div></div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default GraphComponent;
