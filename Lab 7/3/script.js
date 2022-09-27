



let width = document.querySelector( '#cube-width.form-control');
let height = document.querySelector('#cube-height.form-control');
let depth = document.querySelector( '#cube-depth.form-control');
let result = document.querySelector("#result")
let volResult = document.querySelector("#volResult")

let volume = function () {
    var value = parseFloat(width.value) * parseFloat(height.value) * parseFloat(depth.value);
    value = Math.fround(value);

    console.log("Calculated volume-value");
    if(parseFloat(width.value) < 0 || parseFloat(height.value) < 0 ||parseFloat(depth.value)< 0){
        value = value * -1;
    }
    return value;
}


let updateVolume = function () {
    console.log(this.id + ": " + this.value);
    let vol = volume();
    result.innerHTML = vol;
    volResult.innerHTML = vol;
    /*console.log(this);*/

}

updateVolume();
/*
width.addEventListener('valueChange', updateVolume);
height.addEventListener('click', updateVolume);
depth.addEventListener('click', updateVolume);
*/







