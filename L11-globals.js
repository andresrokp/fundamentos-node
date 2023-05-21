let count=0
// const inte = setInterval(() => {
//     console.log('print - ',count);
//     if (count === 4) {
//         clearInterval(inte)
//     }
//     count++;
// }, 1500);

console.log(__filename);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function testSetimmediate(){
    
    let a = Array(200).fill(1000000);
    let end1=0;
    let beg1 = performance.now()
    a.forEach((e,i)=>{
        console.log(i);
        a[i]=primeFactorsTo(e)
        if(i === 199) {
            end1 = performance.now()
            console.log(`SIN setimmediate out: ${end1-beg1}`);
        }
    })

    a = Array(200).fill(1000000);
    let end2=0;
    let beg2 = performance.now()
    a.forEach((e,i)=>setImmediate(()=>{
        console.log(i);
        a[i]=primeFactorsTo(e)
        if(i === 199) {
            end2 = performance.now()
            console.log(`CON setimmediate out: ${end2-beg2}`);
        }
    }))

}

function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i){
        if (!store [i]){
            primes.push(i);
            for (j = i << 1; j <= max; j += i){
                store[j] = true;
            }
        }
    }
    return primes;
}

testSetimmediate()