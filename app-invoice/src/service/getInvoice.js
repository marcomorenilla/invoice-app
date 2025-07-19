import { invoice } from "../data/data";

export function getInvoice() {
    const total = sumTotal(invoice.items);
    return { ...invoice, total };
}

export function sumTotal(items = []) {
    return items.map(({ price, quantity }) => price * quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export async function sendPdf(invoice = {}) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invoice)
    };

    try {
        const response = await fetch('http://localhost:8081/api/pdf', requestOptions);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error en el servidor: ${response.status} - ${errorText || 'Respuesta no OK'}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        return url;
    } catch (error) {
        console.error('Error al enviar el PDF:', error);
        return { success: false, message: `Error al enviar la factura: ${error.message}` };
    }

}
