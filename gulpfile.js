var gulp = require('gulp');
var sass = require('gulp-sass');
var sourceMaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var template = require("gulp-template");
var dest = require("gulp-dest");
gulp.task('styles', function (e) {
    return gulp.src('./styles/template/ordent-styles.html')
        .pipe(template({ css: sass.compiler.renderSync({ file: './styles/sass/ordent-styles.scss', outputStyle: 'compressed' }).css }))
        .pipe(gulp.dest('./'));
});

gulp.task('responsives', function(e){
    return gulp.src('./styles/template/ordent-responsives.html')
        .pipe(template({css: sass.compiler.renderSync({ file: './styles/sass/ordent-responsives.scss', outputStyle: 'compressed'}).css}))
        .pipe(gulp.dest('./'));
})

gulp.task('default', ['styles'],function () {
    gulp.watch('./styles/sass/ordent-styles.scss', ['styles']);
    gulp.watch('./styles/sass/ordent-responsives.scss', ['responsives']);
    gulp.watch('./gulpfile.js', ['styles', 'responsives']);
});