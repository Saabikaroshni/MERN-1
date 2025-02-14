//Conditional statement
/*
1.Normal if
2.If else
3.nested if
4.else if ladder
5.switch

*/

//Looping Statement
/*
1.while
2.do  while
3.for(;;) use let
4.forin
5.forof
6.forEach
*/
array=[10,20,30,"abc",true,"hello",[10,20,30]]
/*for(i in array){
    console.log(i);
}
for(i of array){
    console.log(i);
}*/
Object1={
    "firstname":"St.Joseph Institute",
    "lastname":"Institue of Technology",
    "depts":["CSE","IT","AD","ECE"],
    "training":"MERN"//o/p in single quotes
}/*
for(i of Object.keys(Object1)){
    console.log(i);
}// for in is for key
for(i of Object.values(Object1)){
    console.log(i);
}
for(i of Object.entries(Object1)){
    console.log(i);
}
for({key,value} of Object.entries(Object1)){
    console.log(key,value);
}*/

/*for(i in Object1){
    console.log(i); if put of like this error
}*/

array.forEach((ele)=>{
    console.log(ele)
})
Object.values(Object1).forEach((key,ele)=>{
    console.log(key,ele)
})