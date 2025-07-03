import { invoice } from "../data/data";

export function getInvoice(){
    const total = invoice.items
    .map(({price, quantity})=> price * quantity)
    .reduce((accumulator, currentValue)=> accumulator + currentValue);
    return {...invoice, total};
}