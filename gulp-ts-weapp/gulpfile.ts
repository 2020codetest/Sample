import GulpClient from "gulp"
const tsPlugin = require("gulp-typescript")
let tsProject = tsPlugin.createProject("tsconfig.json");

function tsTask(){
    return tsProject.src()
    .pipe(tsProject())
    .pipe(GulpClient.dest("."))
}

function watchTask() {
    GulpClient.watch(["./**/*.ts", "!node_modules/**"], tsTask)
}

GulpClient.task("build", tsTask)
GulpClient.task("watch", watchTask)