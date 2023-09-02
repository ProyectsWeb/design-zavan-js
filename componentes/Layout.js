import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { ItemServicios } from "./ItemServicios.js";
import { Presentacion } from "./Presentacion.js";
import { SeccionEleccion } from "./SeccionEleccion.js";
import { SeccionMain } from "./SeccionMain.js";
import { SeccionServicios } from "./SeccionServicios.js";
import { TermiPolitica } from "./TermiPolitica.js";


export function Layout(){
    const $Layout = document.createElement('div');
    $Layout.classList.add('container'); 
    $Layout.innerHTML = `
      <img src="public/img/collage-fondo-programacion.jpg" alt="imagen de fondo programacion" loading="lazy"  class="img_fondo">
    `;
      
    $Layout.appendChild(Header()); 
    $Layout.appendChild(SeccionMain()); 
    $Layout.appendChild(Presentacion()); 
    $Layout.appendChild(SeccionServicios()); 
    $Layout.appendChild(ItemServicios()); 
    $Layout.appendChild(SeccionEleccion());
    $Layout.appendChild(Footer()); 
    $Layout.appendChild(TermiPolitica()); 
       
    return $Layout;
}