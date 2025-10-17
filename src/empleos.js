import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { crearCardEmpleo } from "./card-empleo";
const empleos_mock='https://68ee91ccdf2025af78042146.mockapi.io/recursos/empleos';

export async function fetchEmpleos(){
    console.log(`Se intenta leer datos de : ${empleos_mock}`);
    try {
        const respuesta= await fetch(empleos_mock);
        if(!respuesta.ok){
        throw new Error(`Error HTTP: ${respuesta.status}
            -${respuesta.statusText}`);
    }    
    //si todo ok
        const infoJson= await respuesta.json();
        return infoJson;

    } catch (error) {
        console.error("Error al hacer fetch en empleos", error.message);
        return [];
    }
}

function renderizarEmpleos(empleosJson){
        const contenedor = document.querySelector("#empleos-contenedor");
        contenedor.innerHTML = '';
        empleosJson.forEach(empleo => {
            const cardEmpleo = crearCardEmpleo(empleo);
            contenedor.appendChild(cardEmpleo);
        });
}
async function iniciarAplicacion() {
    const empleosData = await fetchEmpleos();
    renderizarEmpleos(empleosData);
}
document.addEventListener("DOMContentLoaded", iniciarAplicacion);