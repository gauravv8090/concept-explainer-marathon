// declaration method
class Product {
    constructor(name, price, discount){
        this.name= name
        this.price= price
        this.discount= discount
    }
}


const paper = new Product("Plain", 500, 10)


// expression method 

const Product1 = class {
    constructor(name, price, discount){
        this.name= name
        this.price= price
        this.discount= discount
    }
    get getProductPrice(){
        return this.price
    }

    set setProductPrice(value){
        this.price = value
    }
}

const pen = new Product1("link", 20, 5)