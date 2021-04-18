const main = document.querySelector('main')
let menu = document.querySelector('.navbar')


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



    }, true)
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