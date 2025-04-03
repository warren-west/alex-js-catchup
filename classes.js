// Template for creating objects (class):
class Phone {
    // properties
    // id
    // name
    // description
    // has5G = false
    features = ["bluetooth", "NFC"] // default / hard-coded values
    price = 100

    // constructor - a function that runs when you create a new instance of this class
    constructor(id, name, description, has5G) {
        // the 'this' keyword - it refers to the class containing it
        // it solves the problem of ambiguity
        this.id = id
        this.name = name
        this.description = description
        this.has5G = has5G

        this.printDetails()
    }

    // methods
    printDetails() {
        console.log(`ID: ${this.id} Name: ${this.name} Descr: ${this.description} Has 5G: ${this.has5G}`)
    }

    addFeature(newFeatureName) {
        this.features.push(newFeatureName)
    }

    getDiscountedPrice() {
        return this.price * 0.85
    }
}


// Runtime

const iPhone = new Phone(1, "iPhone", "An apple phone", true)

console.log(iPhone.id)
console.log(iPhone.name)
console.log(iPhone.description)
console.log(iPhone.has5G)
console.log(iPhone.features)
iPhone.addFeature("wireless charging")
console.log(iPhone.features)
console.log(iPhone.price)
console.log(iPhone.getDiscountedPrice())

const samsung = new Phone(2, "Galaxy", "A phone for humans", false)
console.log(samsung.id)
console.log(samsung.name)
console.log(samsung.description)
console.log(samsung.has5G)

const huawei = new Phone(3, "Huawei P30", "Made in China", true)