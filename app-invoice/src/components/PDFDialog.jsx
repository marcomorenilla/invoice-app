import { useRef, useEffect } from 'react';

export const PDFDialog = ({ isOpen, url, onCloseDialog }) => {
    // ref del dialog
    const dialogRef = useRef(null);

    // Decide si mostrar o cerrar en función del cambio de isOpen
    useEffect(() => {
        if (dialogRef.current) {
            if (isOpen) {
                dialogRef.current.showModal();
            } else {
                dialogRef.current.close();
            }
        }
    }, [isOpen]);


    return (<>
        <dialog ref={dialogRef} className="rounded p-4 border shadow">
            <p className="mb-3">Factura creada correctamente.</p>
            <a
                href={url}
                download="factura.pdf"
                className="btn btn-primary me-2"
            >
                Descargar factura
            </a>
            <button className="btn btn btn-outline-primary" onClick={onCloseDialog}>
                Cerrar
            </button>
        </dialog>
    </>)
}