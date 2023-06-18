var gulp = require('gulp');
var browserSync = require('browser-sync').create();
/*var concatCss = require('gulp-concat-css');*/

gulp.task('server', function(){

    browserSync.init({
        server: "./"
    });

    gulp.watch(["./*.html", "./css/*.css"], ['css']).on('change', browserSync.reload);
});

gulp.task('css') => {
    return gulp.src(['./css/main.css']);
    .pipe(concatCss("bundle.css"));
    .pipe(gulg.dest('css'));
})


gulp.task('default', ['serve']);
