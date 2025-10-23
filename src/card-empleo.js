export function crearCardEmpleo(empleo){
    const cardArticle = document.createElement('article');
    cardArticle.className = 'job-card'; 
    
    cardArticle.dataset.seniority = empleo.seniority;
    cardArticle.dataset.modalidad = empleo.modalidad;
    cardArticle.innerHTML = `
        <h3>${empleo.titulo}</h3>
        <p>Empresa: ${empleo.empresa}</p>
        <p>Ubicación: ${empleo.ubicacion}</p>
        <p>Modalidad: ${empleo.modalidad}</p>
        <div class="job-meta">
            <span>${empleo.seniority}</span>
            <span>${empleo.salario}</span>
        </div>
        <a class="apply" href="#">Ver oferta</a>
    `;
    
    return cardArticle;
}