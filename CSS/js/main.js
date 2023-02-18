function iniciar(){

function createBolhas(){
    
    const section = document.querySelector('section');
    const createElement = document.createElement('span');
    var size = Math.random() * 50;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    },8000)
}
    
setInterval(createBolhas,50);
const music = new Audio('audio/Bolhas na água.mp3');
    music.play();
    music.loop = true;    
}

