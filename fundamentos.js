// formas de ejecutar codigo asincrono
//callbacks
//promesas
//asyn - await

const coneccionBDD = (datos) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => datos ? resolve("Conexion OK"):reject("Conexión Error") )

    })
 }

 coneccionBDD(true)
 .then((respuesta) => {console.log(respuesta);})
 .catch((error)=>{console.log(error)})

 const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/users") 
 obtenerDatos
 .then (peticion => peticion.json())
 .then (respuesta => console.log(respuesta))
 .catch(error => console.log(error))

 //axios = XMLHTTP
 //FETCH
 //AXIOS
 //REACTQUERY

 const conectarAPI = async() =>{
    try{
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/usershttps://jsonplaceholder.typicode.com/users")
        const data = await respuesta.json()
        console.log(data)
    } catch(error){
        console.log(error)

    }
 }

 conectarAPI()
 