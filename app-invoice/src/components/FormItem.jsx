export const FormItem = ({ submitHandler }) => {


    return (
        <>
            <form onSubmit={event => {
                event.preventDefault();
                const prod = product.value
                const pri = price.value
                const quant = quantity.value
                if (prod.length > 0 && pri.length > 0 && quant.length > 0) {
                    console.log('not empty fields');
                    if (!(isNaN(pri) || isNaN(quant))) {
                        const item = {
                            product: prod,
                            quantity: Number(quant),
                            price: Number(pri)
                        }
                        submitHandler(item);
                        product.value="";
                        price.value="";
                        quantity.value="";
                    } else {
                        alert('Precio y cantidad deben ser números');
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
                    className="form-control m-3" />
                <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Precio"
                    className="form-control m-3" />
                <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="Cantidad"
                    className="form-control m-3" />
                <button className="btn btn-primary m-3"> Añadir </button>
            </form>
        </>
    );
} 