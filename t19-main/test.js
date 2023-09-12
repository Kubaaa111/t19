const text = `Janusz Kowalski`;
console.log(text);


let text2 = "Janusz";
text2 += " Kowalski";
console.log(text2);

const a = 10;
const b = 20;
const text3 = "Stała a: " + a + ", Stała b: " + b;
console.log(text3); 


// template strings
const text4 = `Stała a: ${a}, stała b: ${b}`;
console.log(text4);


// długość stringów
console.log("Janusz Kowal".length);

// Pobieranie znaków
let text5 = "Janusz";
console.log(text5.charAt(0)); // J
console.log(text5[0]); // J
console.log(text5.length); // 6
console.log(text5[text5.length]); // Undefinied => text[6]
console.log(text5[5]); // z
console.log(text5[text5.length-1]); // z

// zmiania wielkosci liter
let name1 = "Janusz";
console.log(name1);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

// wstawianie stringa (indexof, lastIndexOf)
if (name1.indexOf("nuS") !== -1) {
    console.log("1");
}else{
    console.log("0");
}

console.log(name1.indexOf("nuS")); // -1
console.log(name1.indexOf("nus")); // 2

// cięcie stringa
let websiteaddress = "http://strona.pl/plik.php";
console.log(websiteaddress.slice(2));  // tp://strona.pl/plik.php
console.log(websiteaddress.slice(websiteaddress.lastIndexOf(".")));  // .php
console.log(websiteaddress.slice(websiteaddress.lastIndexOf(".")+ 1));  //php
console.log(websiteaddress.slice(websiteaddress.lastIndexOf("/") + 1)); // plik.php
console.log(websiteaddress.slice(websiteaddress.lastIndexOf("/") + 1));

let filename = websiteaddress.slice(websiteaddress.lastIndexOf("/") + 1); //plik.php
let part = filename.split(".");

console.log(filename); // plik.php
console.log(part[0]); // plik
console.log(part[1]); // php

console.log(part[1].startsWith("php")); // true
console.log(part[1].startsWith("hp")); // false
console.log(part[1].endsWith("hp")); // true

// Funkcja substr() i substring()
let lastname ="Janusz";
let newlastname = lastname.substr(0); // przesztarzałe 
console.log(newlastname); // Janusz 
console.log(lastname.substr(0,  1)); // J
console.log(lastname.substr(0,  3)); // Jan
console.log(lastname.substr(4)); // sz
console.log(lastname.substring(0, 3)); // Jan
console.log(lastname.substring(4)); // sz

// split
let nationality = "Polska, albania, Mołdawia, czechy";
let part1 = nationality.split(", ");
part1.forEach(function(country){
    // console.log(country);
    console.log(country.substring(0, 1).toUpperCase() + country.substring(1).toLowerCase());
});

// zamiana (replace)
text5 = "Janusz mieszka w Poznaniu, Janusz ma 20 lat"
console.log(text5.replace("Janusz", "Tomasz"));
console.log(text5.replaceAll("Janusz", "Tomasz"));

// powtarzanie (repeat)
let str = "";
console.log(str);
str = " Janusz";
console.log(str.repeat(3));
console.log("-".repeat(20));

// wyświetlanie stringów
const letters = "abcdef";
 
for(let i=0; i<letters.length; i++){
    console.log(letters[i]);
}

for(const letter of letters){
    console.log(letter);
}

[...letters].forEach(function(letter){
    console.log(letter);
});

letters.split("").forEach(function(letter){
console.log(letter);
});

// długość stringów

console.log("a".length);
console.log("\u2614"); // parasol
console.log("\u{2614}".length); // 1
console.log("\u{1F691}"); // pogotowie
console.log("\u{1F691}".length); // 2






