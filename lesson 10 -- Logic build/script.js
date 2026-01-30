/* Logic build with law */


// 1)
function mileToGaj(x) {
    const Gaj = 1760 * x
    return Gaj
}
console.log(mileToGaj(13));


// 2)
function kwhTokk(khw) {
    const kk = 860 * khw
    return kk
}
console.log(kwhTokk(566));


// 3)
function hourToSec(h) {
    const minute = h * 60
    const sec = minute * 60
    return sec

}
console.log(hourToSec(4));


// 4)
function centimeterToMeter(cm) {
    const m = cm / 100
    return m
}
console.log(centimeterToMeter(10005));


// 5)
function inchToCenti(inch) {
    const cm = inch * 2.54
    return cm
}
console.log(inchToCenti(2));



// 6)
function poundToKilogram(pound) {
    const kilogram = pound * 0.453
    return kilogram
}
console.log(poundToKilogram(3));


// 7)
function gojToMeter(goj) {
    const meter = goj * 0.91
    return meter
}
console.log(gojToMeter(5));



/* leap lear logic / hard logic Practice*/

// 1)
function income(incomeAmount) {
    if (incomeAmount <= 50000) {
        return 10
    }
    else if (incomeAmount >= 50001 && incomeAmount <= 100000) {
        return 20
    }
    else if (incomeAmount >= 100001 && incomeAmount <= 200000) {
        return 30
    }
    else {
        return 40
    }
}
const tax = income(50200)
console.log(tax);


// 2)
function delivery(weight) {
    if (weight < 10) {
        return 100
    }
    else if (weight < 20) {
        return 300
    }
    else if (weight < 50) {
        return 1000
    }
    else {
        return (1000 + (weight - 50) * 100)
    }
}
console.log(delivery(62));
console.log(delivery(32));



// 3)
function marks(mark) {
    if (mark >= 80) {
        return "A"
    } else if (mark >= 70) {
        return "B"
    } else if (mark >= 60) {
        return "C"
    } else if (mark >= 50) {
        return "D"
    } else {
        return "F"
    }
}
console.log(marks(85));
console.log(marks(75));
console.log(marks(65));
console.log(marks(55));
console.log(marks(45));


/* array theke average ber kora */

// 1)
function evenAvg(numbers) {
    const even = []
    for (const number of numbers) {
        if (number % 2 === 0) {
            even.push(number)
        }
    }
    let sum = 0
    for (const total of even) {
        sum = sum + total
    }
    return sum
}
const num = [2, 4, 8, 9, 75, 8, 6, 55, 6]
const result = evenAvg(num)
console.log(result);



// 2)
function oddMultipy(number) {
    const odd = []
    for (const numbers of number) {
        if (numbers % 2 !== 0) {
            odd.push(numbers * 2)
        }
    }
    return odd
}
const number = [15, 22, 16, 23, 45, 61, 52]
const resultt = oddMultipy(number)
console.log(resultt);



// 3)
function findOddNumber(oddnumber) {
    for (let oddNum of oddnumber)
        if (oddNum % 2 !== 0) {
            return "Odd numbers found"
        }
    {
        return "No odd numbers found"
    }
}
const array1 = [25, 36, 98, 78, 76, 50]
const result1 = findOddNumber(array1)
console.log(result1);



// 4)
function oddAverage(numberOdd) {
    const oddNumber = []
    for (const oddnum of numberOdd)
        if (oddnum % 2 !== 0) {
            oddNumber.push(oddnum)
        }
    let Sum = 0
    for (const Total of oddNumber) {
        Sum = Sum + Total
    }
    let lengh = oddNumber.length
    Sum = Sum / lengh
    const afterTwo = Sum.toFixed(2)
    return afterTwo
}
const Array2 = [29, 287, 224, 55]
const result2 = oddAverage(Array2)
console.log("The average of odd number is " + result2);



// 5)
function oddMinus(numbar) {
    let oddNumbar = []
    for (let od of numbar)
        if (od % 2 !== 0) {
            oddNumbar.push(od - 1)
        }
    return oddNumbar
}
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result3 = oddMinus(array3)
console.log(result3);




/* Delete duplicate value of array */
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61]
function noDuplicate(arra) {
    const Array3 = []
    for (const item of arra)
        if (Array3.includes(item) === false) {
            Array3.push(item)
        }
    return Array3
}
const result4 = noDuplicate(numbers)
console.log(result4);




/* variavble valua adolbodol */
let a = 15
let b = 10
console.log("a = " + a, "b = " + b);
let temp = a
a = b
b = temp
console.log("a = " + a, "b = " + b);
