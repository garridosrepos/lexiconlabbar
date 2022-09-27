



let width       = document.querySelector('#cube-width.form-control');
let height      = document.querySelector('#cube-height.form-control');
let depth       = document.querySelector('#cube-depth.form-control');
let result      = document.querySelector("#result")
let volResult   = document.querySelector("#volResult")

let volume = function () {

    let w = parseFloat(width.value);
    let h = parseFloat(height.value);
    let d = parseFloat(depth.value);

    var value = h * d * w;
    console.log("Calculated volume-value: "+ value);
    return value;
}

let updateVolume = function () {
    result.innerHTML = volume();
}

updateVolume();







