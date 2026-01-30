/* Write basic function Practice */

// 1)
function juiceKhao() {
    console.log("Ei nao lebur juice");
}
juiceKhao();


// 2)
function myRoutine() {
    console.log("7.30 tai ghum theke uthi");
    console.log("8.30 tai job a jai");
    console.log("2.00 tai basai asi");
    console.log("5 tai tuition a jai");
    console.log("Rat 9 tai Coding korte bosi");
}
myRoutine();


// 3)
function familyMemberList() {
    console.log("Muhammad Mujibar Biwas");
    console.log("Sufia Begum");
    console.log("Muhammad Mohiuddin Biswas");
    console.log("Khadija Sultana");
    console.log("Mahira Inaya Manha");
}
familyMemberList();


// 4)
function taskDone() {
    console.log("Job a jawa");
    console.log("Tuition a jawa ");
    console.log("Coding kora");
    console.log("Khawa");
    console.log("Manha ke rakha");
}
taskDone();


// 5)
function greetMe() {
    console.log("Good Morning! Have a great day!");
}
greetMe();


// 6)
function getFavFriends() {
    console.log("Gopal Chandra Majumdar");
    console.log("Rakibul islam");
    console.log("Izazul islam");
}
getFavFriends();


// 7)
function introduceMyself() {
    console.log("Name : Muhammad Mohiuddin Biswas");
    console.log("Age : 24");
    console.log("Address : Faridpur");
    console.log("Mobile : 01793-075097");
    console.log("Height : 5 feet 6 inch");
    console.log("Fav Food : Kacchi Biriyani");

}
introduceMyself();


/* function parameter Practice */

// 1)
function boyos(FA, SA) {
    totalAge = FA + SA;
    console.log(totalAge);

}
boyos(25, 1)



// 2)
function multiply(a, b) {
    const multi = a * b
    console.log(multi);
}
multiply(15, 20);


// 3)
function number(sub1, sub2, sub3) {
    let sum = sub1 + sub2 + sub3;
    console.log(sum);
}
number(97, 95, 70);



// 4)
function age(x) {
    const age = 2026 - x;
    console.log(age);
}
age(2000)


// 5)
function lauPrice(a) {
    const Unit = a / 35;
    console.log(Unit);
}
lauPrice(420)


// 6)
function gor(a, b, c, d) {
    let gor = (a + b + c + d) / 4
    console.log(gor);
}
gor(1, 2, 3, 4)


// 7)
function price(P) {
    let sellingPrice = P + 250;
    console.log(sellingPrice);
}
price(250)


// 8)
function year(m) {
    let Year = m + 100;
    console.log(Year);
}
year(2001);


// 9)
function usesTime(t) {
    let time = t * 30;
    console.log(time);
}
usesTime(5);


/* Function Return Practice */

// 1)
function num(x) {
    if (x > 10) {
        return true
    } else {
        return false
    }
}
console.log(num(11));


// 2)
function numb(k) {
    if (k % 13 === 0) {
        return true
    } else {
        return false
    }
}
console.log(numb(26));



// 3)
function price(p, q, r) {
    let vat = p
    let dal = q
    let drinks = r
    let bill = vat + dal + drinks
    return bill
}
console.log(price(30, 10, 15));



// 4)
function votingAge(a) {
    if (a >= 18) {
        return "Eligible for Voting"
    } else {
        return "Not Eligible"
    }
}
console.log(votingAge(32));


// 5)
function lenghtt(t) {
    let name = "mohim biswas"
    return name.length
}
console.log(lenghtt(name));


// 6)
function avg(m, n, o) {
    let average = (m + n + o) / 3;
    return average;
}
console.log(avg(5, 7, 22));


// 7)
function digit(f) {
    if (f < 0) {
        return f * (-1)
    }
}
console.log(digit(-65));



/* Function er dongson /// dhape dhape somadhan */

// 1)
function numberOfElement(nums) {
    const len = nums.length
    if (len % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
const leng = numberOfElement([5, 14, 15, 18, 13, 15])
console.log(leng);





// 2)
function name(n) {
    let name = n[0]  /// Index no diye korte hobe
    return name
}
console.log(name("Raju"));


// 3)
function nums(s) {
    if (s > 10) {
        return s / 10
    } else {
        return s * 10
    }

}
console.log(nums(15));
console.log(nums(2));



// 4)
function getArray(arr) {
    return arr[0] + arr[1]
}
console.log(getArray([5, 10, 45, 12, 14]));


// 5)
function numbar(n) {
    if (n >= 0) {
        return n * 2
    } else {
        return n * 3
    }
}
console.log(numbar(6));
console.log(numbar(-6));



// 6)
function nam(nam1, nam2) {
    let lenghht1 = nam1.length
    let lenghht2 = nam2.length
    if (lenghht1 > lenghht2) {
        return true
    } else {
        return false
    }
}
console.log(nam("Mohim", "Khadija"));



// 7)
function digiT(dig1, dig2) {
    let total = dig1 * dig2
    if (total > 100) {
        return total / 2
    } else {
        return total
    }
}
console.log(digiT(10, 20));
console.log(digiT(4, 20));



/*Dhape Dhape array er man jog kora */

// 1)
function Digit(a) {
    let sum = 0;
    for (const diGit of a) {
        if (diGit % 2 !== 0) {
            sum = sum + diGit
        }
    }

    return sum;
}
const arrey = [5, 15, 8, 7]
let result = Digit(arrey);
console.log("The result of odd number is " + result);




// 2)
function arrayReturn(x) {
    if (arrayIs[0] > arrayIs[1]) {
        return arrayIs[1]
    }
    else {
        return arrayIs[0]
    }
}
let arrayIs = [20, 45, 78]
let bigIs = arrayReturn(arrayIs)
console.log(bigIs);


// 3)
function age(b) {
    if (b <= 18) {
        return "My age is 18"
    }
    else if (b >= 45) {
        return "My age is 45"
    }
    else {
        return "My age is " + b
    }
}
console.log(age(12));
console.log(age(32));
console.log(age(52));


// 4)
function friendArray(g) {
    let Sum = 0;
    for (const Fa of g) {
        if (Fa % 4 == 0) {
            Sum = Sum + Fa
        }
    }
    return Sum;
}
const fA = [2, 4, 5, 7, 8, 32, 45]
let Resullt = friendArray(fA);
console.log(Resullt);


// 5)

function giveNumber(o) {
    if (o < 20) {
        return o * 2
    } else {
        return o / 20
    }
}
console.log(giveNumber(15));
console.log(giveNumber(45));



// 6)
function negNumber(n) {
    let sum = 0
    for (const Neg of n) {
        if (Neg < 0) {
            sum = sum + Neg
        }
    }
    return sum
}
let neg = [2, -5, -7, 1, -6, 2, 4, -8, 6]
let sumOfNeg = negNumber(neg)
console.log(sumOfNeg);



// 7)
function tripleNumber(t) {
    let multipy = 1
    for (const multi of t) {
        if (multi % 3 == 0) {
            multipy = multipy * multi
        }
    }

    return multipy
}
let triple = [1,2,3,4,5,6,7,8,9]
let Total = tripleNumber(triple)
console.log(Total);
