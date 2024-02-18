for ( let i=0; i<10; i++){
    console.log(i);
}

console.log('----------')

let nums =[ 23,45,56,65,86,43];

for(let i of nums){
    console.log(i);
}

for(let n of nums){
    if(n%2 !==0){
        console.log(n);
    }
}