const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-dart-sass')
const imagemin = require('gulp-imagemin')
const notify = require('gulp-notify')
const webp = require('gulp-webp')
const concat = require('gulp-concat')

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

//Función para compilar SASS
function css(){
    return src(paths.scss)
        .pipe( sass() )
        .pipe( dest('./build/css') ) 
}

function javascript(){
    return src(paths.js)
        .pipe( concat('bundle.js') )
        .pipe( dest('./build/js') ) 
}

function minificarCSS(){
    return src(paths.imagenes)
        .pipe( sass({
            outputStyle: 'expanded'
        }))
        .pipe( dest('./build/css/') )
}

function minificarImg(){
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest('./build/img') )
        .pipe( notify({message: 'Imagen minificada'}) )
}

function versionWebp(){
    return src(paths.imagenes) //Todas las imágenes en todos los formatos
        .pipe( webp() ) //convierte
        .pipe( dest('./build/img') ) //Aquí las guarda
        .pipe( notify({message: 'Versión webp lista'}) )
}

function watchFiles(){
    watch(paths.scss, css)
    watch(paths.js, javascript)
}

exports.css = css
exports.minificarCSS = minificarCSS
exports.minificarImg = minificarImg
exports.versionWebp = versionWebp
exports.watchFiles = watchFiles

exports.default = series( css, javascript,  minificarImg, versionWebp, watchFiles)