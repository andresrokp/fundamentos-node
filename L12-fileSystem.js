const { log } = require('console')
const fs = require('fs')

let path = __dirname + '/filesToPlay/fileToRead.txt'
// fs.readFile(path,function (err,buf) {
//     if (err) log(err);
//     else log(buf.toString());
// })

const fsp = fs.promises

let path2 = __dirname + '/filesToPlay/fileToWriteRead.txt'

let tick = performance.now()

fsp.appendFile(path2,'\n\nUna nuena línea')
.then(()=>{log(performance.now()-tick);return fsp.readFile(path2)})
.then((res)=>{log(performance.now()-tick);log(res.toString())})
.catch('algo salió mal')

log('\n\n - - - - \n')

new Promise((res)=>{res()})
.then(()=>{log(performance.now()-tick);return new Promise((res)=>{res()})})
.then(()=>{log(performance.now()-tick);return new Promise((res)=>{res()})})
.then(()=>{log(performance.now()-tick);fsp.unlink(path2)})
.then(()=>{log('se borró esa verga')})

// con dos then luego del append file y un then para borrar el archivo, aparece un error porque el segundo then ya encuentra el archivo borrado

// está interesante como jugar con los then para que una suceda primero que la otra
