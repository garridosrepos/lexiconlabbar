

/** Funktion mediaq:*/
console.log("Function mediaq:")
let hello= () => console.log("Hello world");
hello();
console.log("")

/** Funktion 2:*/
console.log("Function 2: ");
let greet = (name) => console.log('Hello '+name + ', how are you doing?');
let name = "Bengan";
greet(name);
console.log("")

/** Funktion 3:*/
console.log("Function 3: ");
let calc = (x, y) => x+y;
let x = 10;
let y = 22;
console.log("calc("+x+", "+y+") = "+calc(x, y))
console.log("")

/** Funktion 4:*/
console.log("Function 4: ");
const tip = (sum, percent) => sum + (sum * percent);
console.log("Total of 100$ plus a 15% tip rate is: "+tip(100,.15)+"$");