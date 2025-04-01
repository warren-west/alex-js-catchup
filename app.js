// Building blocks of JS:
// Functions and variables

const myName = "Warren"
let yourName = "Alex"

const theButton = document.getElementById("btn-click")

let costPrice = 10
const markup = 1.8

let sellingPrice = costPrice * markup

let products = []
let additionResult = 0
let printResult = ""

// input?
// processing
// output?

function getProducts() {
    return ["sugar", "bread"]
}

function addTwoNumbers(num1, num2) {
    const result = num1 + num2
    return result
}

// void
function printName(name) {
    console.log(name)
}

products = getProducts()
additionResult = addTwoNumbers(5, 4)
printResult = printName("Warren")

console.log(products)
console.log(additionResult)
console.log(printResult)

const array = [ 23, 234, 345, 46 ,]
const object = { key: "value" } 

console.log(document)
// DOM = Document Object Model

// DOM Manipulation
// DOM ELEMENTS
const header = document.getElementById("header")
const description = document.getElementById("description")
const btnClick = document.getElementById("btn-click")
// document.getElementById("labgfsfbk") // null

header.className = "purpleText"
description.className = "greenBackground"

const pMyName = document.getElementById("my-name")
const pYourName = document.getElementById("your-name")

pMyName.innerText = myName
pYourName.innerText = yourName