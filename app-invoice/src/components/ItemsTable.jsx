import { ItemsRow } from "./ItemsRow";
import { ItemsTotal } from "./ItemsTotal";

export const ItemsTable = ({ items, total }) => {

    return (
        <>
            <table className="table fs-4 text-center table-hover table-striped">
                <thead>
                    <tr>
                        <th className="fs-1" colSpan={4}>Artículos</th>
                    </tr>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Subtotal</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(({ id, product, price, quantity }) => (
                            <ItemsRow key={id} product={product} price={price} quantity={quantity} />
                        ))
                    }
                    <ItemsTotal total={total}/>
                </tbody>


            </table>
        </>
    );
}