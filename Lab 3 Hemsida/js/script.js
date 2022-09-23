

function setTextContentInElement(id){
    let element = document.getElementById(id);
    element.textContent = element.className;
    console.log("Class name: "+ element.className);
}
setTextContentInElement("c1");

