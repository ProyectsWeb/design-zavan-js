export function SeccionServicios(){
    const $seccionServicios = document.createElement('section');
    $seccionServicios.classList.add('seccion_servicios');
    $seccionServicios.innerHTML = `
    <div class="box_servicios">
      <span class="span_servicios">Servicios</span>
      <h2 class="h2_servicios">Servicios que ofrecemos</h2>
      <p class="parrafo_servicios">
      En <span class="design">Design</span><span class="zavan">Zavan</span> ofrecemos servicios óptimos de desarrollo digital, para ayudar a que tú negocio o proyecto tenga mejor presencia en línea y así aumentar tus posibilidades de alcanzar tus objetivos.
       </p>
    </div>
   
    <div class="btn_servicios"><p class="parrafo_start">Ver todos los Servicios</p></div>   
    
    `;

    return $seccionServicios;
}