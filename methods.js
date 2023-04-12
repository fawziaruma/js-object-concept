const student = {
    id:101,
    name: 'Rj Kibri',
    money: 5000,
    major: 'mathematice',
    isRich: false,
    subjects:['english' , 'econmice' , 'math 101' , 'calcus' ],
    bestFriend: {
        name : 'kundu ',
        major: 'math'
    }, 
    takeExam: function () {
        console.log(this.name ,  'taking exam');
    },
    tratDey: function (expence  , boksis){
        this.money = this.money -  expence - boksis;
        return this.money
    }

}
// student.takeExam();
const  reamining  =  student.tratDey(900 , 200 );
const reamining2 =  student.tratDey(500, 700);
console.log(reamining2);
