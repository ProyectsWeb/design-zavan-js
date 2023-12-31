export function ItemServicios(){
    const $itemServicios = document.createElement('main');
    $itemServicios.classList.add('item_servicios');
    $itemServicios.innerHTML = `
      <div class="container_servicios">

        <div class="box_servicio">
      <i class="fa fa-file-code-o" aria-hidden="true"></i>
      <h3>Diseño y desarrollo de sitios web </h3>(Estaticos y Dinamicos)
      <p class="p_descripcion">
      Creamos sitios web atractivos y funcionales que se adapten a las necesidades específicas de tu negocio o proyecto.
      </p>

      <div class="link_read">
      <a href="#">Leer Mas  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>


    <div class="box_servicio">       
      <i class="fa fa-mobile" aria-hidden="true"></i>
      <h3>Desarrollo de aplicaciones móviles </h3>(PWA)
      <p class="p_descripcion">
      Creamos aplicaciones para dispositivos móviles que permitan a tus clientes acceder a tu negocio desde cualquier lugar.               
      </p>

      <div class="link_read">
      <a href="#">Leer Mas  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>


    <div class="box_servicio">
      <i class="fa fa-search" aria-hidden="true"></i>
      <h3>Optimización de motores de búsqueda </h3>(SEO)
      <p class="p_descripcion">
      Optimizamos tu sitio web para mejorar su visibilidad en los resultados de búsqueda en línea.
      </p>

      <div class="link_read">
      <a href="#">Leer Mas  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>


    <div class="box_servicio">
      <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
      <h3>Desarrollo de comercio electrónico</h3>
      <p class="p_descripcion">
      Construimos tiendas y plataformas de comercio electrónico para que puedas vender productos y servicios en línea.
      </p>

      <div class="link_read">
      <a href="#">Leer Mas  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>

    <div class="box_servicio">
      <i class="fa fa-code" aria-hidden="true"></i>
      <h3>Desarrollo de software personalizado</h3>
      <p class="p_descripcion">
      Creamos soluciones de software personalizadas para satisfacer las necesidades específicas de tu negocio.
      </p>

      <div class="link_read">
      <a href="#">Leer Mas  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>


    <div class="box_servicio">
      <i class="fa fa-cogs" aria-hidden="true"></i>
      <h3>Mantenimiento y soporte de sitios web y aplicaciones</h3>
      <p class="p_descripcion">
      Proporcionamos servicios de mantenimiento y soporte continuos para asegurarse de que los sitios web y aplicaciones sigan funcionando sin problemas.
      </p>

      <div class="link_read">
      <a href="#">Leer Mas  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div> 
    </div> 

    </div>  
    
    `;
    return $itemServicios;

}