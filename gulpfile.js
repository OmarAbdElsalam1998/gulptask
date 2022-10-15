const htmlmin = require('gulp-htmlmin');
const { src ,dest, series, parallel,watch} = require('gulp');
const minJs=require("gulp-terser");
const concat = require("gulp-concat");
//////// HTML
function Htmlmin(){
    return src("assets/*.html").pipe(htmlmin({ collapseWhitespace: true ,removeComments:true})).pipe(dest("dist"));
}
exports.html=Htmlmin;
////////// JS

function JSMinfy() {
  return src("assets/Js/*.js").pipe(concat("script.js"))
  .pipe(minJs())
  .pipe(dest("dist/js"));
}
exports.js=JSMinfy;
const imgMin=require("gulp-imagemin");
function imgsMinify() {
  return src("assets/images/*").pipe(imgMin())
  .pipe(dest("dist/images"));
}
exports.default=imgsMinify;
const cssMin=require("gulp-clean-css");
function cssMinfy() {
  return src("assets/css/**/*.css").pipe(concat("style.css"))
  .pipe(cssMin()).pipe(dest("dist/css"));
}
exports.css=cssMinfy;

function watchTask() {
  watch(["assets/css/**/*.css","assets/*.html","assets/js/*.js"],{interval:1000}, parallel(cssMinfy,Htmlmin,JSMinfy));
}


exports.default=series(parallel(JSMinfy,cssMinfy,Htmlmin),watchTask);