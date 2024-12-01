export const DiagnosticList=({selectedPatient})=>{
    if (!selectedPatient) {
        return (
            <div className="bg-white p-4 rounded-lg shadow-md h-2/5">
                <p className="text-gray-500">Select a patient to see details.</p>
            </div>
        );
    }
    return(
        <div className="bg-white p-4 rounded-lg shadow-md mt-3 ">
            <h1 className="m-3 font-bold text-3xl mt-4 mb-8">Diagnostic List</h1>
            <table className="m-3  border-separate border-spacing-3 text-l p-2">
                <thead className="bg-gray-100 p-3">
                    <tr className="font">
                        <th>Problem/Diagnosis</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody >
                    {selectedPatient.diagnostic_list.map((currElem,index)=>{
                        return(
                            <tr className="text-left">
                                <th className="font-normal">{currElem.name}</th>
                                <th className="font-normal">{currElem.description}</th>
                                <th className="font-normal">{currElem.status}</th>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}