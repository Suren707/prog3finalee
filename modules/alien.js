var LivingCreature = require("./livingCreature");
var GrassEater = require("./grasseater");
var random = require("./random");


module.exports = class Alien extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 60;
    }
    
    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < alienArr.length; index++) {
            if (alienArr[index].x == this.x && alienArr[index].y == this.y) {
                alienArr.splice(index, 1)
            }
        }
    }
    kill() {
        this.getNewDirections();
        let emptyCells = this.chooseCell(3);
        let newCell = random(emptyCells);

        if (newCell) {
            this.energy += 40;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;

            for (let index = 0; index < predatorArr.length; index++) {
                if (predatorArr[index].x == x && predatorArr[index].y == y) {
                    predatorArr.splice(index, 1);
                    let f = new GrassEater(x, y);
                    grassEaterArr.push(f);
                }
            }
    
            if(this.energy >65){
                this.move()
            }
        }
        else { this.move() }
    }
    
   
    
    move(){
        this.energy--;
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells1));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (newCell && this.energy < 0){
            this.die();
        }
        if (this.energy < 0){
            this.die();
        }

    }
}

