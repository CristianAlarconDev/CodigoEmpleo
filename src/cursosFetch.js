const cursos_mock = "https://68ee91ccdf2025af78042146.mockapi.io/recursos/cursos"

export async function fetchCursos(){
    console.log(`Se intenta leer datos de : ${cursos_mock}`);
    try {
        const respuesta= await fetch(cursos_mock);
        if(!respuesta.ok){
        throw new Error(`Error HTTP: ${respuesta.status}
            -${respuesta.statusText}`);
    }    
    //si todo ok
        const infoJson= await respuesta.json();
        return infoJson;

    } catch (error) {
        console.error("Error al hacer fetch en cursos", error.message);
        return [];
    }
}