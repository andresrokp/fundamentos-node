
let i = 0;

setInterval(function(){
    i++;
    console.log(i);
    if(i === 5){
        console.log('provocamos error')
        let a = i + b;
    }
},1000)

console.log('hola mundo')