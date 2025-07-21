# invoice-app

## 1. Introducción.

Aplicación que simula una factura electrónica creada con **React** y **Bootstrap** para los estilos.

Va acompañada de un backend en **Spring Boot** que se encarga de recibir los datos de la factura, escribirla en el servidor y devolverla al navegador.

El backend contiene un **Dockerfile** que se encarga de compilar y crear la imagen con el **`.jar`**

En el frontend nos encontramos con una única pantalla compuesta con por varios componentes:

1. **`InvoiceApp`** Componente principal factura que se muestra a forma de **`card`**.
2. **`VendorClientDetails`** que mostrará tanto datos del cliente como del vendedor.
3. **`ItemsTable`** que muestra los artículos en la tabla de la factura y permite eliminar un elemento.
4. **`ItemsRow`** Configura cada fila de la tabla.
4. **`ItemsTotal`** Donde mostramos el total de la factura.
5. **`FormItem`** Formulario que se muestra a través de un botón y nos permite agregar artículos a la factura.
6. **`ClientData`** Dialog para cambiar datos del cliente.
7. **`InvoiceDetails`** Inputs de fecha y hora.
8. **`PDFDialog`** Dialog que muestra la opción para descargar factura.


## 2. Uso.

Lo primero que haremos será introducir fecha y número de la factura.

Para editar el cliente, pulsamos sobre el botón con el mismo nombre y se nos depliega una ventana modal para introducir datos, cuando los tengamos rellenos pulsamos en aceptar.

Para añadir productos, pulsamos sobre el icono de flecha para abajo y se nos abre un formulario.

Rellenamos los datos y pulsamos en el botón **`Añadir`**

Para eliminar productos pulsamos sobre el icono de papelera que aparece al lado de cada producto en la tabla.

Una vez tenemos todos los datos rellenos pulsamos en **`Enviar PDF`** y si todo va bien se nos abre un dialog para descargar el PDF.


