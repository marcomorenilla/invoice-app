import { invoice } from "../data/data";

export function getInvoice() {
    const total = sumTotal(invoice.items);
    return { ...invoice, total };
}

export function sumTotal(items = []) {
    return items.map(({ price, quantity }) => price * quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue,0);
}