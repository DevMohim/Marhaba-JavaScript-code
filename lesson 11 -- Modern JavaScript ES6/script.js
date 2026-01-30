/* Default value of parameter in Function */

// 1)
function doingSum(num1 = 0, num2 = 0, num3 = 0) {
    const sum = num1 + num2 + num3
    return sum

}
const result = doingSum(5, 10, 14)
console.log("The result of Sum is " + result);


// 2)
function savingMoney(invest = 50) {
    return invest
}
const Money = savingMoney()
console.log(Money);


//3)
function details(name = "anonymous ", earn = 0) {
    const detail = name + earn
    return detail
}
const result1 = details("Mohim ", 500)
console.log(result1);



// 4)
function getExponent(num = 1) {
    const Exponent = num * num
    return Exponent
}
const result2 = getExponent(6)
console.log(result2);


// 5)
function product(name = "Unknown Product ", price = 1) {
    const total = name + price
    return total

}
const result3 = product("Neo Care ", 1000)
console.log(result3);


// 6)
function book(name = ["Js Book", "CSE", "Physics"]) {
    const bookName = name
    return bookName
}
const result4 = book(["Harry Porter", 'Jorge Leopardo'])
console.log(result4);


// 7)
function getObject(product = { price: 10, quantity: 1 }) {

    const totalPrice = product.price * product.quantity
    return totalPrice
}

const result5 = getObject({ price: 80, quantity: 5 })
console.log(result5);


//  8)
function getArray(multuply = [5, 10, 15]) {
    const newArray = []
    for (const item of multuply)
        newArray.push(item * 2)

    return newArray

}
const result6 = getArray([10, 20, 30])
console.log(result6);


// 9)
function interest(total = { principal: 1000, rate: 5 }) {
    const Result = total.principal * total.rate / 100
    return Result

}
const result7 = interest({ principal: 10000, rate: 25 })
console.log(result7);


// 10)
function salaryAndTax(Total = { salary: 50000, tax: 10 }) {
    const Tax = Total.salary * Total.tax / 100;
    const finalAmount = Total.salary - Tax
    return finalAmount

}
const result8 = salaryAndTax({ salary: 14000, tax: 7 })
console.log(result8);



/* Template String Practice */

// 1)
const nam1 = 100
const nam2 = 20
const sub = nam1 - nam2
const Result = `The difference between ${nam1} and ${nam2} is ${sub}`
console.log(Result);



// 2)
const employee = {
    name: "Mohim",
    age: 24,
    salary: 14000
}
const Result1 = `${employee.name} ${employee.age} ${employee.salary}`
console.log(Result1);



// 3)
const fruit = ["Mango", "Litchi", 'Strawberry']
const Result2 = `My third fav food is ${fruit[2]}`
console.log(Result2);


// 4)
const a = 50
const b = 10
const divide = a / b
const Result3 = `The division of a and b is ${divide}`
console.log(Result3);


// 5)
const person = {
    firstName: "Amit ",
    lastName: "Kumar"
}
const fullName = person.firstName + person.lastName
console.log(`FullName : ${fullName}`);



// 6)
const animal = ["Cat", 'Dog', 'Elephant']
console.log(`My favourite animals are ${animal.join(",")}`);


// 7)
const student = { name: "Mohim", age: 24, results: [50, 80, 20] }
function averageResult(r) {
    let Summ = 0
    for (const item of r) {
        Summ = Summ + item
    }
    const avg = Summ / 3
    return avg
}
const subjectNumber = student.results
const Average = averageResult(subjectNumber)
console.log(`The name of student is ${student.name} and the Average of his number is ${Average}`);


console.log("Arrow function");
/* Arrow function practice*/

// 1)
const array = numbers => numbers[1]
const numbers =array([5,1,2,3,6])
console.log(`The fist index value is ${numbers}`);


// 2)
const threeDigit = (a,b,c) => a*b*c
const result9 = threeDigit(4,5,6)
console.log(result9);


// 3)
const noParameter = (name = "unkhown") => name
const result10 =noParameter()
console.log(result10);


// 4)
const info ={name : "Mohim" , pocketMoney :70 }
const dividePocketMoney = (a) => a / 5
const result11 = dividePocketMoney(info.pocketMoney)
console.log(result11);


// 5)
const array1 = [5,4,6,8,12]
const lenght = array1.length
const shesIndex = lenght - 1
const jogFol = (a,b) => a + b
const result12 = jogFol(array1[0], array1[shesIndex])
console.log(result12);



// 6)
const totalAddition = (num1 = 10 ,num2=5) => num1 + num2
const result13 = totalAddition(14,6)
console.log(result13);


/*  */