



document.addEventListener("DOMContentLoaded", function(event) {

    // Look for .hamburger
    let hamburger = document.querySelector(".hamburger");
    let menu = document.querySelector('.navbar')
    let imgPhone = document.querySelector('#img-phone')
    let imgTablet = document.querySelector('#img-tablet')

    //Si es mayor, que se meuestre el menu
    if (window.matchMedia("(min-width: 767px)").matches){
        mostrarMenu()
        //cambiarImagen()
    }


    

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
    
    }, true)

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

    function mostrarMenu(){
        menu.classList.add('visible')
        menu.classList.remove('oculto')

    }

    function ocultarMenu(){
        menu.classList.remove('visible')
        menu.classList.add('oculto')
    }

    function cambiarImagen(){
        imgPhone.classList.toggle('img-oculta')
        imgTablet.classList.toggle('img-oculta')

    }


});



