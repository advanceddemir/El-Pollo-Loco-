class Character extends MovableObject {
    height = 400;
    width = 200;
    y = 80;
    speed = 10;
    world;
    lastMove = Date.now();

    constructor() {
        super().loadImage('./img/2_character_pepe/1_idle/idle/I-1.png');
        this.applyGravity();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkMovement();
        }, 1000 / 60);

        setInterval(() => {
            this.checkAnimation();
        }, 100);
    }

    checkMovement() {
        if (this.world.keyboard.RIGHT && this.x < 2500) {
            this.moveRight();
            this.otherDirection = false;
            this.lastMove = Date.now();
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            this.lastMove = Date.now();
        }
        if (this.world.keyboard.UP && !this.isAboveGround()) {
            this.jump();
            this.lastMove = Date.now();
        }
        this.world.cameraX = -this.x + 100;
    }

checkAnimation() {
    let idleTime = Date.now() - this.lastMove;
    
    if (this.isAboveGround()) {
        this.playAnimation(this.imagesJump); // Springen
    } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.imagesWalking); // Laufen
    } else if (idleTime > 15000) {
        this.playAnimation(this.imagesLongIdle); // Schlafen
    } else {
        this.playAnimation(this.imagesIdle); // Normales Stehen
    }
}
}