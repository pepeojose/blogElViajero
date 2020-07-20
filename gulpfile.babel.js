const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const autoprefixer = require("gulp-autoprefixer")
const babel = require("gulp-babel")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const plumber = require("gulp-plumber")

const browserSync = require('browser-sync')

const server = browserSync.create()


gulp.task('pug', () => {
    return gulp.src('./dev/views/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./public/'))
})

gulp.task('styles', () => {
    return gulp.src('./dev/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: "compact"
        }))
        .pipe(autoprefixer())

    .pipe(gulp.dest('./public/css'))
        .pipe(server.stream())
})


gulp.task("babel", () => {
    return gulp
        .src("./dev/js/*.js")
        .pipe(plumber())
        .pipe(
            babel({ presets: ["@babel/preset-env"] })
        )
        .pipe(concat("scripts.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./public/js/"))
})


gulp.task('default', () => {
    server.init({
        server: './public'
    })

    gulp.watch('./dev/views/**/*.pug', gulp.series('pug')).on('change', server.reload)
    gulp.watch('./dev/scss/**/*.scss', gulp.series('styles'))
        //JS
    gulp.watch("./dev/js/*.js", gulp.series('babel')).on('change', server.reload)
})