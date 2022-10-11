const children = document.getElementsByClassName("input-box");
console.log(children);




let windowWidth=()=>{
    console.log(window.innerWidth)
}

document.querySelector('.main').addEventListener('window-width', () =>{
    console.log("Reacting");
    console.log(window.innerWidth);
})