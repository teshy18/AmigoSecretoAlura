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
    // se selecciona el elemento y  se le asigna un valor vacio
     let listaHTML = document.getElementById("listaAmigos");
     listaHTML.innerHTML = ""
    
     // se recorre el array listaAmigos y  se agrega un elemento li por cada amigo
     for(i=0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = ` ${i+1} -  ${listaAmigos[i]}`  ;
        listaHTML.appendChild(li);
     }

}

function sortearAmigo(){
    //se inicializa la variable amigo
    let amigoSorteado = "";
    
    //se valida que haya al menos un amigo para sortear        
    if(listaAmigos.length === 0 ){
        alert('ingrese al menos un amigo para sortear')
        return
    }
    
    //se sortea un numero aleatorio 
    let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length)
    
    //se selecciona el amigo según el número sorteado
    amigoSorteado = listaAmigos[numeroAleatorio]

    //se muestra el resultado en el elemento con el ID resultado
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `${amigoSorteado}`
}
