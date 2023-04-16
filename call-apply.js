
// function hello(hi){
//     console.log(hi);
// }

// function hoop(){
//     const a = 20
// }

// const get =  hello(hoop)

// function print(callback){
//    callback()
// }

// print(yeah)


// function yeah(){
//     console.log('This  is function yeah ');
// }
const message = function(){
    console.log('The Message is Shown 9 second ');
}
setTimeout(message , 9000)

setTimeout(function(){
    console.log('vay tumi 5 se pore aso');
} , 5000 )
setTimeout(()=>{
    console.log('4 second por aso');
} , 4000)

