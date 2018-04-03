var canvas = document.querySelector('canvas');

//return an object with methods and properties to draw on the canvas
var c = canvas.getContext('2d');

//set the canvas dimension to the size of the window
canvas.height = window.innerHeight
canvas.width = window.innerWidth;

document.getElementById('plus').onclick = increase;
document.getElementById('minus').onclick = decrease;

function decrease(){
    c.lineWidth = c.lineWidth - 10;
}

function increase(){
    c.lineWidth = c.lineWidth + 10;
}

var down = false;

window.onload = init;

function init() {


    canvas.onmousedown = function (e) {
        down = true;
        var x = e.clientX;
        var y = e.clientY;
        c.beginPath();
        c.moveTo(x, y);
    }

    canvas.onmousemove = function (e) {
        if (down) {
            var x = e.clientX;
            var y = e.clientY;
            c.lineTo(x, y);
            c.strokeStyle = "white";
            c.stroke();
        }
    }

    canvas.onmouseup = function (e) {
        down = false;
        c.closePath();
    }

   

}
