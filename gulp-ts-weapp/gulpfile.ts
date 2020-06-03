import GulpClient from "gulp"
const ts = require("gulp-typescript")
const sourcemaps = require("gulp-sourcemaps")
const sass = require("gulp-sass")
const rename = require("gulp-rename")
const tsProject = ts.createProject("tsconfig.json");
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');

let timer: any = undefined
function debounce(task: () => any, interval: number): (done: (error?: any) => void) => void{
    return function(done: (error?: any) => void){
        if (timer){
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            console.log("tasks starts " + new Date().toString())
            task.call(undefined)
            timer = undefined
            console.log("tasks ends " + new Date().toString())
            done()
        }, interval)
    }
}

function esLintTask(): any{
    return GulpClient.src(['./**/*.ts', '!node_modules/**', "!gulpfile.ts"])
        .pipe(plumber({
            errorHandler: function(error: any){
                console.log(error.toString())
                this.emit('end')
            }
        }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function sassTask() : any{
    return GulpClient.src(["./**/*.sass", '!node_modules/**'])
    .pipe(plumber({
        errorHandler: function(error: any){
            console.log(error.toString())
            this.emit('end')
        }
    }))
    .pipe(sass())
    .pipe(rename({extname: ".wxss"}))
    .pipe(GulpClient.dest(function (file: any) {
        return file.base;
    }))
}

function tsTask() : any{
    return tsProject.src()
    .pipe(plumber({
        errorHandler: function(error: any){
            console.log(error.toString())
            this.emit('end')
        }
    }))
    .pipe(tsProject())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(GulpClient.dest(function (file: any) {
        return file.base;
    }))
}

GulpClient.task("build", GulpClient.parallel(tsTask, sassTask, esLintTask))
GulpClient.task("dev", function() {
    GulpClient.watch(["./**/*.ts", '!node_modules/**', "!gulpfile.ts"], debounce(tsTask, 1000))
    GulpClient.watch(["./**/*.ts", '!node_modules/**', "!gulpfile.ts"], debounce(esLintTask, 1000))
    GulpClient.watch(["./**/*.sass", '!node_modules/**'], debounce(sassTask, 1000))
})
