const bottle = {
    color: 'yellow',
    hold:"watater",
    price:50,
    isCleand: true 
}

// for ( let  i =  0 ; i < 10 ; i++ ){
//     console.log(i);
// }

//  for(const num in bottle){
//     console.log(num);
//  }

// const  keys  = Object.keys(bottle)
 
// for (const prop of  keys ){
//     // console.log( prop , bottle[prop]);
// }
// advanced

const  entrites = Object.entries(bottle)
console.log(entrites);
// const  [key , value] = ['color' ,  'yellow']
for(const [key , value] of  Object.entries(bottle)){
    console.log(key ,value);
}
const arr = ['color', 'jeans', 'tom']
console.log(arr);