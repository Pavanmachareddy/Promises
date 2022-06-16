createPost(){
    return new Promise(() =>{

    });
}
// seensomeoneMessage(){
//     return new Promise(() =>{

//     })
// }
const user ={
    username : 'pavan',
    lastactivitytime:'16th of june'

}
upadtelastactivitytime ={

}
userupdatepost(){
    Promise.all([createPost,upadtelastactivitytime])
    .then(([createPostresolves,updatelastactivitytimeresolve]) =>{
        console.log(updatetelastactivitytimeresolves)

    })
    .catch(err=> console.log(err))
}