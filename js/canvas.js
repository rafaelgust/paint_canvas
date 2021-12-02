const canvas = document.querySelector('#paint');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let painting = false;

function startClick(){
    painting = true;
}

function closeClick(){
    painting = false;
    ctx.beginPath();
}

function draw(e){
    if(!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener('mousedown', startClick);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', closeClick);