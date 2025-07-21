
import { useRef, useEffect } from 'react';

export const ClientData = ({ isOpen, onCloseDialog, onSaveDialog }) => {
    // referencia del diálogo.
    const dialogRef = useRef(null);

    // useEffect que evalúa isOpen para abrir o cerrar
    useEffect(() => {
        if (dialogRef.current) {
            if (isOpen) {
                dialogRef.current.showModal();
            } else {
                dialogRef.current.close();
            }
        }
    }, [isOpen]);



    // cambio de datos del cliente pasada desde InvoiceApp
    const onDialogSubmitted = (e) => {
        e.preventDefault();
        const newClientData = {
            name: clientName.value,
            fiscalNumber: fiscalNumber.value,
            address: {
                country: "España",
                city: city.value,
                street: street.value,
                number: number.value,
                cp: postal.value
            }
        }
        onSaveDialog(newClientData);
        onCloseDialog();
    };

    return (
        <>
            <dialog ref={dialogRef} onCancel={onCloseDialog} className="p-4 border rounded shadow">
                <h2 className="mb-4 text-center">Datos del Cliente</h2>
                <form onSubmit={onDialogSubmitted}>
                    {/* Grupo de formulario para Nombre */}
                    <div className="mb-3">
                        <label htmlFor="clientName" className="form-label">Nombre:</label>
                        <input
                            type="text"
                            id="clientName"
                            name="name"
                            className="form-control"
                            placeholder='Introduce el nombre'
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fiscalNumber" className="form-label">Número Fiscal:</label>
                        <input
                            type="text"
                            id="fiscalNumber"
                            name="fiscalNumber"
                            className="form-control"
                            placeholder='Introduce CIF'
                        />
                    </div>

                    <h3 className="mt-4 mb-3 text-center">Dirección</h3>

                    {/* Grupo de formulario para Calle */}
                    <div className="mb-3">
                        <label htmlFor="street" className="form-label">Calle:</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            placeholder='Introduce calle'
                            className="form-control"
                        />
                    </div>

                    {/* Grupo de formulario para Número */}
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Número:</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            className="form-control"
                            placeholder='Introduce el número'
                        />
                    </div>

                    {/* Grupo de formulario para Ciudad */}
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">Ciudad:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder='Introduce ciudad'
                            className="form-control"
                        />
                    </div>

                    {/* Grupo de formulario para Código Postal */}
                    <div className="mb-3">
                        <label htmlFor="postal" className="form-label">Código postal:</label>
                        <input
                            type="text"
                            id="postal"
                            name="postal"
                            placeholder='Introduce CP'
                            className="form-control"
                        />
                    </div>

                    <div className="d-flex justify-content-end mt-4">

                        <button
                            type="submit"
                            className="btn btn-primary me-2"
                        >
                            Guardar Cambios
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary me-2"
                            onClick={onCloseDialog}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </dialog>
        </>

    );
}

