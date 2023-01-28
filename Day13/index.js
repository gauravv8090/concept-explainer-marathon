console.log("helllo")

var count = 0

document.getElementById("count").innerText = `Count is ${count}`

document.getElementById("AddBtn").addEventListener("click", ()=>{
    debugger
    count = count + 1;
    console.log(count, "inside callback function")
    document.getElementById("count").innerText = `Count is ${count}`
})

console.log(count, "Outside callback")
