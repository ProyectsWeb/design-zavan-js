/* import { RedesSociales } from "./RedesSociales.js"; */


export function SeccionMain(){
    const $seccionMain = document.createElement('section')
    $seccionMain.classList.add('seccion_main');

    $seccionMain.innerHTML = `
    <div class="titulos_main">
    <div class="redes_sociales">
    <ul>				
      <li>
        <a href="https://www.facebook.com/Zavan-105553928241197/about/?ref=page_internal" target="_blank">
        <i class="fa fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCcebSrheJPNJkdMeeRJsazA" target="_blank">				
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="http://instagram.com/" target="_blank">
        <i class="fa fa-instagram"></i>
        </a>
      </li>

      <li>
        <a href="http://twitter.com/" target="_blank">
        <i class="fa fa-twitter"></i>
        </a>
      </li>			
    </ul> 
    </div>
        
    <h1 class="h1_main">Brindando servicios y soluciones Especializadas</h1>    
    <p class="parrafo_main">
      Desarrollo web a medida. Creamos soluciones digitales únicas para tu negocio.        
    </p>
    <div class="btn_main"><p class="parrafo_start">Iniciar Ahora</p></div>

   </div>

  <div class="container_img_main">
    <img src="public/img/illustration-5.webp" alt="presentacion zavan" loading="lazy"  class="imagen_main"> 
  </div>
    `;
    
    return $seccionMain;
}