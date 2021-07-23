import Comentario from './clases/comentario'
import Estudiante from './clases/estudiante'
import Curso from './clases/curso'
console.log("Hola desde Webpack y babel!!!!");

//let c = new Comentario();

//c.categoriasPeticionFetch();

let estd = new Estudiante();

estd.listarEstudiantes()

let curso = new Curso();

let nombre = "Curso de React Avanzado"

curso.crearCurso({nombre})