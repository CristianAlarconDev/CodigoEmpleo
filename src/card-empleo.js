export function crearCardEmpleo(empleo){
    const colDiv = document.createElement('div');
    colDiv.className = 'col-12 mb-3';
    const cardArticle = document.createElement('article');
    cardArticle.className = 'card h-100 job-card-simple'; 
    
    cardArticle.innerHTML = `
        <div class="d-flex justify-content-between p-3">
            
            <section class="me-4 flex-grow-1">
                <h5 class="card-title fw-bold mb-1">${empleo.titulo}</h5>
                <p class="card-subtitle text-muted mb-2 small">
                    ${empleo.empresa} | ${empleo.ubicacion}
                </p>
                <p class="card-text text-body-secondary mb-2">${empleo.descripcion.substring(0, 150)}...</p>
            </section>
            
            <aside class="text-end d-flex flex-column justify-content-between align-items-end">
                <span class="fw-bold text-primary fs-6 mb-2">${empleo.salario}</span>
                <a href="#" class="btn btn-sm btn-outline-primary mb-2">Ver Detalles</a>
                <span class="badge bg-secondary">${empleo.seniority || 'N/A'}</span>
            </aside>
        </div>
    `;

    colDiv.appendChild(cardArticle);

    return colDiv;

}