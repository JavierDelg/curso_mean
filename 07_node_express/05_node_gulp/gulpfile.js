var [gulp, concat, uglify] = [require("gulp"), require("gulp-concat"), require("gulp-uglify")];
//gulp.task("comprime", tareasEnComprimir);
gulp.task("default", tareasEnComprimir);
gulp.watch("js/source/*.js", tareasEnComprimir);
/*
function tareasEnComprimir() {
    var glob = gulp.src("js/source/*.js");
    glob.pipe(concat("funciones.min.js")).pipe(uglify()).pipe(gulp.dest("js/build/"));
}*/

function tareasEnComprimir(fichero) {

    // GLOB	
    var glob = gulp.src(["js/source/*.js", "!js/source/2.js"]);

    glob.pipe(concat("funciones.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("js/build/"));

    console.log("Modificando: " + fichero.path);
}