async function asAW(){   // async na return-promise void
    setTimeout(
        function(){
            console.log("Hello");
        }
    ,5000)
    
}
console.log(asAW());