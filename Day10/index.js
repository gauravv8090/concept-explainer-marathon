// console.log("hello")


// document.getElementById("GP").addEventListener("click", ()=>{
//     console.log("GP CLICKED")
// }, false)
// document.getElementById("PAR").addEventListener("click", ()=>{
//     console.log("PAR CLICKED")
// }, false)
document.getElementById("GP").addEventListener("click", (event)=>{
    // console.log("GP CLICKED")
    // console.log(event)

    if(event.target.id === "GP"){
        console.log("GP CLICKED")
    }else if (event.target.id === "PAR"){
        console.log("PAR CLICKED")
    }else{
        console.log("CHILD CLICKED")
    }
}, false)