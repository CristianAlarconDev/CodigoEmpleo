export function crearCardEmpleo(empleo){
    const divCard = document.querySelector('.jobs');
    
    const cardArticle = document.createElement('article');

    cardArticle.className = 'job-card'; 
    
    cardArticle.innerHTML = `
                        
                        <h3>${empleo.titulo}</h3> <!-- Nombre del puesto -->
                        <p>${empleo.empresa} · ${empleo.modalidad}</p> <!-- Línea con empresa y detalles -->
                        <div class="job-meta"> <!-- Metadatos del puesto -->
                            <span>Publicado: 2 días</span> <!-- Fecha de publicación -->
                            <span>Salario: ${empleo.salario}</span> <!-- Rango salarial -->
                        </div> <!-- Fin de metadatos -->
                        <a class="apply" href="#">Ver oferta</a> <!-- Enlace para ver o aplicar (falso enlace) -->

    `;

    divCard.appendChild(cardArticle);

    return(cardArticle)
}