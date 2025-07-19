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

        // Espera el blob del PDF
        const blob = await response.blob();

        // Crea un enlace de descarga
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        // Nombre por defecto del archivo
        link.setAttribute('download', 'factura.pdf');

        document.body.appendChild(link);
        link.click();
        link.remove();

        // Limpia el objeto URL creado
        window.URL.revokeObjectURL(url);

        return { success: true, message: 'PDF descargado correctamente.' };
    } catch (error) {
        console.error('Error al enviar el PDF:', error);
        return { success: false, message: `Error al enviar la factura: ${error.message}` };
    }

}
