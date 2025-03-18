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


    //finalmente se reinicia el valor de la caja de texto y la variable nombreAmigo
    cajaDeTexto.value = '';
    nombreAmigo= '';
    //se actualiza la lista 
    actualizarLista();
}

function actualizarLista(){

     let listaHTML = document.getElementById("listaAmigos");
     listaHTML.innerHTML = ""
    
     for(i=0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = ` ${i+1} -  ${listaAmigos[i]}`  ;
        listaHTML.appendChild(li);
     }

}

function sortearAmigo(){
    
}
