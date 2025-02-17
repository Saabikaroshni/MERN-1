function SJIT(message,abc){
    console.log(message);
    abc()
}
function callbackSJIT(){
    console.log("Welcome back to SJIT");
}
SJIT("Welcome to SJIT",callbackSJIT)