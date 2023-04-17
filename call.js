// call()

// var myCustomObject = {

//     name: 'Fawzia Ruma ',
//     age: 26,
//     job:'student',
//     anotherObj:{
//         name: 'shohan ',
//         value: function(){
//             console.log('MY Name Is ' +  this.name );
//         }
//     }
// }

// myCustomObject.anotherObj.value();
// myCustomObject.anotherObj.value.call(myCustomObject);

var myCustomObject = {

    name: 'Fawzia Ruma ',
    age: 26,
    job:'student',
    anotherObj:{
        name: 'shohan ',
        value: function(){
            // console.log('MY Name Is ' +  this.name );
        }.call(myCustomObject)
    }
}

// 

var karim = {
    name: 'karim',
    dob:1996,
    age: function(currentYear){
        console.log(this.name + ' is ' + (currentYear - this.dob  ) +  'years old' );
    }
}

var rahim  = {
     name: ' Abdur Rahim',
     dob: 1986
}
console.log(karim.age(2023));
console.log(karim.age.call( rahim , 2023));