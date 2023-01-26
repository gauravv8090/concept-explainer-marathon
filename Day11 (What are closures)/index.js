console.log("Hello World")


function outer(){
    var ans = 10; 
    return function inner (){
        return ans*ans;
    }
}

const data = outer()()
console.log(data)