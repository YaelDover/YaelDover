let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

//Calculate the area and draw the canvas
function onCalc() {
    let elem = document.getElementById("width");
    let width = parseInt(elem.value);
    elem = document.getElementById("height");
    let height = parseInt(elem.value);
    elem = document.getElementById("x");
    let x = parseInt(elem.value);
    elem = document.getElementById("y");
    let y = parseInt(elem.value);


    if (width > 300 || width < 1) {
        window.alert("Width is invalid!");
    } else if (height > 300 || height < 1) {
        window.alert("Height is invalid!");
    } else if (x > 300 || x < 1 || (x + width) > 300 || (x + width) < 1) {
        window.alert("x is invalid!");
    } else if (y > 300 || y < 1 || (y + height) > 300 || (y + height) < 1) {
        window.alert("y is invalid!");
    } else {
        ctx.clearRect(0, 0, 300, 300);
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.rect(x, y, width, height);
        ctx.fill();
        document.getElementById("area").innerHTML = width * height;
    }
}

function onReset() {
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("area").innerHTML = "Calculates the Area..";
    ctx.beginPath();
    ctx.clearRect(0, 0, 300, 300);
    ctx.closePath();
}
    
    
    

    







