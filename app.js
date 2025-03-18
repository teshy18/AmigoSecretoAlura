// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []; 
let nombreAmigo = ""; 

let cajaDeTexto = document.getElementById('amigo')


function agregarAmigo(){
    //se toma el valor del input
    nombreAmigo = cajaDeTexto.value
    
    // se valida que el input no sea vacio
    if(nombreAmigo.trim() === ""){
        alert('ingrese un nombre por favor!')
        return;
    }

    //si el nombre es valido se agrega a la lista.
    listaAmigos.push(nombreAmigo)


    console.log(nombreAmigo)
    console.log(listaAmigos)

    cajaDeTexto.value = '';
    nombreAmigo= '';

    console.log(nombreAmigo);
}
