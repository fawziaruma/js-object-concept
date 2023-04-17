var myCustomObject = {

    name: 'Fawzia Ruma ',
    age: 26,
    job:'student',
    anotherObj:{
        name: 'shohan ',
        value: function(){
            console.log('MY Name Is ' +  this.name );
        }
    }
}

myCustomObject.anotherObj.value.apply(myCustomObject)
var karim = {
    name: 'karim',
    dob:1996,
    age: function(currentYear , msg){
        console.log( msg , this.name + ' is ' + (currentYear - this.dob  ) +  'years old' );
    }
}
var rahim  = {
    name: ' Abdur Rahim',
    dob: 1986
}
karim.age(2023, 'hello world')
karim.age.apply(rahim, [ 2018 , 'hello world'])