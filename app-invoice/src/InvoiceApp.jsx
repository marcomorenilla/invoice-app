import { useEffect, useState } from "react";
import { VendorClientDetails } from "./components/VendorClientDetails";
import { ItemsTotal } from "./components/ItemsTotal";
import { FormItem } from "./components/FormItem";
import { ItemsTable } from "./components/ItemsTable";
import { getInvoice, sendPdf, sumTotal } from "./service/getInvoice";
import { ClientData } from "./components/ClientData";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { PDFDialog } from "./components/PDFDialog";

const invoiceTpl = {
    id: 0,
    name: '',
    vendor: {
        name: '',
        fiscalNumber: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: '',
            cp: ''
        }
    },
    client: {
        name: '',
        fiscalNumber: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: '',
            cp: ''
        }
    },
    items: []
}

export const InvoiceApp = () => {


    const [invoice, setInvoice] = useState(invoiceTpl);
    const [items, setItems] = useState(invoiceTpl.items);
    const [counter, setCounter] = useState(4);
    const [total, setTotal] = useState(0);
    const [isVisible, setVisible] = useState(false);
    const [isClientDialogOpen, setIsClientDialogOpen] = useState(false);
    const [isInvoiceDialogOpen, setInvoiceDialogOpen] = useState(false);
    const [client, setClient] = useState(invoiceTpl.client);
    const [number, setNumber] = useState(0);
    const [date, setDate] = useState('');
    const [link, setLink] = useState(null);

    useEffect(() => {
        console.log('fetching data...')
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items);
        setClient(data.client);
        setNumber(data.number);
        setDate(data.date);
    }, [])

    useEffect(() => {
        console.log('computing total...')
        const newTotal = sumTotal(items);
        setTotal(newTotal)
        setInvoice(prevInvoice => ({
            ...prevInvoice,
            items,
            total: newTotal
        }));
    }, [items])

    useEffect(() => {
        console.log(invoice);
    }, [invoice])

    useEffect(() => {
        console.log(client);
        setInvoice(prevInvoice => (
            { ...prevInvoice, client }
        ));
    }, [client])

    const { name, vendor } = invoice;

    const openClientDialog = () => setIsClientDialogOpen(true);
    const closeClientDialog = () => setIsClientDialogOpen(false);

    const openInvoiceDialog = () => setInvoiceDialogOpen(true);
    const closeInvoiceDialog = () => setInvoiceDialogOpen(false);

    const onDialogSubmitted = (updatedClient) => {
        setClient(updatedClient);
        console.log(updatedClient);
    };

    const onFormSubmitted = (item) => {
        item.id = counter;
        const updatedItems = [...items, item];
        setItems(updatedItems);
        setCounter(counter + 1);
        console.log(invoice)

    }

    const onItemRemoved = (id) => {
        setItems(items.filter(item => item.id != id))
    }

    const handleDetailsChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'invDate':
                setDate(value);
                break;
            default:
                setNumber(value);
        }
    }

    const handleSendPDF = () => {
        const finalInvoice = { ...invoice, date, number }
        if (number == 0) {
            alert('El número de factura no puede estar vacío o ser 0');
        } else if (date == '') {
            alert('La fecha no puede estar vacía');
        } else {
            const url = sendPdf(finalInvoice);
            setLink(url);
            if (url) {
                openInvoiceDialog();
            }
            //alert(`Factura enviada correctamente ${JSON.stringify(finalInvoice, null, 2)}`)
        }
    }

    return (
        <>
            <div className="card m-5">
                <div className="card-boody">
                    <h1 className="card-header text-center mb-3">{name}</h1>
                    <section className="container">
                        <div className="row m-3">
                            <InvoiceDetails handleDetailsChange={handleDetailsChange} />
                        </div>
                        <div className="row">
                            <VendorClientDetails
                                title="Datos Empresa"
                                name={vendor.name}
                                fiscalNumber={vendor.fiscalNumber}
                                address={vendor.address}
                            />
                            <VendorClientDetails
                                title="Datos Cliente"
                                name={client.name}
                                fiscalNumber={client.fiscalNumber}
                                address={client.address}
                            />

                        </div>

                        <div className="row m-3">
                            <div className="col text-end ">
                                <button className="btn btn-primary btn-lg" onClick={openClientDialog}>
                                    Editar Cliente
                                </button>
                            </div>
                        </div>

                        <ClientData
                            isOpen={isClientDialogOpen}
                            onCloseDialog={closeClientDialog}
                            onSaveDialog={onDialogSubmitted} />

                    </section>
                    <section className="row mx-auto w-75">
                        <ItemsTable items={items} handler={onItemRemoved} />
                        <ItemsTotal total={total} />
                    </section>
                    <section className="row  mx-auto w-50">

                        <button className="btn border-0"
                            onClick={() => setVisible(!isVisible)}
                        >
                            {isVisible ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"></path>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"></path>
                            </svg>}
                        </button>
                        {isVisible ? <FormItem submitHandler={onFormSubmitted} /> : ''}

                    </section>
                </div >

            </div >
            <section>
                <div className="row mx-auto mb-3 w-50">
                    <button className="btn btn-primary btn-lg"
                        onClick={handleSendPDF}> Enviar PDF</button>
                </div>
                <PDFDialog isOpen={isInvoiceDialogOpen} url={link} setUrl={setLink} onCloseDialog={closeInvoiceDialog} />
            </section>


        </>
    );
}