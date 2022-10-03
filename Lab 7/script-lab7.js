/**
 * Del 1:
 *
 *
 */

const updateButton = document.querySelector("#button");
const resetButton = document.querySelector("#reset-button")
const paragraph = document.querySelector("#paragraph");
const oldMsg = "Denna paragraf är gammal och måste uppdateras";
const newMsg = "Denna paragraf är ny och fräsch.";

let disableButton = function(buttonItem){
    buttonItem.setAttribute("disabled", true);
}
let enableButton = function(buttonItem){
    buttonItem.removeAttribute("disabled");
}
let updateText = function(){

    let p  = document.getElementById('paragraph');
    p.textContent = newMsg;
    disableButton(updateButton);
    enableButton(resetButton);
    console.log("This is: ",this);

}

let reset = function(){
    let p = document.getElementById("paragraph")
    p.innerHTML = oldMsg;
    enableButton(updateButton);
    disableButton(resetButton);

}




updateButton.addEventListener('click', updateText);
resetButton.addEventListener('click', reset);

/** ======================================================================================== */


/**
 * Del 2:
 * */
let changeDestination = function(){
    let anchor = document.querySelector("#anchor");
    anchor.innerHTML = "Go to Google";
    anchor.setAttribute("href", "https://www.google.se");
    console.log(anchor.attributes);
}


let button = document.querySelector(".changer")

button.addEventListener('click', changeDestination);

/** ======================================================================================== **/



/**
 *
 * Del 3:
 * */

let cubeWidth   = document.querySelector('#cube-width.form-control');
let cubeHeight  = document.querySelector('#cube-height.form-control');
let cubeDepth   = document.querySelector('#cube-depth.form-control');
let result      = document.querySelector("#result")
let volResult   = document.querySelector("#volResult")

let volume = function () {

    let w = parseFloat(cubeWidth.value);
    let h = parseFloat(cubeHeight.value);
    let d = parseFloat(cubeDepth.value);

    var value = h * d * w;
    console.log("Calculated volume-value: "+ value);
    return value;
}

let updateVolume = function () {
    result.innerHTML = volume();
}

updateVolume();