var LivingCreature = require("./livingCreature");
var random = require("./random");

module.exports = class Grass extends LivingCreature {
 
    mul() {
        this.life++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell && this.life > 5) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grass = new Grass(x, y);
            grassArr.push(grass);
            this.life = 0;
        }
        if (weath == "winter") {
            this.life -= 3;
        }
        if (weath == "spring") {
            this.life += 3;
        }
        if (weath == "summer") {
            this.life += 2;
        }
        if (weath == "autumn") {
            this.life -= 2;
    }
    } 
}

