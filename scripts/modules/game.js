class Game {
    // בנאי
    constructor(canvas, sh) {
        this.context = canvas.getContext('2d')
        this.place = new Shelf(5, -80, sh)
        this.arr = []
        this.score =0
        this.gameOver = false
        this.timer = 59
        this.stage=2
    }
    //שינוי כיוון המדף
    changeShelf(side) {
        if (side == 'ArrowRight') {
            // if (this.place.x == 0){}
            if (this.place.x != 1910) {
                this.place.x += 20
                // console.log(this.place.x);
            }

            else
                this.place.x = 0
        }
        if (side == 'ArrowLeft') {
            if (this.place.x != 0) {
                this.place.x -= 20
                // console.log(this.place.x);
            }

            else
                this.place.x = 1910

        }
    }
    //ירידת הכדורים
    falling(ctx) {
        this.arr = this.arr.filter(b => b !== 'a')
        this.arr.forEach(b => b.y += this.stage)
        this.draw(ctx)

    }
    // ציור ומחיקה
    draw(ctx) {
        ctx.clearRect(0, 0, 1910, 960)
        this.place.draw(this.context)
        this.drawScore(ctx)
        this.arr.forEach(b => b.draw(this.context))
    }

    deleted(ctx) {
        ctx.clearRect(0, 0, 1910, 960)
        this.place.draw(this.context)
    }

    //  יצירת כדור נופל
    newBall() {
        let fall = new Ball((Math.trunc(Math.random() * 1900) - 850), -800, balls[Math.trunc(Math.random() * balls.length)])
        console.log(fall)
        if (g.arr.length < 10)
            g.arr.push(fall)
        else {
            g.arr.shift()
            g.arr.push(fall)
        }
    }

    drawScore(ctx) {
        ctx.beginPath()
        ctx.font = '80px Segoe Script '
        ctx.fillStyle='red'
        ctx.fillText(this.score, 300, 246 )
        ctx.closePath()
    }
    
       
    
    //ספירת נקודות
    countScorse() {
        let flag=false;

        console.log(this.score);
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].x <= this.place.x + 210 && this.arr[i].x >= this.place.x - 250 && this.arr[i].y === this.place.y - 160) {
                switch (this.arr[i].color) {
                    case 'green':
                        if (this.arr[i].x < this.place.x + 220 && this.arr[i].x > this.place.x + 80) {
                            g.score += 10
                            console.log(this.score);
                            this.arr[i] = 'a'
                            this.draw(this.arr)
                        }
                        else {
                            g.score -= 10
                            console.log(this.score);
                            this.arr[i] = 'a'
                            this.draw(this.arr)

                        }
                        break;
                    case 'blue':
                        if (this.arr[i].x < this.place.x + 60 && this.arr[i].x > this.place.x - 110) {

                            g.score += 10
                            this.arr[i] = 'a'
                            this.draw(this.arr)
                        }
                        else {
                            g.score -= 10
                            this.arr[i] = 'a'
                            this.draw(this.arr)
                        }
                        break;
                    case 'red':
                        if (this.arr[i].x <= this.place.x - 170 && this.arr[i].x >= this.place.x - 250) {
            
                            g.score += 10
                            this.arr[i] = 'a'
                            this.draw(this.arr)
                        }
                        else {
                          
                            g.score -= 10
                            this.arr[i] = 'a'
                            this.draw(this.arr)
                        }
                        break;
                        
                }
            }
        }
    }
}
