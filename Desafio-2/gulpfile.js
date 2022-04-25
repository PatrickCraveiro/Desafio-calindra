const gulp = require("gulp");
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const minifyCss = require("gulp-clean-css");
const minifyHtml = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));

function cleanDist() {
  return gulp
    .src(["build", "src/dist"], {
      allowEmpty: true,
    })
    .pipe(
      clean({
        read: false,
      })
    );
}

function buildCss() {
  let arrayFiles = [
    `src/home/reset.scss`,
    `src/components/*.scss`,
    `src/components/**/*.scss`,
  ];

  let stream = gulp
    .src(arrayFiles)
    .pipe(concat(`style.min.css`))
    .pipe(sass())
    .pipe(minifyCss());

  return stream.pipe(gulp.dest("src/dist"));
}

gulp.task(
  "bundle",
  gulp.series(cleanDist, gulp.series(gulp.parallel(buildCss)))
);
