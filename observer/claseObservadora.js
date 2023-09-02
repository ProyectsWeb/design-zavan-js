 //Estas clases son las que van a realizar las acciones como ejemplo renderizar, cambiar un dato, etc. 
export function inputTextArea(tags) {   
    this.notifyObservador = function(e){         
      tags.forEach(tag => {        
        document.getElementById(tag).innerHTML = e;
      });
                  
    }    
}

export function useEstado(tag, mensaje) { 
    this.tag = tag;
    this.mensaje = mensaje;

    this.notifyObservador = function(e){   
      console.log(tag)
        console.log(e)                      
      document.getElementById(tag).innerHTML = mensaje;                 
  }   
}