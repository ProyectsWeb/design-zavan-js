export function Menu(){
    const $menu = document.createElement('nav');
    $menu.classList.add('menu')
    $menu.innerHTML = `    
      <a class="link_menu" href="/">Inicio</a>
      <a class="link_menu" href="/nosotros">Nosotros</a>
      <a class="link_menu" href="/#servicios">Servicios</a>
      <a class="link_menu" href="/portafolio">Portafolio</a>
      <a class="link_menu" href="/contacto">Contacto</a>       
    `;
    return $menu;
}