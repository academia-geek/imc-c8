import axios from 'axios'
    
class Estudiante{
    //async/await
    async listarEstudiantes(){
        let {data} = await axios.get('http://localhost:3000/cursos')
        console.log(data)
        console.log("Hola!!!")
    }
}

export default Estudiante