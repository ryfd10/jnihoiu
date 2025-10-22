class Ball extends Point{
    constructor(x,y,b){
        // Math.trunc(Math.random() * ball.length)
        super(x,y)
        this.color=b.color
        this.score=b.score
        this.pic=b.src

    }
    draw(ctx) {
        let image = document.createElement('img')
        image.setAttribute('src', this.pic)
        // ctx.beginPath()
        ctx.drawImage(image, this.x, this.y)
       
        // ctx.style.width = '10px'
    //    ctx.Ball.style.height = '10px'

        // ctx.closePath()
    }

}