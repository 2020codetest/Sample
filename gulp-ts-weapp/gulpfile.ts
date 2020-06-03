import GulpClient from "gulp"

function testTask(done: (err?: any) => void){
    console.log("test task")
    done()
}

GulpClient.task("test", testTask)