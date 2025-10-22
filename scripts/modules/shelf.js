class Shelf extends Point {
    constructor(x, y, sh) {
        super(x, y)
        // this.color=color
        this.img = sh;
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.drawImage(this.img, this.x, this.y)
        ctx.closePath()
    }
    size(placeX) {
        return (placeX+ 215) - (placeX - 215)

    }
}