import { Layout } from "./componentes/Layout.js"; 



console.log("SPA Desing Zavan");

document.addEventListener('DOMContentLoaded', ()=>{    
    const App = document.querySelector('#app');   

    App.appendChild(Layout());    
});