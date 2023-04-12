// 1 .  useing object literal

const student = { name :  "Shakib " , job: "Criket" }

//  2 consttructor 

const  person =  new Object();

const humman = Object.create(null)

const  budy  =  Object.create(student)

// 3 class constructor 

// class People{

//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

// }

// const peop = new People('Manus' , 12 )
// // console.log(peop);
class player{
    constructor(match, run){
        this.match = match
        this.run = run
    }

}
const total = new player(25, 50)
// console.log(total);

// using function 

// function  Manus(name){
//     this.name = name
// }

// const  man  = new Manus('kader');

// console.log(man);

function manus(name){
    this.name = name
}
const man = new manus('janina')
console.log(man);