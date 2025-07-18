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
            // If response is not OK, try to get error message from server
            const errorText = await response.text(); // Get raw text to avoid JSON.parse error
            throw new Error(`Error en el servidor: ${response.status} - ${errorText || 'Respuesta no OK'}`);
        }

        // Check if the response has content before trying to parse as JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            console.log(data);
            return { success: true, message: 'Factura enviada correctamente', data };
        } else {
            // If server responds with non-JSON (e.g., success message as plain text)
            const textResponse = await response.text();
            console.log(textResponse);
            return { success: true, message: `Factura enviada correctamente: ${textResponse}`, data: {} };
        }

    } catch (error) {
        console.error('Error al enviar el PDF:', error);
        return { success: false, message: `Error al enviar la factura: ${error.message}` };
    }

}
