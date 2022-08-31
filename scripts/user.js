import { meteoriteFunc1, meteoriteFunc2 } from './enemy.js';

const player = document.querySelector('#nyan-cat-contenair');
const start = document.querySelector('#start');

const setup = () => {
    start.classList.add("notStarted");
    player.classList.add("started");
    player.style.left = 0 + "vw";
    player.style.left = 10 + "vw";
    player.style.top = 0 + "vh";
    player.style.top = 40 + "vh";
}

const startGame = () => {

    window.addEventListener("keydown", e => {

        (e.key === 'Enter') ? (
            player.classList.remove("started"),
            player.classList.add("notStarted"),
            start.classList.add("started"),
            setInterval(meteoriteFunc1, 750),
            setInterval(meteoriteFunc2, 1500)
        ) : (console.log("log | type : function | Location : startGame"))

    })

}

const actions = () => {

    window.addEventListener('keydown', e => {

        let speedW = 2;
        let speedH = 3;
        const posX = parseInt(player.style.left);
        const posY = parseInt(player.style.top);

        switch (e.key) {

            case 'ArrowRight':
                if (posX < 90) player.style.left = parseInt(player.style.left) + speedW + "vw";
                break;
            case 'ArrowLeft':
                if (posX > 0) player.style.left = parseInt(player.style.left) - speedW + "vw";
                break;
            case 'ArrowUp':
                if (posY > 0) player.style.top = parseInt(player.style.top) - speedH + "vh";
                break;
            case 'ArrowDown':
                if (posY < 88) player.style.top = parseInt(player.style.top) + speedH + "vh";
                break;

        }

    })

}

setup();
startGame();
actions();