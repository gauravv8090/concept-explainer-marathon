// function getData(data, callback) {
//   setTimeout(() => {
//     console.log(data + "Data has ben Fetched");
//     callback();
//   }, 3000);
// }

// const data1 = "1";
// const data2 = "2";

// getData(data1, function AppendData() {
//   setTimeout(() => {
//     console.log("Appends Data");
//    }, 1000);
//      getData(data2, function show() {
//        setTimeout(() => {
//       console.log("Data has been shown");
//     }, 2000);
//   });
// });
// // AppendData()



const myPromise = new Promise(function (resolve, reject){
    setTimeout(()=>{
        // console.log("PROMISE HAS BEEN RESOLVED")
        resolve("DATA HAS BEEN FETCHED")
    }, 3000)
})

myPromise.then((res)=>console.log(res)).then(()=>console.log("show the data"))














