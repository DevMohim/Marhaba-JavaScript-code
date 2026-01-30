// /* Loop of Practice */
//  // 1)
//  let subject = ['CSE','Physics',"Math","Chemistry","ICT"]
//  for(const sub of subject) {
//     console.log(sub);
//  }
// // 2)
// let meal = ['Biriyani','Kacchi','Goru','dim vaji']
// for(const meals of meal){
//     console.log(meals);
// }

// // 3)
// let birthDate = [1954,1960,1982,1984,1987,1992,1993,1998,2001,2025]
// for(const Date of birthDate){
//     console.log(Date);
// }

// // 4)
// let bestEleven = ['David Warner','Chris Gayle','Hashim amla','AB Devilers','Ben Stock','Brian Lara','Adam Jampa','Shoaib Akther', 'Lathis Malinga','Dale Stayn', 'Mustafizur Rahman']
// for (const best of bestEleven) {
//     console.log(best);
// }


// // 4)
// let examDate = [12,15,18,21,25,28,1,4,6,8]
// for (let date of examDate){
//     console.log(date);
// }


// /* While loop Practice */


// // 1)
// let num = 0;
// while ( num  < 5) {
//     console.log("Ami minimum 3 ghonta coding korbo");
//     num = num + 1;
// }

// // 2)
// let digit = 1;
// while (digit <= 20) {
//     console.log(digit);
//     digit++ ;
// }

// // 3)
// let number = 50;
// while(number <= 100){
//     console.log(number);
//     number++ ;
// }


// // 4)
// let numBer = 1;
// while (numBer <=10 ){
//     console.log(numBer*3);
//     numBer++;
// }

// //5)
// let Number = 101;
// while(Number <= 110){
//     console.log(Number/2);
//     Number++ ;
// }


/* Loop with Addition */

//1)
let num = 50;
while (num <= 100) {
    console.log(num);
    num++;
}

let number = 5;
let sum = 0;
while (number <= 15) {
    console.log(number);
    number++;
    sum = sum + number;

}
console.log("Sum:", sum);


// 3)
let roll = 1;
let Sum = 0;
while (roll <= 50) {
    console.log(roll);
    roll++;
    Sum = Sum + roll;
}
console.log('All sum:', Sum);


//4)
let Roll = 20;
let SUM = 0;
while (Roll <= 50) {
    Roll++;
    SUM = SUM + Roll;
    console.log('All :', SUM);
}

// 5)
let digit = 20;
let SuM = 0;
while (digit <= 40) {
    digit++;
    SuM = SuM + digit;

}
console.log('Total is: ', SuM);


/* For loop Practice */
// 1)
for (let i = 150; i <= 170; i++) {
    console.log(i);
}


//2)
let sUM = 0;
for (let j = 31; j <= 58; j++) {
    sUM = sUM + j;

}
console.log('The total is:', sUM);


// 3)
let total = 0;
for (let x = 25; x <= 75; x++) {
    total = total + x

}
console.log('All total is:', total);


/* Even / Odd Practice */
//1)
for (let i = 20; i <= 50; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

//2)
for (let j = 40; j <= 80; j++) {
    if (j % 5 == 0 && j % 7 == 0) {
        console.log('only ' + j);
    }

}

//3 )
let Total = 0;
for (let k = 1; k <= 40; k++) {
    if (k % 13 == 0) {
        Total = Total + k
    }
}
console.log("Total is " + Total);

// 4)
for (let l = 1; l <= 50; l = l + 4) {
    console.log(l);

}



// 5)
for (let m = 0; m <= 100 ; m++) {
    if (m % 6 == 0 && m % 9 == 0)  {
        console.log('tot ' + m);
    }
    
}

// 6)
let toTal = 0;
for (let n = 1; n<= 50; n++) {
    if (n % 3 == 0 && n % 4 ==0 ) {
       console.log("Digit " + n);
    }
    toTal = toTal + n
}
console.log("toTal " + toTal);






/* break & continue practice  */
//1)
for (let a = 1; a <= 30; a++) {
    console.log(a);
    if (a >= 15) {
        break
    }
    
}


// 2)
for (let b = 1; b <= 40 ; b++) {
    
    if (b % 7 == 0) {
       continue
    }
    console.log(b);
}


//3)
for (let c = 1; c <= 15; c++) {
   if (c == 9) {
    continue
   }
    console.log(c);
}



//4)
for (let s = 1; s <= 20; s++) {
   if (s == 12) {
    continue
   }
    console.log(s);
}


// 5)
for (let d = 1; d <= 25; d++) {
    if (d % 3 == 0) {
        continue
    }
    console.log(d);
}


//6)
for (let e = 91; e <= 120; e++) {
    console.log(e);
    if (e % 10 == 0) {
        break
    }
    
}