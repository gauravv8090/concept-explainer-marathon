console.log("hello World")

// function Additon (a, b, c){
//     return a+b+c;
// }

// let res = Additon(2, 3, 4);
// console.log(res)

function Addition (a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}

// let res = Addition(5);
// let data = res(2)
// let ans = data(3)

// let ans = Addition(5)(2)(3)


let user = {
    name : 'Gaurav',
    age: 20
}

function UserInfo(obj){
    return function (data){
        return obj[data];
    }
}


let ans = UserInfo(user);
console.log(ans('age'))

// console.log(ans)







