export function ScrollTopBtn(){
    const $scrollTopBtn = document.createElement('button');
    $scrollTopBtn.classList.add('scroll_top_btn');
    $scrollTopBtn.classList.add('hidden');
    $scrollTopBtn.innerHTML = `
        <i class="fa fa-long-arrow-up" aria-hidden="true"></i>  
    `;    
    
    window.addEventListener('scroll', ()=>{
     const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
         if(scrollTop > 850){            
            $scrollTopBtn.classList.remove('hidden')  
          }else{
            $scrollTopBtn.classList.add('hidden')
          }        
       /*  console.log(window.pageYOffset, document.documentElement.scrollTop) */ /* Se ven los numeros de la posicion en la pantalla */
    });
    
    document.addEventListener('click', (e)=>{
        /* console.log($scrollTopBtn)
        console.log(e)
        console.log(e.target) */
        if(e.target.matches('.scroll_top_btn')){
          window.scrollTo({
            behavior: 'smooth',
            top: 0
          })
        }
    });
    return $scrollTopBtn
}