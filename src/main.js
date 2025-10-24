import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { fetchCursos } from "./cursosFetch";
import { iniciarAplicacion } from "./empleosFetch";


/*Desde JSONServer



const url = "http://localhost:8080/";

const traerCursos = async () => {
  try {
    const res = await fetch(url + "cursos");

    if (!res.ok) {
      throw new Error("Error en la peticion");
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

console.log(await traerCursos());



//Mostrar cursos en pantalla desde jsonServer
const cursosContainer = document.querySelector("#CursosContainer");
async function mostrarCursos() {
  const cursos = await traerCursos();
  var html = "";

  try {
    cursos.forEach((curso) => {
      console.log(curso);
      html += `
        <div class="row g-4" >
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" >
        <div class="card course-card shadow-sm border-0">
                <img
                  src=${curso.imagen}
                  class="card-img-top"
                  alt="Imagen del curso"
                />
                <div class="card-body text-center">
                  <h5 class="card-title fw-bold">${curso.titulo}</h5>
                  <p class="card-text text-muted">Por ${curso.autor}</p>
                </div>
            </div>
            </div>
                `;
    });
  } catch (err) {
    html += `<p>Error al cargar los cursos</p>`;
  }

  cursosContainer.innerHTML += html;
}

addEventListener("DOMContentLoaded", mostrarCursos());

*/

const contenedorCursos = document.querySelector(".courses");

function crearCardCurso(curso) {
  const card = document.createElement("article");
  card.className = "course-card";

  card.innerHTML = `
    <img src="${curso.imagen}" alt="${curso.titulo}" class="course-image">
    <h3>${curso.titulo}</h3>
    <p>Autor: ${curso.autor}</p>
    <a class="view-more" href="#">Ver más</a>
  `;

  return card;
}

function mostrarCursos(cursos) {
  contenedorCursos.innerHTML = "";
  cursos.forEach(curso => {
    const card = crearCardCurso(curso);
    contenedorCursos.appendChild(card);
  });
}

async function iniciarAplicacionCursos() {
    const cursosData = await fetchCursos();
    mostrarCursos(cursosData);
}

document.addEventListener("DOMContentLoaded", iniciarAplicacionCursos);
document.addEventListener("DOMContentLoaded", iniciarAplicacion);