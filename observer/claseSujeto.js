/* Esta es la clase que hace la funcion del SUJETO al cual hay que estar mirando los cambios para que el observador haga las acciones a ejecutar */

export function Subject(tagsSujeto, tipoEvento){     
    this.observers = [];   
    this.tagsSujeto = tagsSujeto;
    this.tipoEvento = tipoEvento;       
}

Subject.prototype.suscribe = function(newObservador){        
        this.observers = [...this.observers, newObservador];                         
    }
   
Subject.prototype.notify = function(model){
        this.observers.forEach( (observer) => {                           
            console.log(model)                              
            observer.notifyObservador(model);            
        });     
    }





    
    //SON CALCULOS
/* function useState(val, a){
    const val1 = val; 
   
    function setVal(a){     
     return a;
    }     
     
     return [val1, setVal]
   }
   
   const [nombre, setNombre] = useState("jorge");
   console.log(nombre)
   console.log(typeof(setNombre ))
   console.log(setNombre("Adriana")) */