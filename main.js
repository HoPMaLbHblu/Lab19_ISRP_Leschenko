/*

for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i

}
console.log(sum);

let count = 0;
while (count < 3) {
    console.log("Count: ", count)
    count++;
}

let number = 5
while (number > 0) {

    console.log(number)
    number--;
}

let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);

}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

for (let i = 1; i <= 4; i++) {
    let s = "";

    for (let j = 1; j <= i; j++) {
        s += "*";
    }
    console.log(s);
}
*/


function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 5));

function printInfo(name, age) {
    console.log(name, age)
}
printInfo("dan", 18)

function calculateDiscount(cost, percent = 10) {
    return cost - (cost * percent / 100)
}
console.log(calculateDiscount(500, 50))

let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);
console.log(numbersArr[0]);
console.log(numbersArr[1]);

let colors = ["red", "green", "yellow"];
console.log(colors[0], colors[2]);

colors[1] = "white";
console.log(colors);

let stunents = [];
stunents.push("sanya");
stunents.push("sonya");
stunents.push("vanya");
stunents.pop();
console.log(stunents);

let citys = ["moscow", "volgograd"];
if (citys.includes("moscow")) {
    console.log(citys.indexOf("moscow"));
}

let user2 = {
    name: "Ivan",
    age: 20,
    isStudent: true,
};

console.log(user2);

let book = {
    title: "s",
    author: "e",
    year: 2007
}
console.log(book.title, book.author, book.year);
book.year = 2006

let car = {
    brand: "bmw",
    year: 2010,
    getInfo: function () {
        console.log(`Brand: ${this.brand}, year: ${this.year}`)
    }
}
car.getInfo();

let product = {
    expiration: "20d",
    name: "kefir",
    cost: 120,
}

for (let pr in product) {
    console.log(pr + ": " + product[pr]);
}
/*