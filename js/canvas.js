const canvas = document.querySelector('#paint');
const ctx = canvas.getContext('2d');

window.addEventListener("load", () => {
    canvas.width = window.innerWidth - ((window.innerWidth / 100) * 20);
    canvas.height = window.innerHeight - ((window.innerHeight / 100) * 20);
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth - ((window.innerWidth / 100) * 20);
    canvas.height = window.innerHeight - ((window.innerHeight / 100) * 20);
});

let painting = false;

function startClick(){
    painting = true;
}

function closeClick(){
    painting = false;
}

function draw(e){
    if(!painting) return;
        
}

canvas.addEventListener('mousedown', startClick);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', closeClick);