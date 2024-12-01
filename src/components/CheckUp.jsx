import { FaLungs } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";

export const CheckUp=({selectedPatient})=>{
    if (!selectedPatient) {
        return (
            <div className="bg-white p-4 rounded-lg my-2 shadow-md h-1/5">
                <p className="text-gray-500">Select a patient to see details.</p>
            </div>
        );
    }
    console.log(selectedPatient)
    return(
        <div className=" bg-white p-4 rounded-lg shadow-md flex flex-wrap gap-4 grid-rows-3 mt-2">
            <div className="bg-sky-100 p-5 rounded-lg shadow-md w-44">
                <FaLungs className="p-2 w-4/5 rounded-full h-2/5 text-sky-500 bg-white text-4xl "/>
                <div className="mt-3">Respiratory Rate</div>
                <div className="text-xl font-bold">{selectedPatient.diagnosis_history[0].respiratory_rate.value} bpm</div>
                <div className="text-sm mt-4">{selectedPatient.diagnosis_history[0].respiratory_rate.levels}</div>
            </div>
            <div className="bg-purple-100 p-5 rounded-lg shadow-md w-44">
                <FaTemperatureLow className="p-2 rounded-full w-4/5 h-2/5 text-purple-500 text-4xl bg-white"/>
                <div className="mt-3">Temperature</div>
                <div className="text-xl font-bold">{selectedPatient.diagnosis_history[0].temperature.value} °F</div>
                <div className="text-sm mt-4">{selectedPatient.diagnosis_history[0].temperature.levels}</div>
            </div>
            <div className="bg-red-100 p-5 rounded-lg shadow-md w-44">
                <FaHeartbeat className="p-2 rounded-full w-4/5 h-2/5 text-red-500 text-4xl bg-white"/>
                <div className="mt-3">Heart Rate</div>
                <div className="text-xl font-bold">{selectedPatient.diagnosis_history[0].heart_rate.value} bpm</div>
                <div className="text-sm mt-4">{selectedPatient.diagnosis_history[0].heart_rate.levels}</div>
            </div>
        </div>
    )
}