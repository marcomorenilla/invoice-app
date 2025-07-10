export const ItemsTotal = ({ total }) => {
    return (
        <>
            <table className="table fs-4 text-center table-hover w-50 mx-auto">
                <thead>
                    <tr className="fs-2">
                        <th colSpan={4}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="fs-2 table-success">
                        <td colSpan={4}>{total} €</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}