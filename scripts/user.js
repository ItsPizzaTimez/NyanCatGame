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
            start.classList.add("started")
        ) : (console.log("log | type : function | Location : startGame"))

    })

}

const actions = () => {

    window.addEventListener('keydown', e => {

        let speedW = 1;
        let speedH = 2;

        switch (e.key) {

            case 'ArrowRight':
                player.style.left = parseInt(player.style.left) + speedW + "vw";
                break;
            case 'ArrowLeft':
                player.style.left = parseInt(player.style.left) - speedW + "vw";
                break;
            case 'ArrowUp':
                player.style.top = parseInt(player.style.top) - speedH + "vh";
                break;
            case 'ArrowDown':
                player.style.top = parseInt(player.style.top) + speedH + "vh";
                break;

        }

    })

}

setup();
startGame();
actions();