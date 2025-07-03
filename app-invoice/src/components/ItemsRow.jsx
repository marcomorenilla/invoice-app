export const ItemsRow = ({ product, price, quantity }) => {
    return (
        <>
            <tr>
                <td>{product} </td>
                <td>{quantity}</td>
                <td>{price} € </td>
                <td>{price * quantity} €</td>
            </tr>
        </>
    )

}