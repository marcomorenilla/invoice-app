export const VendorClientDetails = ({title ,name, fiscalNumber, address:{city, street, number, cp}}) => {

    return (
    <>
    <div className="col">
        <h2 className="text-center fw-bold m-3">{title}:</h2>
        <ul className="list-group m-3">
            <li className="list-group-item list-group-item-primary fw-bold fs-3">{name}</li>
            <li className="list-group-item fs-5"> <b>CIF: </b>{fiscalNumber}</li>
            <li className="list-group-item fs-5"><b>Dirección:</b> {street}, {number}</li>
            <li className="list-group-item fs-5"><b>Ciudad:</b> {city}</li>
            <li className="list-group-item fs-5"><b>Código postal:</b> {cp}</li>
        </ul>
    </div>
    </>
    );
}