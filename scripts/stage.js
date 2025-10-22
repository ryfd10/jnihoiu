
class Stage{
    constructor(level){
    this.level=level

    }

  
}
function clickBall(event) {
    let stage = event.target;
    let st;
    switch (stage.id) {
        case 'a':
            st = 1

            console.log(stage); 
            break;
        case 'b':
            st = 2
            break;
        case 'c':
            st = 3
            console.log(stage);
            break;

        case 'd':
            st = 4
            
            console.log(stage);
            console.log(st);
            break;
    }
    // console.log(stage);
}



