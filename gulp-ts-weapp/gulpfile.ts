import GulpClient from "gulp"
const tsPlugin = require("gulp-typescript")
const plumber = require('gulp-plumber');
const sass = require("gulp-sass")
const rename = require("gulp-rename")
const eslint = require('gulp-eslint');
let tsProject = tsPlugin.createProject("tsconfig.json");

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

function tsTask(){
    return tsProject.src()
    .pipe(plumber({
        errorHandler: function(error: any){
            console.log(error.toString())
            this.emit('end')
        }
    }))
    .pipe(tsProject())
    .pipe(GulpClient.dest("."))
}

let timer: any = undefined
function debounce(task: () => void, delay: number): (done: (error?: any) => void) => void{
    return function(done: (error?: any) => void){
        if (timer){
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            task.call(undefined)
            timer = undefined
            done()
        }, delay)
    }
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

function watchTask() {
    GulpClient.watch(["./**/*.ts", "!node_modules/**", "!gulpfile.ts"], tsTask)
    GulpClient.watch(["./**/*.ts", "!node_modules/**", "!gulpfile.ts"], esLintTask)
    GulpClient.watch(["./**/*.sass", "!node_modules/**"], sassTask)
}

GulpClient.task("build", GulpClient.parallel([tsTask, sassTask]))
GulpClient.task("watch", debounce(watchTask, 2500))