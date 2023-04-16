const person ={
    firstName : 'shohan',   
    lastName: 'ali',
    id:  654,
    fullaName:  function(){
        return this
    }

}
const getName = person.fullaName()
console.log(getName);

// function a(){
//     console.log(this);
// }
// a()