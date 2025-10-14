const empleos_mock='https://68ee91ccdf2025af78042146.mockapi.io/recursos/:empleos';

export async function fetchEmpleos(){
    console.log(`Se intenta leer datos de : ${empleos_mock}`);
    try {
        const respuesta= await fetch(empleos_mock);
        if(!respuesta.ok){
        throw new Error(`Error HTTP: ${respuesta.status}
            -${respuesta.statusText}`);
    }    
    //si todo ok
        const infoJson= respuesta.json();
        return infoJson;

    } catch (error) {
        console.error("Error al hacer fetch en empleos", error.message);
        return [];
    }
}

function renderizarEmpleos(empleosJson){
        const contenedor = document.querySelector("#empleos-contenedor");
        empleos.forEach(empleo => {
        html += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${empleo.titulo}</h5>
                        <p class="card-subtitle mb-2 text-muted">${empleo.empresa} | ${empleo.ubicacion}</p>
                        
                        <p class="card-text">${empleo.descripcion.substring(0, 150)}...</p>
                        
                        <span class="badge bg-primary">${empleo.salario}</span>
                        
                    </div>
                    <div class="card-footer bg-white border-0">
                        <a href="#" class="btn btn-primary btn-sm">Postularme</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Inyecta el HTML en el contenedor
    contenedor.innerHTML = html;
}
async function iniciarAplicacion() {
    const empleosData = await fetchEmpleos();
    renderizarEmpleos(empleosData);
}
document.addEventListener("DOMContentLoaded", iniciarAplicacion);