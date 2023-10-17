    const socketClient = io();

    // Espera a que se establezca la conexión antes de emitir eventos
    socketClient.on("connect", () => {
    console.log("Conexión con el servidor de sockets establecida.");

    // Escucha el evento "productos" para actualizar la lista de productos
    socketClient.on("productos", (products) => {
        console.log(products);
        updateProductList(products);
    });

    const form = document.getElementById("formProduct");
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();

        const title = form.elements.title.value;
        const description = form.elements.description.value;
        const stock = form.elements.stock.value;
        const thumbnail = form.elements.thumbnail.value;
        const category = form.elements.category.value;
        const price = form.elements.price.value;
        const code = form.elements.code.value;

        const product = {
        title,
        description,
        stock,
        thumbnail,
        category,
        price,
        code,
        };

        // Emitir el evento "nuevoProductos" al servidor
        socketClient.emit("nuevoProducto", product);

        form.reset();
    });

    document.getElementById("delete-btn").addEventListener("click", () => {
        const deleteIdInput = document.getElementById("delete-id");
        const product = deleteIdInput.value;

        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");

        if (confirmDelete) {
        socketClient.emit("deleteProduct", product);
        deleteIdInput.value = "";
        }
    });
    })