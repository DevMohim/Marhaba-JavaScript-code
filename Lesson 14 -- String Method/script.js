/* Immuteable String practice*/

// 1)
const city = "Chattogram"
const result = city.indexOf("g")
console.log(result);

// 2)
let division = "Sylhet"
console.log(division.includes("y"));

// 3)
const Name = "Rifat"
const result2= Name.length -1
console.log(Name[result2]);

// 4)
const language = "javascript"
console.log(language.indexOf("rip"));


// 5)
const text = "Immuteable"
console.log(text.length);



/* Lower Case & Upper Case Practice */

// 1)
const email = "User@Example.com"
console.log(email.toLowerCase());


// 2)
const greeting = "hELlo WoRLd"
console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());


// 3)
const Language = "JavaScript"
const Languagee = Language.toLowerCase()
console.log(Languagee.includes("script"));


// 4)
const Text = "NodeJs"  
if(Text[0] === "N"){
    console.log("True");
}
else{
    console.log("False");
}




/* Trim , Slice, Split, Join ,Concat & Substring Practice */

// 1)
const friends = "Raju,Rana,Hasan,Kabir,Mahi"
let newArray = friends.split(",")
console.log(newArray);


// 2)
const friend = newArray
const newString = friend.join("....")
console.log(newString);



// 3)
const TEXT = "function if else while"
const NewArray = TEXT.split(" ")
console.log(NewArray);



// 4)
const languagee = ["Javascript","Python" , "Java"]
const NewString = languagee.join("...")
console.log(NewString);



// 5)
const tExt = "for,while,for-in,for-of,do-while"
const  loop = tExt.split(",")
console.log(loop);


// 6)
const TexT = " console bug debug "
console.log(TexT.trim());


// 7)
const str1 = "push"
const str2 = "pop"
const str3 = "shift"
const str4 = "unshift"
console.log(str1.concat(" ",str2," ",str3 ," ",str4 ));



// 8)
const greet = "Hello JavaScript Developers"
console.log(greet.slice(6,17));


// 9)
const demoText = "Code more learn more"
console.log(demoText.substring(9,15));



/* Repeat, toString ,Replace & replace all Pracitce */

// 1)
const strn = "Hi "
console.log(strn.repeat(10));


// 2)
const paragraph = "I am learning  JavaScript, JavaScript is amazing"
console.log(paragraph.replaceAll("JavaScript","JS"));


// 3 )
const loveFruits = "I love apples and apples are tasty"
console.log(loveFruits.replaceAll("apples","mangoes"));



