


/** Du ska i denna laborationsuppgift göra följande:
 - Skapa en Array med 5 olika namn i.
 **/
let nameArray = ["Georgetta", "Lovelyn", "Gaetano", "Margot", "Teron"];

//Output
console.log("Initial array:\n\t "+nameArray);


/** - Ta bort den sista posten i din array.**/
let poppedName = nameArray.pop();
//Show results
console.log("\n\nAfter the last item been removed:\n\t " + nameArray ) ;


/**- Ändra namnet på plats 2 (tank på att arrayer är 0 baserade)
 * */
let index = 1;
let replacer = "Erickson";

nameArray.fill(replacer, index, index+1);
console.log("\n\nThe array after the second item been changed :\n\t " + nameArray ) ;


/**Lägg till ‘Joakim’ som ett namn i din array.**/
let newName = "Joakim";
nameArray.push(newName);
console.log("\n\nThe array after inserting " + newName+ ":\n\t " + nameArray );

/** # Sortera array:en i bokstavsordning**/
nameArray.sort();
console.log("\n\nThe array after sorting in alphabetical order:\n\t " + nameArray ) ;

// - Ta reda på vilken index plats ‘Joakim’ har
let position = nameArray.indexOf(newName);
console.log("\n\nThe position of "+ newName +" is "+ position);


//- Ta bort ‘Joakim’ igen
//  Delar på listan i två delar och delning sker så att sökt namn hamnar sist i sin del.
let chop = nameArray.splice(position +1 );

console.log("Det sökta namnet hamnar sist den dellistan och kan poppas ut genom; namesArray.pop() =: " + nameArray.pop());

//destructing
nameArray= [...nameArray, ...chop]
console.log("resulting array: "+ nameArray);

console.log("\n"+nameArray);

//- Loopa igenom din array och logga varje namn i consolen
for(n in nameArray){
    console.log("array["+ n + "] = "+nameArray[n]);
}
