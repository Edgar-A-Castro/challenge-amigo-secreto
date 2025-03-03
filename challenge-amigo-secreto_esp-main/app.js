let listaDeamigo = [];

/*esta funcion toma el valor ingresado por el usuario y lo agrega en el arreglo tambien agrega <li> a la <ul> 
con los nombre valida si esta vasio y pide insertar un nombre,  */
function agregarAmigo() {
    
    const miAmigo = document.getElementById("amigo").value
    
    if(miAmigo == "") {
        alert("ingrese un nombre porfavor");
    }else{
        listaDeamigo.push(miAmigo);  
    }
    document.getElementById("amigo").value = "";
    listNode = document.getElementById("listaAmigos");
    liNode = document.createElement("LI");
    txtNode = document.createTextNode(miAmigo);
  
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
     
}

/*se toma la lista de amigos y se toma un nombre aleatorio se crea una lista se los nombres solteados*/
function sortearAmigo(){
    
  const sorteo = listaDeamigo[Math.floor(Math.random() * listaDeamigo.length)];
  
  listNode = document.getElementById("resultado" );
  liNode = document.createElement("LI");
  txtNode = document.createTextNode(sorteo);

  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
   
}

