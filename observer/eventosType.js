
/* EVENTOS PARA TECLADO: onKeyUp, onKeyPress, onKeyDown */
/* EVENTOS DE MOUSE: onClick, onMouseMove, onDragOut, onDrop, */
/* EVENTOS PARA FORMULARIOS: onChange, onInput, onInvalid, onSubmit */

 export function onInput(sujeto, tagSujeto, typeEvent){ 
     document.getElementById(tagSujeto).addEventListener(typeEvent, (event)=>{         
        sujeto.notify(event.target.value);            
    });
}


export function onClick(sujeto, tagSujeto, typeEvent){    
    document.getElementById(tagSujeto).addEventListener(typeEvent, (event)=>{        
        sujeto.notify(event.target.value);        
    });
}

export function onChange(sujeto, tagSujeto, typeEvent){    
    document.getElementById(tagSujeto).addEventListener(typeEvent, (event)=>{        
        sujeto.notify(event.target.value);        
    });
}