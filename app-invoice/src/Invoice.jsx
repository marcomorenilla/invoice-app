import { useState } from "react";
import { Details } from "./components/Details";
import { FormItem } from "./components/FormItem";
import { ItemsTable } from "./components/ItemsTable";
import { getInvoice } from "./service/getInvoice";

export const Invoice = () => {
    const { total,name, vendor, client, items } = getInvoice();
    const [counter, setCounter] = useState(4);
    return (
        <>
            <div className="card m-3">
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
                    <section className="container m-3">
                        <ItemsTable items={items} total={total}/>
                    </section>
                    <section className="container m-3">
                        <FormItem />
                    </section>


                </div >
            </div >

        </>
    );
}