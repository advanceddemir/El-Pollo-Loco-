class World {
    character = new Player(); 
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        
        this.character.draw(this.ctx);
        
        this.ctx.translate(-this.cameraX, 0);
        requestAnimationFrame(() => this.draw());
    }
}