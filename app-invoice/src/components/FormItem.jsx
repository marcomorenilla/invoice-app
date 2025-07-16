export const FormItem = ({ submitHandler }) => {


    return (
        <>
            <form onSubmit={event => {
                event.preventDefault();
                const prod = product.value
                const pri = price.value
                const quant = quantity.value
                const iva = vat.value
                if (prod.length > 0 && pri.length > 0 && quant.length > 0) {
                    console.log('not empty fields');
                    if (!(isNaN(pri) || isNaN(quant)|| isNaN(iva))) {
                        const item = {
                            product: prod,
                            quantity: Number(quant),
                            price: Number(pri),
                            iva: Number(iva)
                        }
                        submitHandler(item);
                        product.value = "";
                        price.value = "";
                        quantity.value = "";
                        vat.value = ""
                    } else {
                        alert('Precio, cantidad e IVA deben ser números sin símbolos ni otros caracteres');
                    }
                } else {
                    alert('Hay que rellenar los campos antes de añadir');
                }

            }}>
                <input
                    type="text"
                    id="product"
                    name="product"
                    placeholder="Producto"
                    className="form-control form-control-lg m-3" />
                <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Precio"
                    className="form-control form-control-lg m-3" />
                <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="Cantidad"
                    className="form-control form-control-lg m-3" />
                <input
                    type="text"
                    id="vat"
                    name="vat"
                    placeholder="IVA"
                    className="form-control form-control-lg m-3" />
                <button className="btn btn-primary btn-lg m-3"> Añadir </button>
            </form>
        </>
    );
} 