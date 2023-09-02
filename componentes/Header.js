import { Menu } from "./Menu.js";

export function Header(){
    const $Header = document.createElement('header'); 
    $Header.classList.add('header');        
    $Header.innerHTML = `    
      <div class="container_logo">
        <img src="public/img/design-zavan13.png" alt="Design Zavan Logo" loading="lazy"  class="logo">
      </div>               
    `;    
    $Header.appendChild(Menu());
    return $Header;
}