
let socket = io();
function setup() {

    let side = 10;

    let matrix = [];


    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let hunterCountElement = document.getElementById('hunterCount');
    let alienCountElement = document.getElementById('alienCount');
    let virusCountElement = document.getElementById('virusCount');
    let weathernameElement = document.getElementById('weather');
   

    socket.on("weather", function(data){
        weath = data;
   })
    weath = "spring";
    
     
function drawCreatures(data) {

    matrix = data.matrix;
    grassCountElement.innerText = data.grassCounter;
    grassEaterCountElement.innerText = data.grasseaterCounter;
    predatorCountElement.innerText = data.predatorCounter;
    hunterCountElement.innerText = data.hunterCounter;
    alienCountElement.innerText = data.alienCounter;
    virusCountElement.innerText = data.virusCounter;
    weathernameElement.innerText = "The weather is"+ " "+ data.weathername;


    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#D3D3D3'); 
    noStroke()

        for (let y = 0; y < matrix.length; y++) {
            const element = matrix[y];
            for (let x = 0; x < element.length; x++) {

                if (matrix[y][x] == 1) {
                    if (weath == "summer") {
                        fill('#3C8A41');
                    } else if (weath == "autumn") {
                        fill("#FFD580");
                    } else if (weath == "winter") {
                        fill("#EEF7EF");
                    } else if (weath == "spring") {
                        fill("#29BB3A");
                    }
                    rect(x * side, y * side, side, side, side / 4)
                }
                else if (matrix[y][x] == 2) {
                    fill('#E1B200');
                    rect(x * side, y * side, side, side, side / 4)

                }
                else if (matrix[y][x] == 3) {
                    fill('#7E6400');
                    rect(x * side, y * side, side, side, side / 4)
                }
                else if (matrix[y][x] == 4) {
                    fill('#B74D11');
                    ellipse(x * side, y * side, side + 4, side + 4)

                }
                else if (matrix[y][x] == 5) {
                    fill('#15438E');
                    ellipse(x * side, y * side, side + 8, side + 5)
                    
                }
                else if (matrix[y][x] == 6) {
                    fill("#A020F0");
                    rect(x * side, y * side, side/2, side/2);
                }
                else {
                    fill('#D3D3D3');
                    rect(x * side, y * side, side, side, side / 4)
                }

            }
        }
    }
    socket.on("data", drawCreatures);
}

function addPredator() {
    socket.emit("add predator")
}
function addHunter() {
    socket.emit("add hunter")
}

function addAlien() {
    socket.emit("add alien")
}
function kill() {
    socket.emit("kill")
}

