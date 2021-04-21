const main = document.querySelector('main')
let menu = document.querySelector('.navbar')
let proyecto = filename() === 'proyecto-1.html'? 'purificadora': 'tlapalería'  


document.addEventListener("DOMContentLoaded", function(event) {
    console.log(proyecto)
    // Look for .hamburger
    let hamburger = document.querySelector(".hamburger");
    


    //Si es mayor, que se meuestre el menu
    if (window.matchMedia("(min-width: 767px)").matches){
        mostrarMenu()
        //cambiarImagen()
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

    cargarGalería()
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

function cargarGalería(){
    const divGalería = document.querySelector('.galeria-imagenes')

    for(let i=1; i<=4; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `build/img/${proyecto}-${i}.webp`

        //Añadir función de mostrarImagen
        imagen.onclick = mostrarImagen
        imagen.dataset.imagenId = i

        const lista = document.createElement('LI')
        lista.appendChild(imagen)
        divGalería.appendChild(lista)
    }
}

function mostrarImagen(e){
    const body = document.querySelector('body')
    const id = parseInt( e.target.dataset.imagenId )

    console.log(id)

    const imagen = document.createElement('IMG')
    imagen.src = `build/img/${proyecto}-${id}.webp`

    const overlay = document.createElement('DIV')
    overlay.appendChild(imagen)
    overlay.classList.add('overlay')

    console.log(imagen)
    overlay.onclick = function (){
        overlay.remove()
        body.classList.remove('fijar-body')
    }

    //Botón para cerrar la imagen 
    const btnCerrar = document.createElement('P')
    btnCerrar.textContent = 'X'
    btnCerrar.classList.add('btn-cerrar')
    overlay.appendChild(btnCerrar)

    //Evento 
    btnCerrar.onclick = function(){
        overlay.remove()
        body.classList.remove('fijar-body')
    }

    //Mostrar en el HTML
    body.append(overlay)
    body.classList.add('fijar-body')
}

function filename(){
    var rutaAbsoluta = self.location.href;   
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}