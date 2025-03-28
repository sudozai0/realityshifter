class Enemy {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.speed = type === "stalker" ? 2 : 1;
        this.attackPattern = type === "drone" ? "laser" : "chase";
    }

    move(playerX, playerY) {
        if (this.attackPattern === "chase") {
            this.x += (playerX - this.x) * 0.02;
            this.y += (playerY - this.y) * 0.02;
        }
    }

    draw(ctx) {
        const img = new Image();
        img.src = `assets/characters/enemy_${this.type}.png`;
        ctx.drawImage(img, this.x, this.y);
    }
}