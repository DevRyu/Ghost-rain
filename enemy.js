const enemy_CLASS = 'enemy';
const enemyAlive_CLASS = 'enemyAlive';
const enemyDead_CLASS = 'enemyDead';

const bg_EL = document.querySelector('#bg');

class Enemy {
    constructor() {
        this.createElEnemy = document.createElement('div');
        this.x = Math.floor(Math.random() * 756);
        this.y = 0;
        this.createElEnemy.classList.add(enemy_CLASS);
        this.createElEnemy.style.left = this.x + 'px';
        this.createElEnemy.classList.add(enemyAlive_CLASS);
        bg_EL.appendChild(this.createElEnemy);

    }

    moveDown() {
        setInterval(() => {
            this.y += 20;
            console.log(this.y)
            this.createElEnemy.style.top = this.y + "px";
        }, 1000)

        console.log(this)
        console.log(this.y)
    }
    enemyBottom() {
        if (this.y < 546) {
            this.createElEnemy.classList.remove(enemyAlive_CLASS);
        }
    }
}