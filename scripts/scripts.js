import { showCards } from "../modules/showCard.js";

let contenedorPerros = document.getElementById('containerdog');
let contenedorGatos = document.getElementById('containercat');
let contenedorOtrasMascotas = document.getElementById('containerothers');

document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch('http://localhost:4000/products');
    let data = await res.json();

    let productosPerro = data.filter(item => item.category == 'dog');
    let productosGato = data.filter(item => item.category == 'cat');
    let productosOtrasMascotas = data.filter(item => item.category == 'other');

    showCards(productosPerro, contenedorPerros);
    showCards(productosGato, contenedorGatos);
    showCards(productosOtrasMascotas, contenedorOtrasMascotas);
})