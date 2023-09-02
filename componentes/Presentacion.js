export function Presentacion(){
    const $presentacion = document.createElement('div');
    /* $presentacion.classList.add('seccion_presentacion_1'); */
    $presentacion.innerHTML = `
    <section class="seccion_presentacion_1">
    <div class="presentacion">
     
     <h3 class="design"><span>Design</span>Zavan</h3>
     <p class="p_presentacion">Somos profesionales apasionados por la tecnología enfocados en brindar soluciones digitales de calidad, que ayuden  a nuestros clientes de todos los tamaños a aumentar su presencia en línea, mejorar su eficiencia operativa y aumentar sus ingresos.</p>
    </div>
  </section>

  <section class="seccion_presentacion_2">
    <div class="presentacion" >
     
     <h3 class="design"><span>Alcanza tus Metas Digitales</span></h3>
     <p class="p_presentacion">¿En busca de un profesional de desarrollo de páginas y aplicaciones web confiable, precio justo y de excelente calidad? <br /><br /> Contáctanos hoy para obtener más información sobre cómo podemos colaborar a que alcances tus objetivos digitales.</p>
    </div>
    </section>
   `;
    return $presentacion;

}