const meteoriteFunc1 = () => {

    const enemy1 = document.createElement('span');

    document.body.appendChild(enemy1);
    enemy1.classList.add('enemy1');

    enemy1.style.left = 100 + "vw";
    enemy1.style.top = Math.random() * 100 + "vh";

    setTimeout(() => {
        enemy1.remove();
    }, 6000)

}

const meteoriteFunc2 = () => {

    const enemy2 = document.createElement('span');

    document.body.appendChild(enemy2);
    enemy2.classList.add('enemy2');

    enemy2.style.left = 100 + "vw";
    enemy2.style.top = Math.random() * 100 + "vh";

    setTimeout(() => {
        enemy2.remove();
    }, 4000)

}

export { meteoriteFunc1, meteoriteFunc2 }