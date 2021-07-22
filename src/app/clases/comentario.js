class Comentario {
    constructor(){
        console.log("Se creo un comentario!!!!!")
    }
    
    obtenerComentariosPromesa(){
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(1 > 0){
                    resolve({
                        response : true, 
                        data : [
                            {
                                "title": "EONET Event Categories",
                                "description": "List of all the available event categories in the EONET system"
                            }
                        ]
                    })
                }else{
                    reject("No se cumple la condición.")
                }
            }, 5000)
        }) 
        
        promesa
        .then((response) => {
            console.log("=====then=======");
            console.log(response)
            console.log("============");
        })
        .catch((response) => {
            console.log("=====catch=======");
            console.log(response)
            console.log("============");
        })
        .finally(() => {
            console.log("=====finally=======");
            console.log("Finaliza la promsea!!!!")
            console.log("============");
        })
        
        return []
    }
    
    categoriasPeticionFetch(){
        fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch()
        .finally()
        
    }
}

export default Comentario