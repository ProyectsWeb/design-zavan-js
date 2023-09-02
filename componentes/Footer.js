export function Footer(){
    const $footer = document.createElement('footer');
    $footer.classList.add('footer');
    $footer.innerHTML = `
    <div class="container_footer">
    <div class="container_logo_footer">

    <img src="public/img/design-zavan13.png" alt="Design Zavan Logo" loading="lazy"  class="logo">

      <p class="p_footer">
        Contáctanos hoy para obtener más información sobre cómo podemos ayudarte a alcanzar tus objetivos digitales. 
     </p>  

      <span class="span_footer">Suscríbete a nuestro boletín</span> 

      <div class="btn_suscribir">            
         <input  placeholder="Ingresa tu Email" class="input_footer" type="email" />
         <div class="btm_footer"><p>SUSCRIBIRSE</p></div>              
      </div>
  </div>

  <div class="enlaces_footer">
  <h3>Enlaces Utiles</h3>
  <a href="#">Google</a>
  <a href="#">LinkedIn</a>              
</div>

<div class="recursos_footer">
  <h3>Recursos</h3>
  <a href="#">Proyectos</a>
  <a href="https://www.freepik.es/">Imagenes-<br />Diseñado por Freepik </a>
</div>

<div class="contacto_footer">
  <h3>Informacion de Contacto</h3>
  <a href="#">correo@zavan.dev</a>
  <a href="#">Telefono</a>                        
</div>

</div>   
    
    `;
    return $footer;
}