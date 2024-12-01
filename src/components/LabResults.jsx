import { MdOutlineFileDownload } from "react-icons/md";
export const LabResults=({selectedPatient})=>{
    if (!selectedPatient) {
        return (
            <div className="bg-white p-4 rounded-lg shadow-md h-1/3">
                <p className="text-gray-500">Select a patient to see details.</p>
            </div>
        );
    }
    return(
        <div className="bg-white p-6 rounded-lg shadow-md mt-2">
            <h1 className="text-lg font-bold mb-5">Lab Results</h1>
            {
                selectedPatient.lab_results.map((currElem,index)=>{
                    return(<div className=" flex flex-col-2 place-content-between mt-3">
                        <div>{currElem}</div>
                        <MdOutlineFileDownload className="text-xl mt-1"/>
                        </div>
                    )
                })
            }
        </div>
    )
}