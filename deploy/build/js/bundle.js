
const main = document.querySelector('main')
let menu = document.querySelector('.navbar')
let imgPhone = document.querySelector('#img-phone')
let imgTablet = document.querySelector('#img-tablet')

document.addEventListener("DOMContentLoaded", function(event) {
    

    

    // Look for .hamburger
    let hamburger = document.querySelector(".hamburger");
    


    //Si es mayor, que se meuestre el menu
    if (window.matchMedia("(min-width: 767px)").matches){
        mostrarMenu()
        cambiarImagen()
    }


    //Añadimos el evento On click
    hamburger.addEventListener("click", function() {
    
        hamburger.classList.toggle("is-active");

        if(hamburger.classList.contains('is-active')){
            mostrarMenu()
        }
        else{
            ocultarMenu()
        }
    })

    

    //Cada que cambia el tamaño, cambia las clases del botón y del menú
    window.addEventListener('resize', function(){

        if (window.matchMedia("(max-width: 767px)").matches){ 
            //Aquí había un bug, cuando se abría el menú y leugo se cambiaba a tablet, y luego a phone, desaparecía el menú, pero el boyón seguí en x
            ocultarMenu()
            
            if(hamburger.classList.contains("is-active")){
                hamburger.classList.toggle("is-active")
            }
            

        }
        else{
            mostrarMenu()
        }

        //Cambiamos la imagen que deseamos mostrar, en función al tamaño de pantalla

        margenSuperior = main.style.marginTop



        //Mostrar u ocultar imagen
        let dispositivo = 'phone'
        let anchoPantalla = tamVentana()[0]
        

        if (anchoPantalla < 768)
            dispositivo = 'phone'
        else
            dispositivo = 'tablet'


        if(dispositivo === 'phone'){
            imgPhone.classList.remove('img-oculta')
            imgTablet.classList.add('img-oculta')
        }
        else if(dispositivo === 'tablet'){
            imgPhone.classList.add('img-oculta')
            imgTablet.classList.remove('img-oculta')
        }
            
            



    
    }, true)





    scrollNav()


});

function mostrarMenu(){
    menu.classList.add('visible')
    menu.classList.remove('oculto')

    //Cambiamos el margen del main para que se mueva cuando abrimos el menú        
    main.style.marginTop = '25rem'  

}

function ocultarMenu(){
    menu.classList.remove('visible')
    menu.classList.add('oculto')

    //Cambiamos el margen del main para que se mueva cuando abrimos el menú    
    main.style.marginTop = '0' 
}

function cambiarImagen(){
    imgPhone.classList.toggle('img-oculta')
    imgTablet.classList.toggle('img-oculta')

}

function tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam;
}

function scrollNav(){
    const enlaces = menu.querySelectorAll('a')
    
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault()
            
            const seccion = document.querySelector(e.target.attributes.href.value)

            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}