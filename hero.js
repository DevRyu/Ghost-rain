let heroAvartar = document.querySelector('#hero')
let x = 365;

const heroLeft_CLASS = 'heroLeft';
const heroRight_CLASS = 'heroRight';
const heroDown_CLASS = 'heroDown';

function moveLeft() {
    if (x > 0) {
        x -= 15;
        heroAvartar.style.left = x + "px";
        heroAvartar.classList.remove(heroDown_CLASS);
        heroAvartar.classList.remove(heroRight_CLASS)
        heroAvartar.classList.add(heroLeft_CLASS);
    }
}

function moveRight() {
    if (x < 765) {
        x += 15;
        heroAvartar.style.left = x + "px";
        heroAvartar.classList.remove(heroDown_CLASS);
        heroAvartar.classList.remove(heroLeft_CLASS);
        heroAvartar.classList.add(heroRight_CLASS);
    }
}

function statusBasic() {
    document.addEventListener('keyup', function () {


        heroAvartar.classList.remove(heroRight_CLASS);
        heroAvartar.classList.remove(heroLeft_CLASS);
        heroAvartar.classList.add(heroDown_CLASS);
    })
}

function pressKey() {
    statusBasic();

    document.addEventListener("keydown", (event) => {
        if (event.keyCode === 37) {
            moveLeft();
        } else if (event.keyCode === 39) {
            moveRight();
        }
    })
}