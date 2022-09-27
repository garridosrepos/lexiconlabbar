



let width = document.querySelector( '#cube-width.form-control');
let height = document.querySelector('#cube-height.form-control');
let depth = document.querySelector( '#cube-depth.form-control');
let result = document.querySelector("#result")
let volResult = document.querySelector("#volResult")

let volume = function () {

    let w = parseFloat(width.value);
    let h = parseFloat(height.value);
    let d = parseFloat(depth.value);

    var value = h * d * w;



    var volumeValue = Math.fround(value);


    console.log("Calculated volume-value: "+ volumeValue);

    if(parseFloat(width.value) < 0 || parseFloat(height.value) < 0 ||parseFloat(depth.value)< 0){
        volumeValue = volumeValue * -1;
    }
    return volumeValue;
}



let updateVolume = function () {
    console.log(this.id + ": " + this.value);
    let vol = volume();
    result.innerHTML = vol;
    volResult.innerHTML = vol;
    /*console.log(this);*/

}

updateVolume();







