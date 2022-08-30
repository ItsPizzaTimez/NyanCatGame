const starsFunc = () => {

    const stars = document.createElement('span');

    stars.classList.add('stars');
    document.body.appendChild(stars);

    stars.style.left = 100 + "vw";
    stars.style.top = Math.random() * 100 + "vh";

    setTimeout(() => {
        stars.remove();
    }, 4000)

}

setInterval(starsFunc, 80)