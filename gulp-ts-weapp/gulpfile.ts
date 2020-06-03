import GulpClient from "gulp"
const tsPlugin = require("gulp-typescript")
const plumber = require('gulp-plumber');
let tsProject = tsPlugin.createProject("tsconfig.json");

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

function watchTask() {
    GulpClient.watch(["./**/*.ts", "!node_modules/**"], tsTask)
}

GulpClient.task("build", tsTask)
GulpClient.task("watch", watchTask)