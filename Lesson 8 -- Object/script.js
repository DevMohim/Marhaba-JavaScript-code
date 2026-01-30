/* Create object Practice */

// 1)
const teacher = {
    name: 'Amar Haque',
    subject: 'Classical Mechanics',
    age: 48,
    address: 'Molla Bari Sarak',
    haveBike: true
}



// 2)
const tree = {
    name: 'Mango',
    fruitName: 'Kacha Amm ',
    height: 84,
    age: 3
}


// 3)
const animal = {
    name: 'Cat',
    leg: 4,
    eye: 2,
    color: 'Black & White',
    age: 'Three month',
    ear: 2,
    haveLej: true
}


//4)
const father = {
    name: 'Muhammad Mujibar Biswas',
    occupation: "Farmer",
    age: 72,
    children: 7,
    height: 5.8,
    weight: 56,
    eyeColor: 'Brown'
}


//5)
const motorBike = {
    name: 'Royel Enfield Classic',
    color: ' Marsh Grey',
    Engine: '350 Cc',
    power: "19.93 BHP",
    torque: '27NM',
    mileage: '35 Kmpl',
    tyreType: 'Tubeless',
    Breaks: 'Hydrolics'
}



// 6)
const bird = {
    name: 'Aparrow',
    color: 'Black & White',
    food: 'poka & makor'
}



//7)
const laptop = {
    name: 'HP',
    model: "elitebook G6",
    Procesor: "intel Core i7",
    ram: "16 gb",
    rom: '256 gb',
    price: 35000,
    displaySize: '13.3 inch'
}



/* Obejct dot and braket notation  Practice  */
// 1)

const player = {
    Name: 'Mustafizur Rahman',
    age: 29,
    sports: 'Cricket',
    Team: "Bangladesh"
}
console.log(player.Team);


// 2)
const Laptop = {
    name: 'HP',
    model: "elitebook G6",
    Procesor: "intel Core i7",
    ram: "16 gb",
    rom: '256 gb',
    price: 35000,
    displaySize: '13.3 inch'
}
console.log(Laptop.displaySize);


// 3)
const favPlace = {
    name: 'Cox-Bazar',
    distance: "400 km",
    popularity: 'high'
}
console.log(favPlace['popularity']);


// 4)
const mobile = {
    brand: 'Nokia',
    color: 'Black',
    price: 5000
}
console.log(mobile['price']);


//5)
const library = {
    name: 'Public Library',
    location: 'Dhaka',
    books: 5000
}
console.log(library.location);


// 6)
const movie = {
    title: 'Inception',
    director: 'Nolan',
    rating: 9
}
console.log(movie["rating"]);



// 7)
const college = {
    name: "NDC",
    established: 1949,
    group: ['Science', 'Arts', 'Commerce']
}
console.log(college.group[1]);


// 8)
let family = {
    father: {
        name: 'Muhammad Mujibar Biswas',
        occupation: "Farmer",
        age: 72
    },
    mother: {
        Name: 'Sufia Begum',
        Occupation: "House Wife",
        age: 65
    }
}
console.log(family.father.age + family.mother.age);


/* Key and values with for in loop */

// 1)
const boi = {
    name: "Marhaba | Javascript a maro thaba",
    writter: 'Jhankar Mahabub',
    Price: 680
}
console.log(Object.keys(boi));
console.log(Object.values(boi));


// 2)
const article = {
    title: "Learning JS",
    category: "Programming"
}
const key = Object.keys(article);
console.log(key.includes("author"));


// 3)
const LapTop = {
    brand: "Dell",
    model: "inspiron",
    price: 45000
};

for (const key in LapTop) {
    const value = LapTop[key];
    console.log(key, value);
}


// 4)
const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
}
const keys = Object.keys(phone);
for (const key of keys) {
    console.log(key, phone[key]);
}


// 5)
const Bike = {
    brand: 'Hero',
    Price: 120000,
    model: 'Spelender'
}
console.log(Object.values(Bike));



// 6)
const books = {
    book1: "Harry Porter",
    book2: "The Hobbit",
    book3: "Game of Throne"
}

for (const book in books) {
    const values = books[book];
    console.log(values);
}

// 7)

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let sum = numbers.a + numbers.b + numbers.c + numbers.d
console.log(sum);

// 8)
const players = {
    name: "Messi",
    team: "Argentina",
    goals: 91
}
console.log(Object.values(players));


// 9)
const building = {
    floor: 10,
    address: {
        street: "Main Moad",
        city: "Dhaka"
    },
    type: "Commercial"
}
for (const buildings in building) {
    const veleu = building[buildings];
    console.log(buildings,veleu);
}



/* delete, seal , freeze Practice */

// 1)
const headpohone = {
    brand : 'Sony',
    price : 3000,
    color : 'Red'
}
// console.log(headpohone);
Object.freeze(headpohone);
headpohone.typ = 'C'
console.log(headpohone);

// 2)
const playar = {
    name : 'Messi',
    goal : 800,
    club: 'Inter Miami'
}
Object.freeze(playar)
playar.team = "Argentina";
console.log(playar);


// 3)
const book = {
    title : 'Harry Porter',
    author : "JK Rowling",
    pages : 500
}
Object.seal(book);
book.author ="Mohiuddin Biswas";
console.log(book);


// 4)
const gadget ={
    name : "Iphone",
    price : 120000,
    color : "Black"
}
delete gadget.price;
console.log(gadget);



// 5)
const animals ={
    name : "Tiger",
    location : "Sundarban"
}
Object.freeze(animals);
// animals.origin = 'Royal Bengal';
console.log(animals);


// 6)
const food ={
    name : "Pizza",
    price : 500,
    size : "Large"
}
Object.seal(food);
// food.price = 300
console.log(food);