// function promisesEg(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value)
//                 resolve("The promise is resolved")
//             else
//                 reject("This promise is rejected due to value is unmet")
//         },5000);
//     })
// }
// //console.log(promisesEg())
// promisesEg(false).then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// })
//location finder

//1.Promise(LocFound,LocNotFound)
//2.Chennai



function locationFinder(loc,time){
    var location=new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time)){
                locFound("chennai")
            }
            else{
                locNotFound(loc,"not found")
            }
        },time)
    })
    location.then((found,notFound)=>{
        console.log(found)
    }).catch(()=>{
        console.log(notFound)
    })
}
isLocationFound=(loc,time)=>{
    location="chennai"
    var t=3000
    if(loc===location && t<=time)return true
    else return false
}
console.log(locationFinder("chennai",1000))