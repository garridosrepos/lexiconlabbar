



let changeDestination = function(){
    let anchor = document.querySelector("#anchor");
    anchor.innerHTML = "Go to Google";
    anchor.setAttribute("href", "https://www.google.se");
    console.log(anchor.attributes);
}


let button = document.querySelector(".changer")

button.addEventListener('click', changeDestination);


