export function TermiPolitica(){
    const $termiPolitica = document.createElement('div');
    $termiPolitica.classList.add('terminos_politicas');
    $termiPolitica.innerHTML = `
        <a href="#">Terminos y Condiciones</a>
        <a href="#">Politica de Privacidad</a>    
    `;

    return $termiPolitica;
}