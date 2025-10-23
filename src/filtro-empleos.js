const contenedor = document.querySelector('#empleos-contenedor');
const senioritySelect = document.querySelector('#seniority-select');
let cardsEmpleosBase = [];
const obtenerCardsEmpleo = () => Array.from(contenedor.querySelectorAll('.job-card'));
const checkboxesModalidad = document.querySelectorAll('input[name="modalidad"]');

//console.log(checkboxesModalidad[0]);
//console.log(empleo.dataset.modalidad);
export function chequearCards() {
  console.log(obtenerCardsEmpleo()[1]);
}
function cardDesdeSeniority(empleoCard, seniority){
    //console.log(empleo.dataset.seniority);
    //console.log(empleo);
    return seniority === 'Todos' || empleoCard.dataset.seniority === seniority;
}
/*function cardDesdeModalidad(empleo, modalidadSeleccionadas){
    return modalidadSeleccionadas.length === 0 || modalidadSeleccionadas.includes(empleo.dataset.modalidad);
}*/
/*
function aplicarFiltroModalidad(){
    const filtroBuscado = select.value;
    const cardsEmpleos = obtenerCardsEmpleo();
    const cardsFiltradas =cardsEmpleosBase.filter(card => cardDesdeModalidad(card, filtroBuscado));
}*/
function aplicarFiltroSeniority(filtroBuscado){
    //const filtroBuscado = select.value;
    //const cardsEmpleos = obtenerCardsEmpleo();
    const cardsFiltradas =cardsEmpleosBase.filter(card => cardDesdeSeniority(card, filtroBuscado));
    //console.log(cardsFiltradas[0]);
    return cardsFiltradas;
}
function renderizarCardsFiltradas(){
    const fragmento = document.createDocumentFragment();
    const filtroSeniorityBuscado = senioritySelect.value;
    const cardsFiltradas= aplicarFiltroSeniority(filtroSeniorityBuscado);

    cardsFiltradas.forEach(card => fragmento.appendChild(card));
    contenedor.innerHTML = '';
    contenedor.appendChild(fragmento);
}
export function inicializarFiltros(){
    cardsEmpleosBase = obtenerCardsEmpleo();
    senioritySelect.addEventListener('change', renderizarCardsFiltradas);
}