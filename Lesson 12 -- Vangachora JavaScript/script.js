/* Destructing Practice */

// 1)
const product = {
    name : 'Laptop',
    price : 50000,
    brand : 'Dell'

}
const {name, price, brand} = product
console.log(brand);


// 2)
const item ={
    names : 'Mobile',
    prices : 20000,
    phone : 'Samsung'
}
const {names, prices , phone} = item
console.log(prices,phone);


// 3)
const colors = ['red', 'blue','green','yellow']
const [first, sec, third, fourth] = colors
console.log(first,sec);


// 4)
const numbers =[5,15,25]
const [firstt, second,Third]=numbers
console.log(second);


// 5)
const num=[2,4,6,8]
const [two,four,six,eight]=num
console.log(two,eight);


// 6)
function multiply(a,b){
    return [a*3,b*3] 

}
const [firstValue, secValue] = multiply(5,6)
console.log(firstValue);
console.log(secValue);



// 7)
const person = {
    nam: 'Rahim',
    city: 'Dhaka'
}
const {nam, city, phoone= "N/A" } = person
console.log(nam,city,phoone);



// 8)
 const teacher = {
    namee: "Maria",
    profession : "Teacher"
 }
 const {namee , profession:job} = teacher
 console.log(namee, job);


/* Rest Practice */

// 1)
const Product ={
    Name : "Laptop",
    price : 50000,
    brand : "Dell"
}
const {Name, ...others} = Product
console.log(Name);
console.log(others);


// 2)
const project = {
    id : 101,
    title : "Web app",
    budget : 3000,
    client : "Corp"
}
const { title , ...items}=project
console.log(items);


// 3)
const programmer = {
    Nam:"Sophia",
    language : "JavaScript",
    experience : 5,
    specialty : "Frontend",
    tools : 'React'
}
const {language, specialty, ...details}=programmer
console.log(details);


// 4)
const Num = [ 10 ,20,3,30,300,3000]
const [First, Sec , ...otherNumber]= Num
console.log(otherNumber);


// 5)
function Rest(a,b,c,d,e){
    return [a,b,c+d+e]
}
const [One,Two, ...rest] = Rest(5,6,7,8,9)
console.log(rest);


// 6)
function average(...rest) {
  if (rest.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let num of rest) {
    sum += num;
  }
  let result = sum / rest.length
  return result
}
const arr= average(4,5,6,32,22,52,50)
console.log(arr);


/* Spread Practice */

// 1)
const technologies = ["Condition","Array","loop"]
const tech = ["variable", ...technologies]
console.log(tech);


// 2)
const fruits = [ 'apple', 'banana','mango']
const myFruits = [...fruits,"papaya",'orange']
console.log(myFruits);


// 3)
const fontEnd = ["Javascript"]
const backEnd = ["Node.js"]
const database = ["MongodB"]
const special = [...fontEnd , ...backEnd,...database]
console.log(special);


// 4)
const website = {
    name : "MySite",
    type : "e-commerce",
    status : "active"
}
const New = {...website , theme : "dark"}
console.log(New);


// 5)
const young = {
    name : "Arif",
    age : 30,
    conuntry : "B baria"

}
const copyYoung ={ ...young}
console.log(copyYoung);
const {name:Namee , age:agee, ...reest}= young
console.log(Namee , agee);



/// 6 )
const car = {
    make : "Toyota",
    model : 'corolla',
    year : 2020
}
const copyCar = {...car}
console.log(copyCar);
car.year = 2032
console.log(car);



/* Export and Import  */

/*export এবং import-এর মধ্যে পার্থক্য কী? উভয় কীভাবে কাজ করে?
export
কোনো ভেরিয়েবল, ফাংশন, ক্লাস বা ডাটা অন্য ফাইলে ব্যবহার করার জন্য পাঠানোকে export বলে।
import
অন্য ফাইল থেকে export করা জিনিস নিজের ফাইলে আনার প্রক্রিয়াকে import বলে।
কাজ করার ধরন:
একটি ফাইলে export করা হয়
অন্য ফাইলে import করে ব্যবহার করা হয়
২. default export কী? এর মাধ্যমে import করার সময় কী সুবিধা হয়?
default export
একটি ফাইল থেকে মাত্র একটি জিনিসকে default হিসেবে export করা হয়।
সুবিধা:
import করার সময় নাম ইচ্ছেমতো দেওয়া যায়
{ } ব্যবহার করতে হয় না
কোড বেশি পরিষ্কার হয়
৩. as কী-ওয়ার্ড কীভাবে নাম পরিবর্তন করতে সাহায্য করে?
as ব্যবহার করে import বা export করার সময় নাম পরিবর্তন করা যায়।
কেন দরকার?
নাম কনফ্লিক্ট এড়াতে
সহজ বা অর্থবহ নাম ব্যবহার করতে
৪. নাম দিয়ে export আর Default export-এর মধ্যে পার্থক্য কী?
বিষয়
Named Export
Default Export
একাধিক export
✔ সম্ভব
✘ সম্ভব না
import করার সময়
{ } লাগে
{ } লাগে না
নাম পরিবর্তন
as দিয়ে
সরাসরি সম্ভব
ব্যবহার
বড় প্রজেক্টে ভালো
ছোট/single item এ ভালো
৫. এক ফাইল থেকে একাধিক default export কি সম্ভব? কীভাবে সম্ভব?
❌ এক ফাইল থেকে একাধিক default export সম্ভব নয়।
কারণ:
default export মানে একটিমাত্র প্রধান export
✅ সমাধান:
একাধিক জিনিস export করতে হলে named export ব্যবহার করতে হবে */