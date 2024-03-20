// class notebook {
//     constructor (name, price, company){
//         this.name = name
//         this.price = price
//         this.company = company
//     }
// }

// const notebook1 = new notebook('Macbook', 2000000, 'apple')

// console.log(notebook1)
// console.log(notebook1.name)
// console.log(notebook1.price)
// console.log(notebook1.company)

// class Product {
//     constructor (name, price){
//         this.name = name
//         this.price = price
//     }
//     printinfo() {
//         console.log(`name: ${this.name}, price: ${this.price}`)
//     }
// }

// const notebook = new Product('mac', 200000)

// notebook.printinfo()

// const computer = {
//     name: 'mac',
//     price: 200000,
//     printinfo: function() {
//         console.log (`name: ${this.name}, price: ${this.price}`)
//     }
// }
// computer.printinfo()

class shop {
    constructor ( color, size, price) {
        this.color = color
        this.size = size 
        this.price = price
    }
    printinfo() {
        console.log(`color: ${this.color}, size: ${this.size}, price: ${this.price}`)
    }
}

const cloth = new shop ('red', 'L', 200000)
const pants = new shop ('blue', 'S', 10000)

cloth.printinfo()
pants.printinfo()
