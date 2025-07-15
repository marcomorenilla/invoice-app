# invoice-app

## 1. Introducción.

Aplicación que simula una factura electrónica creada con **React** y **Bootstrap** para los estilos.

En esta App nos encontramos con una única pantalla compuesta con por varios componentes:

1. Componente principal factura que se muestra a forma de **`card`**.
2. Componente **`Details`** que mostrará tanto datos del cliente como del vendedor.
3. **`ItemsTable`** que muestra los artículos en la tabla de la factura y permite eliminar un elemento.
4. **`ItemsRow`** Configura cada fila de la tabla.
4. **`ItemsTotal`** Donde mostramos el total de la factura.
5. **`FormItem`** Formulario que se muestra a través de un botón y nos permite agregar artículos a la factura.

## 2. Instalación.

> [!note]
>
> - Para utilizar el proyecto hay que tener instalado **node** y **npm** para poder levantar el servidor donde vamos a ejecutar la aplicación.

Lo primero que hacemos es clonar el proyecto:

```bash
git clone https://github.com/marcomorenilla/invoice-app.git
```

Una vez clonado nos movemos dentro del proyecto:

```bash
cd invoice-app/app-invoice
```

Instalamos las dependencias necesarias:

```bash
npm install
```

Levantamos servidor de desarrollo:

```bash
npm run dev
```

Desde un navegador abrimos [localhost:5173](http://localhost:5173) y ya tendríamos la factura lista para funcionar.

Si queremos que la factura contenga artículos podemos crear dentro de la carpeta data el archivo **data.js** y añadir el siguiente contenido.

```js
export const invoice = {
    id: 1,
    name: 'Ejemplo Factura',
    vendor: {
        name: 'Comercio',
        fiscalNumber: '4448885133A',
        address: {
            country: 'España',
            city: 'Inventada',
            street: 'Calle Falsa',
            number: '3'
        }
    },
    client: {
        name: 'Cliente',
        fiscalNumber: '0005555111B',
        address: {
            country: 'España',
            city: 'Inventada',
            street: 'Calle Empresa',
            number: '4'
        }
    },
    items: [
        {
            id:1,
            product: 'Producto 1',
            price: 20.99,
            quantity: 1
        },
        {
            id: 2,
            product: 'Producto 2',
            price: 22.0,
            quantity: 3
        },
        {
            id: 3,
            product: 'Producto 3',
            price: 23.1,
            quantity: 2
        },
    ]

}
```

## 3. Uso.

Para añadir productos, pulsamos sobre el icono de flecha para abajo y se nos abre un formulario.

Rellenamos los datos y pulsamos en el botón **`Añadir`**

Para eliminar productos pulsamos sobre el icono de papelera que aparece al lado de cada producto en la tabla.


