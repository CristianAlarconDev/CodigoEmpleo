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


