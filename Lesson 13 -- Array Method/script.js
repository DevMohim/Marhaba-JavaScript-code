/* Map, forEach, filter, find Practice */


// 1)
const foodPrice = [30,45,20,60,10]
const result1 = foodPrice.map(num=>num +13)
console.log(result1);


// 2)
const playerNames = [ 'Messi','Maradona',"pele", "Jidane","Ronaldo"]
const result2 =playerNames.filter(name => name.length>5)
console.log(result2);


// 3)
const number = [10,15,20,25,30,35]
const result3 = number.find(num=> num > 20)
console.log(result3);


// 4)
const height = [65,70,68,72,68,73]
const result4 = height.filter(inch => inch > 69)
console.log(result4);


// 5)
const digit = [ 7,10,15,20,25,30]
const result5 = digit.map(number => (number/3).toFixed(2))
console.log(result5);


// 6)
const friendName = ["Leonardo", "Brad pitt","Kare windslet", "Audrey Hepburn","Jhony Depp"]
const result16= friendName.map(name => name[2])
console.log(result16);


// 7)
const nameArray = ["Tom","Harry","Sam","Jack"]
const result7 = nameArray.find(letterFind => letterFind.startsWith("H"))
console.log( result7);


 
// 8)
const numberArray = [1,2,3,4,5]
const result8 = numberArray.forEach(name => console.log(name))


// 9))
const animal = ["Cow","Goat","sheep","horse"]
const result9= animal.forEach(nameOfAnimal => console.log(nameOfAnimal))



/* Some , Every and Flat method Practice */


 // 1)
 const numbers = [5,22,145,16,54,1587,14]
 const Result1 = numbers.some(num=> num>=100)
 console.log(Result1);


 // 2)
 const element = [15,25,45,40,45,2]
 const Result2 = element.every(digit => digit % 5 === 0)
 console.log(Result2);


 // 3)
 const word = ["mohia" ,"khadija", 'mahira',]
 const Result3 = word.some(word => word.includes("hello"))
 console.log(Result3);


 // 4)
 const ages = [19,20,24,36,52,14]
 const Result4 = ages.every(age => age > 18)
 console.log(Result4);



 /* Reduce practice */

 // 1)
 const Num = [ 5,10,15,20,25]
 const result10 = Num.reduce((a,b) => a +b,0)
 console.log(`The total of the number is ` + result10);
  


 // 2)
 const product = [
    {name : "Shampoo" , price : 100},
    {name : "Soap" , price : 50},
    {name : "ToothPaste" , price : 75}
 ]
 const result11 = product.reduce((x,y) => x+y.price ,0)
 console.log(`The total balace of the product is ` + result11);


 // 3)
const productList = [
    {name : "Pen" , price : 5},
    {name : "Book" , price : 50},
    {name : "Bag" , price : 100}
 ]
 const result12 = productList.reduce((p,q) => p+q.price , 0)
 console.log(`The total balace of the productList is ` + result12);


 //  4)
 const Digit = [1,2,3,4,5]
 const result13 = Digit.reduce((m,n) => m*n, 1)
 console.log(`The multiply of the digit is ` + result13);


 // 5)
 const array = [ 10,20,30,40,50]
 const result14 = array.reduce((k,l) => Math.max(l), 0)
 console.log(result14,result14);


 // 6)
 const array2 = [100,200,300,400]
 const result15 = array2.reduce((i,j) => i+j, 50)
 console.log(`The total of number is ` + result15);

 /*Sort Practice */

 // 1)

 const Numbers = [50,12,25,8,15]
 const Result5 = Numbers.sort((p,q) => p-q)
 console.log(Result5);


// 2)
const arrayNumbers = [13,2,45,9,6]
const Result6 = arrayNumbers.sort((a,b) => b-a)
console.log(Result6);


// 3)
const friends = [
   {name : "Ali", age : 29},
   {name : "Sara", age : 22},
   {name : "Tarique", age : 35}
]
const Result7 = friends.sort((a,b) => a.age -b.age)
console.log(Result7);


// 4)
const names = [ "nabil","zubayer","sarwar","delware"]
const Result8 = names.sort()
console.log(Result8);


/* Reverse Practice */

// 1)
const Names = [ "Zara", "Tarique" , "Amir" , "Lina"]
const result17 = Names.reverse()
console.log(result17);


// 2)
const numberss = [1,4,9,7]
const result18 = numberss.reverse()
console.log(result18);


// 3)
const user =[
   {name : "Ali", age:30},
   {name : "Sara", age:25},
   {name : "Terique", age:35}
]
const result19 = user.reverse()
console.log(result19);



/* Slice & Splice practice */

// 1)
const fruits = [ "Apple", "Banana", "Cherry", "Date"]
const Result9 = fruits.slice(1,3)
console.log(Result9);


// 2)
const cars = ["Tesla" , "BMW" , "Toyota" , "Ford"]
const Result10 = cars.slice(0,2)
console.log(Result10);


// 3)
const MovieLists = ["Inception", "Titanic", "Joker", "Avatar","Interstellar"]

const Result11 = MovieLists.splice(2,2,"Batman","Superman")
console.log(MovieLists);


// 4)
const players = [ "Messi" , "Ronaldo", "Neymar" , "Mbappe"]
const Result12 = players.splice(2,1,"Halland")
console.log(players);

