let listaDeamigo = []




function agregarAmigo() {
    
    const miAmigo = document.getElementById("amigo").value
   
    if(miAmigo == "") {
        alert("ingrese un nombre porfavor");
    }else{
        listaDeamigo.push(miAmigo);
    }
    
    
           
       
    
        
        


    document.getElementById("amigo").value = "";

    
      console.log(listaDeamigo);
    
    

}

function sortearAmigo(){
  const sorteo = listaDeamigo[Math.floor(Math.random() * listaDeamigo.length)];
   console.log(sorteo);
}
id="listaAmigos"
id="resultado" 