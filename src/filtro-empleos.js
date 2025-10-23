const contenedor = document.querySelector('#empleos-contenedor');
const select = document.querySelector('#seniority-select');
let cardsEmpleosBase = [];
const obtenerCardsEmpleo = () => Array.from(contenedor.querySelectorAll('.job-card'));

export function chequearCards() {
  console.log(obtenerCardsEmpleo()[1]);
}
function cardDesdeSeniority(empleo, seniority){
    return seniority === 'Todos' || empleo.dataset.seniority === seniority;
}
function cardDesdeModalidad(empleo, modalidad){
    return modalidad === 'Todos' || empleo.dataset.modalidad === modalidad;
}
function aplicarFiltroModalidad(){
    const filtroBuscado = select.value;
    const cardsEmpleos = obtenerCardsEmpleo();
    const cardsFiltradas =cardsEmpleosBase.filter(card => cardDesdeModalidad(card, filtroBuscado));
}
function aplicarFiltroSeniority(){
    const filtroBuscado = select.value;
    const cardsEmpleos = obtenerCardsEmpleo();
    const cardsFiltradas =cardsEmpleosBase.filter(card => cardDesdeSeniority(card, filtroBuscado));
    //console.log(cardsFiltradas[0]);
    return cardsFiltradas;
}
function renderizarCardsFiltradas(){
    const fragmento = document.createDocumentFragment();
    const cardsFiltradas= aplicarFiltroSeniority();

    cardsFiltradas.forEach(card => fragmento.appendChild(card));
    contenedor.innerHTML = '';
    contenedor.appendChild(fragmento);
}
export function inicializarFiltros(){
    cardsEmpleosBase = obtenerCardsEmpleo();
    select.addEventListener('change', renderizarCardsFiltradas);
}