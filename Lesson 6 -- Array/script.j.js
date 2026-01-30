/* Create Array */

// 1)
const first = [ 71,72,73,74,75,76,77,78,79]

// 2)
const fridge = [ "apple, banana, orange, mango , guava"]


//3)
const bag =['alu','peyaj','begun','begun','gajor','tomato','dheros','lau','sosa','potol']
console.log(bag.length);

// 4)
const favMovie = ["Ironman" , "Superman" , "Thor" , "Hulk", 'Spidarman']


// 5)
let odd = [11 ,13 ,15 ,17, 19, 21 ,23 ,25 ,27 ,29]


//6)

let colors = ["black" , 'violet', 'blue' , 'red' , 'skyblue', 'orange', 'pink' , 'silver' , 'white']
console.log(colors.length);

// 7)
let capital = ['Dhaka','korachi',"kathmandu", 'London', 'tokyo', 'colombo','bangkok','riyadh']
console.log(capital.length);


/*Array index no. check */

// 1)
let friends = ["izaz" ,'akash', 'abid', 'ifaz' , 'mohosin', 'fahad', 'hossain', 'sumana', "merina",'aimun','arup']
console.log(friends[3]);
// console.log(friends[8]);
// console.log(friends[2]);
// console.log(friends[0]);


// 2)
let books = ['physics','marhaba', 'chemistry', 'Higher Math', 'General Math', 'CSE', 'Biology' ]
console.log(books[5]);


// 3)
let number = [1,2,3,4,5,6,7,8,9,10]
number[7]=30
console.log(number[7]);


//4)
let game= ['Free fire','pubg','Candy crush', 'temple run']
game [2]= 'Subway Surfer';
console.log(game[2]);


// 5)
let familyMember = ['Mohim','khadija','Manha','Abba','Ma']
console.log(familyMember [3]);


//6)
let coumtry = ['U.k','Thailand','Japan',"korea","Paris",'Saudi Arab', 'Nepal','Maldives']
console.log(coumtry [4]);

//7)
let book = ['gk','marhaba','model test','ict']
console.log(book[7]);


/* Add a number or string in a Array */

// 1)
let digit = [10,20,30,40,50];
digit.push(60);
console.log(digit);

// 2)
let friendsName = ['sajib','sagor','sakib','sohel'];
friendsName.push("sumon");
console.log(friendsName);

// 3)
let games= ['Free fire','pubg','Candy crush', 'temple run']
games.pop();
console.log(games);

// 4)
let mohim = [24,36,48,60]
mohim.unshift(12);
console.log(mohim);

// 5)
let Books = ['physics','marhaba', 'chemistry', 'Higher Math', 'General Math', 'CSE', 'Biology' ]
Books.shift()
console.log(Books);


/* Includes Practice */

// 1)
let fruits = ['apple', 'banana','mango','litchi']
if (fruits.includes("mango")) {
    console.log('Array Have mango');
} else {
    console.log('Array dont have mango');
}


//)
let nam = ['babul', 'alif' , 'choton']
console.log(nam.indexOf('babul'));


// 3)
let fnam = ['rimon','rifat','rajib']
console.log(fnam.indexOf('rifat'));


// 4)
let shohor = ['dhaka',  'chittagong','sylhet']
shohor.push('rajshahi')
console.log(shohor.indexOf('RajShahi'));


// 5)
let items = ['dighi','megh','bristy','megh']
if (items.includes('bristy')) {
    console.log('I need umbrella');
} else {
    console.log('No rain,No pain');
}


// 6)
let favGame = ["footbal",'cricket','volleyball']
console.log(favGame.includes('badminton'));
