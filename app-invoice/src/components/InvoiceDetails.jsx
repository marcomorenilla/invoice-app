export const InvoiceDetails = ({number}) => {
    return (
        <>
            <div className="d-flex justify-content-end"> 
                <div className="card" > 
                    <div className="card-body">
                        <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column ">
                            <h3 className="rounded text-bg-primary opacity-75 p-2">Fecha: </h3>
                            <input
                                type="date"
                                id="invDate"
                                name="invDate"
                                className="form-control form-control-lg ml-3 mb-3 w-80" /> 
                            <h3 className="rounded text-bg-primary opacity-75 p-2">Número de factura: </h3>
                            <input
                                type="text"
                                id="number"
                                name="number"
                                placeholder={number}
                                className="form-control form-control-lg ml-3 w-80" /> 
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}