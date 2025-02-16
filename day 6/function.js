function testFunction1(){
    console.log("This is function without parameter without return type")
}
testFunction1()
function testFunction2(x){
    console.log("This is function with parameter without return type",x)
}
testFunction2(5)
function testFunction3(){
    return "This is function with parameter with return type"
}
console.log(testFunction3());
function testFunction4(x){
    return x
}
console.log("This is function with parameter with return type",testFunction4(5));