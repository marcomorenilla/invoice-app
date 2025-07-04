import { useState } from "react";
import { Details } from "./components/Details";
import { ItemsTotal } from "./components/ItemsTotal";
import { FormItem } from "./components/FormItem";
import { ItemsTable } from "./components/ItemsTable";
import { getInvoice } from "./service/getInvoice";

export const Invoice = () => {
    const { total, name, vendor, client, items: initialItems } = getInvoice();
    
    const [items, setItems] = useState(initialItems);
    const [counter, setCounter] = useState(4);

    
    const onFormSubmitted = () =>{
        const prod = product.value
        const pri = price.value
        const quant = quantity.value
        if(prod.length >0 && pri.length > 0 && quant.length > 0){
            console.log('not empty fields');
            if (!(isNaN(pri)|| isNaN(quant))){
                setItems([...items, {
                    id: counter,
                    product: prod,
                    quantity: Number(quant),
                    price: Number(pri) 
                }])
                setCounter(counter + 1)
                console.log(`items: ${initialItems.length}, counter: ${counter}`)
                
            } else{
                alert('Precio y cantidad deben ser números');
            }
        }else{
            alert('Hay que rellenar los campos antes de añadir');
        }
    }
        

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
                    <section className="row m-3">
                        <ItemsTable items={items}/>
                        <ItemsTotal total={total} />
                    </section>
                    <section className="row justify-content-center text-center m-3">
                    
                        <form 
                        className="w-50"
                        onSubmit={event => {
                            event.preventDefault();
                            onFormSubmitted()
                        }}>
                            <input
                                type="text"
                                id="product"
                                name="product"
                                placeholder="Producto"
                                className="form-control m-3"/>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                placeholder="Precio"
                                className="form-control m-3"  />
                            <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                placeholder="Cantidad"
                                className="form-control m-3"  />
                            <button className="btn btn-primary m-3"> Añadir </button>
                        </form> 
                        
                    </section>


                </div >
            </div >

        </>
    );
}