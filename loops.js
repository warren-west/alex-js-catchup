// A loop executes the same thing many times
// We use loop control variables to control how the loop iterates

// The most basic loop in JS is the for loop:

// Three steps of setting up the loop control variable:
// 1. initialize the variable
// 2. setting the condition for the loop to continue / terminate
// 3. modify the control variable

//                  0      1              2      3
const products = [ "PSP", "Nintendo DS", "PS4", "XBox 360" ] // 4
// products[4] // undefined
let prices = [ 10, 15, 19, 22, 4 ]

// console.log("Before the loop")

// loop once for every item in the array
// for (let i = 0; i < products.length; i++) {

//     console.log(`Current product: ${products[i]}`)
// }

// console.log("After the loop")

// for (let i = 0; i < prices.length; i++) {
//     prices[i] = prices[i] * 1.5
//     console.log(`Price: ${prices[i]}`)
// }

// Array of product objects:
const phones = [
    { name: "iPhone X", rating: 3 },
    { name: "Samsung Galaxy", rating: 3.5 },
    { name: "Nokia 3310", rating: 1 },
    { name: "Fairphone 5", rating: 5 },
]




// loop through phone object
for (let phone of phones) {
    // for each phone display the name
    const newPTag = document.createElement('p')
    newPTag.innerText = phone.name
    
    document.body.appendChild(newPTag)
    
    
    // loop through the rating ( 0 - 5 )
    // add filled stars
    for (i = 0; i < Math.trunc(phone.rating); i++) {
        // this is a nested loop!
        let newStar = document.createElement("i")
        newStar.className = "bi bi-star-fill"

        document.body.appendChild(newStar)
    }
    // maybe add a half star
    if (phone.rating !== Math.trunc(phone.rating)) {
        let halfStar = document.createElement("i")
        halfStar.className = "bi bi-star-half"
        
        document.body.appendChild(halfStar)
    }
    // maybe add empty stars
    for (let i = 0; i < 5 - Math.ceil(phone.rating); i++) {
        // this is a nested loop!
        let emptyStar = document.createElement("i")
        emptyStar.className = "bi bi-star"
        
        document.body.appendChild(emptyStar)
    }
}

// for...in (looping through objects)