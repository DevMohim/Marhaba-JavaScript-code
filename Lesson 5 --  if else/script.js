/*If Else Condition Practice */
// 1)
const returnHome = 5;
if (returnHome < 6) {
    console.log("Ammu nasta diche");
} else {
    console.log("Jhatar bari khaici");
}

// 2)
const login = true;
if (login == true) {
    console.log("Welcomed");
} else {
    console.log("Get Lost");
}

// 3)
const running = 5;
if (running >= 5) {
    console.log("Toke chocolate khete dibo");
} else {
    console.log("Tor vuri bere jabe");
}

// 4)
const getNumber = 85;
if (getNumber > 80) {
    console.log("Bike Pabi");
} else {
    console.log("Bike pabi nah");
}

// 5)
const movieStart = 8.30;
if (movieStart > 9) {
    console.log("Movie dekhbo");
} else {
    console.log("Nake tel diye ghumabo");
}

// 6)
const roomTemparature = 35;
if (roomTemparature > 30) {
    console.log("Ac chalabo");
} else {
    console.log("Nak a tel diye katha muri ghumabo");
}


/* && and || Condition */


// 1)
const age = 18;
const height = 65;
if (age > 18 && height > 60) {
    console.log("gari thelbe");
} else {
    console.log("garite bose thakbe");
}


// 2)
const mathScore = 80;
const englishScore = 85;
if (mathScore > 80 || englishScore > 85) {
    console.log("Addmission Done");
} else {
    console.log("Biye diye dibo");
}


// 3)
const gpa = 4.5;
const familyIncome = 8500;
if (gpa == 5 && familyIncome < 10000) {
    console.log("Got Scolarship");
} else {
    console.log("Beton Diye Poro");
}


// 6)
let Age = 31;
let workExperi = 3;
if (Age < 30 && workExperi > 2) {
    console.log("Can be participate");
} else {
    console.log("Can't be Participate");
}


// 7)
let dim = 10;
let murgi = true;
if (dim > 12 || murgi == false) {
    console.log("Dim er korma");
} else {
    console.log("Pauruti r kola");
}

// 8)
let bodyTemp = 92;
let kashi = false;
if (bodyTemp > 100 || kashi == true) {
    console.log('Go to Doctor');
} else {
    console.log('katha muri diye suye thak');
}


// 9)
let present = 80;
let homework = true;
if (present > 80 && homework == true) {
    console.log('Go to Exam');
} else {
    console.log('Auto Fail')
}


// 10)
let electicity = true;
let charge = true;
if (electicity == false && charge == false) {
    console.log('Porte bosbo');
} else {
    console.log('Video game khelbo');
}

// 11)
let shirtPrice = 990;
let cupone = true;
if (shirtPrice > 1000 && cupone == true) {
    console.log('Get Discount');
}



/* else if condition Practice */


// 1)
let price = 4500;
if (price >= 6000) {
    let Discount = price / 100 * 15
    let pay = price - Discount
    console.log(pay);
}
else if (price >= 3000) {
    let Discount = price / 100 * 5
    let pay = price - Discount
    console.log(pay);
}
else {
    console.log(price);
}

// 2)
let agE = 12; // prompt("Your age")
if (agE <= 12) {
    console.log("Free meal");
}
else if (agE >= 60) {
    console.log("Get 50% discount");
}
else {
    console.log("Pay full amount");
}


// 3)
const bankBalance = 2500; // prompt('Your money');
if (bankBalance < 1000) {
    console.log('Deposit kor');
}
else if (bankBalance <= 5000) {
    console.log('Bindas life enjoy kor');
}
else {
    console.log("Tui dhoni, amake biye kor");
}


// 4)
const marks = 34;
if (marks >= 80) {
    console.log('A+');
}
else if (marks >= 50) {
    console.log('Pass');
}
else {
    console.log('Fail');
}


// 5)
const page = 456;
if (page >= 500) {
    console.log("Heart attack size book");
}
else if (page >= 100) {
    console.log('Mid-size book');
}
else {
    console.log('Small book');
}


// 6)
let temp = 21;
if (temp >= 20) {
    console.log('Hot Hot');
}
else if (temp > 0) {
    console.log('Cool Cool');
}
else {
    console.log("Ice");
}


// 7)
let levelIs = 45;
if (levelIs > 50) {
    console.log('Pro Gamer');
}
else if (levelIs >= 10) {
    console.log('Expert');
}
else {
    console.log('novice');
}


/* if else under condition*/

// 1)
const dawat = true;
const pocketMoney = 540;
if (dawat == true) {
    console.log('Dawat a jabo');
    if (pocketMoney>=1000) {
        console.log('Gift nibo');
    } else {
        console.log('Khali hate jabo');
    }
} else {
    console.log('Unfriend kore dibo');
}



// 2)
const cha = false;
const biscuit = true;
if (cha == true) {
    if (biscuit == true) {
        console.log('ei nen cha o biscuit');
    } else {
        console.log('Shudhu cha ready');
    }
} else {
    console.log('Bose bose Star Jalsa dekhun');
}



// 3)
const isaccount = true;
const isPremium = false;
if (isaccount == true) {
    if (isPremium) {
        console.log('Got to premium feature');
    } else {
        console.log('Got to free version');
    }
} else {
    console.log('Open an account');
}


// 4)
const isfood = false;
const isApp = true;
if (isfood == true) {
    console.log('Khabar gorom kor');
} else {
    if (isApp == true) {
        console.log('Ordered the food');
    } else {
        console.log('Aj ami roja');
    }
}



// 5)
const guest = 115;
const gift = false;
if (guest>100) {
    if (gift == true) {
        console.log('Lets party all night');
    } else {
        console.log('I will party with myself');
    }
} else {
    console.log('party cancel');
}


/* Logical not & Tarnary Operator */


// 1) 
const cashback = 3600 ;
cashback >= 3000  ? console.log(500) : console.log(0);


// 2)
let aGe = 10;
aGe >= 15 ? console.log("Teenager"): console.log('Child');


// 3)
const isLoggedIn = true;
isLoggedIn === true ? console.log("Welcome back") : console.log("Pleage Login");


//4)
let isTankyFull = false;
isTankyFull == true ? console.log("Ready for a long drive") : console.log('Fill the tank');


// 5)
let isPassed = false;
isPassed === true ? console.log('Party time') : console.log('Next semister a valo kore porbo');


//6)
let sunny = false;
sunny == false ? console.log('Stay Home') : console.log("");


// 7)
let expensive = false ;
expensive == false ? console.log(' Iw will buy this item.') : console.log("");