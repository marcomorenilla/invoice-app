import { ItemsRow } from "./ItemsRow";


export const ItemsTable = ({ items, handler }) => {

    return (
        <>
            <table className="table fs-4 text-center table-hover table-striped">
                <thead>
                    <tr>
                        <th className="fs-2" colSpan={5}>Artículos</th>
                    </tr>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(({ id, product, price, quantity }) => (
                            <ItemsRow key={id} id={id} product={product} price={price} quantity={quantity} handler={handler}/>
                        ))
                    }

                </tbody>
                

            </table>
            
        </>
    );
}