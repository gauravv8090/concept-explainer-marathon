// console.log("Hello World")


const myPromise = new Promise((resolve, reject)=>{
    resolve("Promise got resolved")
})

const test = (time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof time === 'number'){
                resolve(`After ${time} ms I got resolved `)
            }else{
                reject("GOT REJECTED")
            }
        }, time)
    })
}

// test('5000').then((res)=>console.log(res)).catch((err)=>console.log(err))
 

var promise  = []

promise[0] = test(2000).then((res=>"promise1"))
promise[1] = test(1000).then((res=>"promise2"))
promise[2] = test(3000).then((res=>"promise3"))

Promise.all(promise).then((res)=>console.log(res))
// myPromise.then((res)=>console.log(res))