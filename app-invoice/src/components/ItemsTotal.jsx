export const ItemsTotal = ({ total }) => {
    return (
        <>
            <tr className="fw-bold fs-2">
                <td colSpan={4}>Total</td>
            </tr>
            <tr className="fs-2 table-success">
                <td colSpan={4}>{total} €</td>
            </tr>
        </>
    );
}