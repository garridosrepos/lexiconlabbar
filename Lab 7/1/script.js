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

