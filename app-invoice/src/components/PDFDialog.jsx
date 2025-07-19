import { useRef, useEffect } from 'react';

export const PDFDialog = ({ isOpen, url, setUrl, onCloseDialog }) => {
    const dialogRef = useRef(null);

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
                className="btn btn-success me-2"
            >
                Descargar factura
            </a>
            <button className="btn btn-secondary" onClick={()=>{
                onCloseDialog;
            }}>
                Cerrar
            </button>
        </dialog>
    </>)
}