import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';
import PatientList from '../components/PatientList.jsx';
import GraphComponent from '../components/GraphComponent.jsx';
import PatientDetails from '../components/PatientDetails.jsx';
import { CheckUp } from '../components/CheckUp.jsx';
import { DiagnosticList } from '../components/DiagnosticList.jsx';
import { LabResults } from '../components/LabResults.jsx';

const Dashboard = () => {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        const username = 'coalition';
        const password = 'skills-test';

        axios
            .get('https://fedskillstest.coalitiontechnologies.workers.dev', {
                headers: {
                    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
                },
            })
            .then((response) => {
                setPatients(response.data);
            })
            .catch((error) => console.error('Error fetching patient data:', error));
    }, []);
    // console.log(patients)

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar doctorName="Dr. Smith" speciality="Cardiologist" />
            <div className="p-6 grid grid-cols-12 gap-4">
                
                <div className="col-span-3">
                    <PatientList
                        patients={patients}
                        onSelectPatient={setSelectedPatient}
                    />
                </div>

                <div className="col-span-6">
                    <GraphComponent selectedPatient={selectedPatient} />
                    <CheckUp selectedPatient={selectedPatient}/>
                    <DiagnosticList
                        selectedPatient={selectedPatient}
                    />
                </div>

                
                <div className="col-span-3">
                    <PatientDetails selectedPatient={selectedPatient} />
                    <LabResults selectedPatient={selectedPatient} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
