
let multiplication = {

    calculate(x,y){
        return x * y;
    },

    stringify(x, y){
        return " "+ x + " * " + y +":  " + this.calculate(x,y);
    }
}

let subtraction = {

    calculate: function(x, y){
        return x - y;
    },

    stringify: function(x,y){
        return " "+ x + " - " + y +":  " + this.calculate(x,y);
    }
}
let addition = {

    calculate: function(x,y){
        return x + y;
    },

    stringify: function(x,y){
        return " "+ x + " + " + y +":  " + this.calculate(x,y);
    }
}




let person = {
    firstName: "Bengan",
    lastName: "Bengtsson",
    age: 43,
};




/***** MAIN *****/

let x = 10;
let y = 20;

console.log("Del mediaq:\nDeklarerade variabler: x="+ x + " och y="+ y + "\n");

console.log("Addition ger:  "+ addition.calculate(x,y));
console.log("Subtraktion ger: "+ subtraction.calculate(x, y));
console.log("Multiplikation:  " + multiplication.calculate(x, y));


console.log("Del 2");
console.log(addition.stringify( x, y));
console.log(subtraction.stringify( x, y));
console.log(multiplication.stringify( x, y));



console.log("Hej, mitt namn är "+ person.firstName + " "+ person.lastName + " och jag är "+ person.age + " år gammal.");

