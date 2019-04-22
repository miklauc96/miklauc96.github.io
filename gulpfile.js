var gulp = require("gulp");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var minifycss = require("gulp-minify-css");
// gulp.task("task-name", function(){
// something to do
// });

/*
--  TOP LEVEL FUNCTIONS  --

gulp.task  - define tasks
gulp.src - points to files to use
gulp.dest - points to folder to output
gulp.watch - watch files and folder for changes

*.html - choose all files that are html

*/


gulp.task('styles', async function() {
    gulp.src('assets/scss/*.scss')
    .pipe(sass().on('error',sass.logError))
     .pipe(gulp.dest('assets/css'))

});



//optimize images 
gulp.task('imagemin', () =>
    gulp.src('pictures/*')
        .pipe(imagemin())
        .pipe(gulp.dest('pictures'))
);

// minimize CSS file
gulp.task('minifycss', async function(){
    gulp.src('assets/css/*.css')
    .pipe (minifycss())
    .pipe(gulp.dest("assets/css"))
    });




gulp.task('default', gulp.series(['styles','imagemin', 'minifycss' ]));


