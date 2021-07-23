import axios from 'axios'
    
export default class Curso{
    async crearCurso({nombre}){
        const response = await axios.post("http://localhost:3000/cursos", {nombre : nombre})
        console.log(response)
    }
}

