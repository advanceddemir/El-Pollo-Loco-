class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 60;

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 500 + Math.random() * 1000;
        this.speed = 0.15 + Math.random() * 0.5;
        this.walk();
    }

    walk() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}