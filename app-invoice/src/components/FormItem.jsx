export const FormItem = () => {
    
    return (
        <>
            <form className="form" action="submit">
                <input className="form-control m-3" type="text" name="product" placeholder="Producto" />
                <input className="form-control m-3" type="number" name="quantity" placeholder="Cantidad" />
                <input className="form-control m-3" type="number" name="price" placeholder="Precio" />
                <button
                    type="submit"
                    className="btn btn-primary m-3">Añadir</button>
            </form>
        </>
    );
} 