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
        setItems([...items,item]);
        setCounter(counter + 1);
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
                    <section className="row m-3">
                        <ItemsTable items={items} />
                        <ItemsTotal total={total} />
                    </section>
                    <section className="row  mx-auto w-50">
                        <FormItem submitHandler={onFormSubmitted}/>
                    </section>


                </div >
            </div >

        </>
    );
}