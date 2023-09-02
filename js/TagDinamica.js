export function Tag(tag, clase, contenido, atributo=''){
    console.log("SPA");
    const $tag = document.createElement(tag);
    $tag.classList.add(clase);    
    $tag.setAttribute("name", atributo);    
    $tag.textContent = contenido;
    return $tag
}