// async function asAW(){ 
//     var a=15             // async na return-promise void
//     setTimeout(
//         function(){
//             console.log("Hello");
//         }
//     ,5000)
//     console.log(await a);
    
// }
// asAW()
/*

console.log(asAW());
asAW().then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(asAW);
})*/

//Instagram console Demo for post,like,comment,share

shareCode =async ()=>{
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost("shared the post Successfully")
        },5000);
    })
}

commentCode =async ()=>{
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost("commented the post Successfully")
        },5000);
    })
}

likeCode =async ()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
            likePost("Liked the post Successfully")
        },5000);
    })
}

async function postCode(){
    var post = new Promise((createPost)=>{
        setTimeout(()=>{
            createPost("Post Created Successfully")
        },5000);
        
    })
    const [pos,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(pos);
    console.log(like);
    console.log(comment);
    console.log(share);

}
postCode()