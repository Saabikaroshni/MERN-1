//1)variables - refer declarationAndDatatypes.
//variable - let,const

//2)arrow Function
/*
var testArrowFunction= () =>{
    console.log("This is test arrow function")
}
testArrowFunction()

//3)scoping
var a =10;
console.log(a);//10
{
    a=20;
    console.log(a);//20
    const b=30;
    console.log(b);//30
    let c=40;
    console.log(c);//40
    a=30;
    console.log(a);//30
    var e=50;
    console.log(e);//50
    f=30// by default var
}
console.log(a);//10
console.log(e);//50
console.log(f);
//console.log(c); //c is undefined
//console.log(b);  b is const(local scope)
let g=10;
while(g<12){
    console.log(g);
    g++
}
console.log(g);
// 4)ternary
a=10
console.log((a%2)?"ODD":"EVEN");

//5) spread operator(...)
stud1year = ["user1","user2","user3"]
stud2year = ["user4","user5","user6"]
stud3year = ["user7","user8","user9"]
stud4year = ["user10","user11","user12"]
studDB = [...stud1year,...stud2year,...stud3year,...stud4year]
console.log(studDB);
alumniDB = stud4year
console.log(alumniDB);

//6) Rest operator(...)
function studentDB(...studDataBase){
    console.log(studDataBase);
}
studentDB(studDB)
//7) Destructing Operator []
var array = [10,20,30]
var [a,b] = array
console.log(a,b)

//8)Hoisting
// * 8.1variable hoisting 
console.log(a);
var a = 10; // let,const - reference error
console.log(a);

 //8.2 functional hoisting
funhoisting()
function funhoisting(){
    console.log("Checking functional hoisting");
}
funhoisting()
funhoisting = () =>{
    console.log("Checking Functional Hoisting");
}*/
//9) class and Objects

class ClassEg{
    classFun=()=>{
        console.log("Hello"); // no return 
    }
}
// obj = new ClassEg
// console.log(obj.classFun());
console.log(new ClassEg().classFun());





