//primitive/Primary Datatype
var a=10.123
let b="abc"
const c=true
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));

a="abc"
b=21.21
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c))
//c=false it show error bcoz it is const

array=[1,6,"abc",true]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array);
Object1={
    "firstname":"St.Joseph Institute",
    "lastname":"Institue of Technology",
    "depts":["CSE","IT","AD","ECE"],
    "training":"MERN"//o/p in single quotes
}
console.log(Object1)
console.log(Object1.depts)
console.log(Object1['training'])

console.log(object);
Object2={}
Object2["Firstname"]="hello"
Object2["lastname"]="SJIT"
console.log(Object2)

Object3=new Object()
Object3["Firstname"]="hello"
Object3["lastname"]="SJIT"
console.log(Object3)
Object3.training="MERN"
Object3.Depts=["CSE","IT","AD","ECE"]
console.log(Object3);
set=new Set("hello")
console.log(set);
 set1=new Set(["hello"])
 console.log(set1);
set1.add("hello")
console.log(set1);

