'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const minifyJS = require('gulp-js-minify');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp.src('./app/views/pages/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./assets/public/css'));
});

gulp.task('babel', () => {
    return gulp.src('./assets/src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        })).pipe(minifyJS()).pipe(gulp.dest('./assets/public/js'));
});

gulp.task('default', () => {
    gulp.watch('./app/views/**/*.scss', gulp.series('sass'));
    gulp.watch('./assets/src/**/*.js', gulp.series('babel'));
});