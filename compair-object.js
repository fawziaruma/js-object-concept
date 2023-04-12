const first ={a:1 , b:2}
const second ={a:1 , b:2}
const third = first ;

// if(first === second){
//     console.log('Object are equile');
// }
// else{
//     console.log('Object are differnt ');
// }

const  abc =  { a:1 , b:2 ,c:3}
const  second2  =  {a:1 , b:2 ,c:3};
// console.log(JSON.stringify(first2));
// console.log(JSON.stringify(second2));

if(JSON.stringify(abc) === JSON.stringify(second2)){
    console.log('object are  equeal');
}
else{
    console.log('Object are Not  Eq');
}


function  compareObject(Obj1  , Obj2){
    if(Object.keys(Obj1).length !== Object.keys(Obj2).length ) {
        return false;
    }
    for (const prop in  Obj1 ){
        if(Obj1[prop] !== Obj2[prop] ){
            return  false
        }
    }

    return true

}


const  isEqual =  compareObject(abc , second2);
console.log(isEqual);





