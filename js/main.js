// PREENTREGA VENTA DE AUTOS

const AutosEnVenta = function (marca, modelo, year, precio, stock, img) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
}

// AUTOS EN VENTA

let auto1 = new AutosEnVenta("Fiat", "Regata", 2001, 900000, 1, "img/img1.jpg");
let auto2 = new AutosEnVenta("Fiat", "Palio", 2004, 1500000, 1, "img/img1.jpg");
let auto3 = new AutosEnVenta("Ford", "Falcon", 1970, 750000, 1, "img/img1.jpg");
let auto4 = new AutosEnVenta("Chevrolet", "Cheavy SS", 1967, 3000000, 1, "img/img1.jpg");
let auto5 = new AutosEnVenta("Peugeot", "Rx 206", 2001, 860000, 1, "img/img1.jpg");
let auto6 = new AutosEnVenta("Peugeot", "Partner", 2007, 3000000, 1, "img/img1.jpg");
let auto7 = new AutosEnVenta("Peugeot", "307", 2007, 7000000, 0, "img/img1.jpg");// NO HAY STOCK
let auto8 = new AutosEnVenta("Toyota", "Corolla", 1989, 1200000, 1, "img/img1.jpg");
let listaDeAutos = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8];







const cartas = document.getElementById("cartas");
const verCarrito = document.getElementById("verCarrito");
const modalConteiner = document.getElementById("modalConteiner");


//Agregamos con InnerHTML las Cards

                //Pedir al local Storage "carrito"
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


listaDeAutos.forEach((cardAutos) => {
    let contenido = document.createElement("li");
    contenido.classList.add("cartasHijo");
    contenido.innerHTML = `
    <h3 class="marcaClass">${cardAutos.marca.toUpperCase()}</h3>
    <h4 class="modeloClass">${cardAutos.modelo}</h4>
    <h4 class="yearClass">${cardAutos.year}</h4>
    <img class="imagenCard" src="${cardAutos.img}" alt="${cardAutos.marca} ${cardAutos.modelo}">
    <h4 class="precioClass">$ ${cardAutos.precio}.</h4>
    
    
`;

    cartas.append(contenido);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btnAgregar";

    comprar.addEventListener("click", () => {
        carrito.push({
            marca: cardAutos.marca,
            modelo: cardAutos.modelo,
            img: cardAutos.img,
            precio: cardAutos.precio,
        });
        console.log("Carrito:", carrito);
    });

    contenido.appendChild(comprar);
    cartas.appendChild(contenido);
});


//Filtro de Busqueda

document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        const searchTerm = e.target.value.toUpperCase();
        document.querySelectorAll(".cartasHijo").forEach(auto => {
            const autoText = auto.textContent.toUpperCase();
            if (autoText.includes(searchTerm)) {
                auto.style.display = "block";
            } else {
                auto.style.display = "none";
            }
        });
    }
});







