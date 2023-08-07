//CARRIOOOO

const printCarrito = () => {

    modalConteiner.innerHTML = "";
    modalConteiner.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modalTitulo">Tus Compras</h1>
    `
    modalConteiner.append(modalHeader);

    const modalButton = document.createElement("h2");
    modalButton.innerText = "❌";
    modalButton.className = "modal-button";

    modalButton.addEventListener("click", () => {
        modalConteiner.style.display = "none";

    });

    modalHeader.append(modalButton);

    //Agregar cards al carrito

    carrito.forEach((cardAutos, index) => {

        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
    <img src="${cardAutos.img}"></img>
    <h3 class= "marcaClass2">${cardAutos.marca}</h>
    <h3 class= "modeloClass2">${cardAutos.modelo}</h>
    <p class= "precioClass2">${cardAutos.precio}$</p>
    `;
        modalConteiner.append(carritoContent);
    //Eliminar del carrito
        let eliminar = document.createElement("h3");
        eliminar.innerText = "🗑";
        eliminar.className = "eliminarCarrito";
        eliminar.addEventListener("click", () => {
            carrito.splice(index, 1);
            modalConteiner.innerHTML = "";
            printCarrito();
        });
        carritoContent.append(eliminar);

    })

    //Suma de las cards ingresadas al carrito

    const suma = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalCompra = document.createElement('div');
    totalCompra.className = "total-content";
    totalCompra.innerHTML = ` Total a pagar: ${suma} $`
    console.log(totalCompra)
    modalConteiner.append(totalCompra);

}

verCarrito.addEventListener('click', printCarrito)


