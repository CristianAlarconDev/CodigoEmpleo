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
    
    return seniority === 'Todos' || empleoCard.dataset.seniority === seniority;
}
function cardDesdeModalidad(empleo, modalidadSeleccionadas){
    if(modalidadSeleccionadas.length===0){
        console.log("no se marcaron modalidades")
        return true;
    }
    return modalidadSeleccionadas.includes(empleo.dataset.modalidad);
}
function aplicarFiltrosCombinados(filtroSeniority, filtrosModalidad){

    const cardsFiltradas = cardsEmpleosBase.filter(card => {
       
        const pasaSeniority = cardDesdeSeniority(card, filtroSeniority);
        const pasaModalidad = cardDesdeModalidad(card, filtrosModalidad);
        
        return pasaSeniority && pasaModalidad; 
    });
    return cardsFiltradas;
}

/*
function aplicarFiltroSeniority(filtroBuscado){
   
    const cardsFiltradas =cardsEmpleosBase.filter(card => cardDesdeSeniority(card, filtroBuscado));
   
    return cardsFiltradas;
}*/

function renderizarCardsFiltradas(){
    const fragmento = document.createDocumentFragment();

    const filtroSeniorityBuscado = senioritySelect.value;

    const filtrosModalidadBuscados = Array.from(checkboxesModalidad)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
        
    const cardsFiltradas= aplicarFiltrosCombinados(filtroSeniorityBuscado, filtrosModalidadBuscados);

    cardsFiltradas.forEach(card => fragmento.appendChild(card));
    contenedor.innerHTML = '';
    contenedor.appendChild(fragmento);
}
export function inicializarFiltros(){
    cardsEmpleosBase = obtenerCardsEmpleo();
    /*sumo add event para cada input, se lanzaria la funcion ante el cambio de cada input */
    checkboxesModalidad.forEach(checkbox => {
        checkbox.addEventListener('change', renderizarCardsFiltradas);
    });
    senioritySelect.addEventListener('change', renderizarCardsFiltradas);
}