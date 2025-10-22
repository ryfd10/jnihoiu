let img = document.createElement('img')
img.setAttribute('src', './assets/shelf.png')
const g = new Game(document.querySelector('#game'), img)
// let ggg = document.querySelector('#levels')
// console.log(ggg);
// ggg.addEventListener('click', clickStage = () => {
//     let stage = event.target;
//     let st;
//     switch (stage.id) {
//         case 'A':
//             st = 1
//             console.log(stage);
//             break;
//         case 'B':
//             st = 2
//             break;
//         case 'C':
//             st = 3
//             console.log(stage);
//             break;

//         case 'D':
//             st = 4
//             console.log(stage);
//             console.log(st);
//             break;
//     }
// }
// )

window.addEventListener('keydown', (ev) => {
    if (ev.key.includes('Arrow'))
        g.changeShelf(ev.key)
})


loop()
function loop() {
    let animate = requestAnimationFrame(loop)
    if (g.gameOver) {
        cancelAnimationFrame(animate)
    }
    g.falling(g.context)
    g.countScorse()
}
// function clickStage(event) {
// }
    
setInterval(_ => { g.newBall() }, 2000)
let t = setInterval(_ => {
    if (g.timer > 0 && g.score <150) {
        g.timer -= 1
        if (g.timer > 9)
            document.querySelector('#timer span').innerHTML = `00:${g.timer}`
        else
            document.querySelector('#timer span').innerHTML = `00:0${g.timer}`
    }
    else {
        clearInterval(t)
        g.gameOver = true
        if (g.score >= 150) {
            document.querySelector('.endGame h1').innerHTML = '👍wow!!!'
        }
        else {
            document.querySelector('.endGame h1').innerHTML = '🤔gameOver!!!'
        }
    }
}, 1000)