import { useEffect, useState } from "react";
import { Details } from "./components/Details";
import { ItemsTotal } from "./components/ItemsTotal";
import { FormItem } from "./components/FormItem";
import { ItemsTable } from "./components/ItemsTable";
import { getInvoice, sumTotal } from "./service/getInvoice";

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
            number: ''
        }
    },
    client: {
        name: '',
        fiscalNumber: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: ''
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

    useEffect(() => {
        console.log('fetching data...')
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items);
    }, [])

    useEffect(() => {
        console.log('computing total...')
        setTotal(sumTotal(items));
    }, [items])


    const { name, vendor, client } = invoice;

    const onFormSubmitted = (item) => {
        item.id = counter;
        setItems([...items, item]);
        setCounter(counter + 1);
    }

    const onItemRemoved = (id) => {
        setItems(items.filter(item => item.id != id))
    }

    return (
        <>
            <div className="card m-5">
                <div className="card-boody">
                    <h1 className="card-header text-center mb-3">{name}</h1>
                    <section className="container">
                        <div className="row">
                            <Details
                                title="Datos Empresa"
                                name={vendor.name}
                                fiscalNumber={vendor.fiscalNumber}
                                address={vendor.address}
                            />
                            <Details
                                title="Datos Cliente"
                                name={client.name}
                                fiscalNumber={client.fiscalNumber}
                                address={client.address}
                            />
                        </div>
                    </section>
                    <section className="row mx-auto w-75">
                        <ItemsTable items={items} handler={onItemRemoved} />
                        <ItemsTotal total={total} />
                    </section>
                    <section className="row  mx-auto w-50">

                        <button className="btn border-0"
                            onClick={() => setVisible(!isVisible)}
                        >
                            {isVisible ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"></path>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"></path>
                            </svg>}
                        </button>
                        {isVisible ? <FormItem submitHandler={onFormSubmitted} /> : ''}


                    </section>


                </div >
            </div >

        </>
    );
}