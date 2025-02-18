// function SJIT(message,abc){
//     console.log(message);
//     abc()
// }
// function callbackSJIT(){
//     console.log("Welcome back to SJIT");
// }
// SJIT("Welcome to SJIT",callbackSJIT)
function formsub(message,cbf){
    cbf()
    console.log(message)
}
function formvalid(){
    console.log("form validation success")
}
formsub("form submitted sucessfully",formvalid)