let canvas = document.getElementById('cobra');
let context = canvas.getContext('2d');
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right'

function criarBG(){
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCobra(){
    for(i=0; i < cobra.length; i++){
        context.fillStyle ='black'
        context.fillRect(cobra[i].x, cobra[i].y, box, box)
    }
}

document.addEventListener('keydown', update)

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction ='left'
    if(event.keyCode == 38 && direction != 'down') direction = 'up'
    if(event.keyCode == 39 && direction != 'left') direction = 'right'
    if(event.keyCode == 40 && direction != 'up') direction = 'down'

}

function inicarJogo(){

    if(cobra[0].x > 15 * box && direction == 'right') cobra[0].x = 0
    if(cobra[0].x < 0 && direction == 'left') cobra[0].x = 16 * box
    if(cobra[0].y > 15 * box && direction == 'down') cobra[0].y = 0
    if(cobra[0].y < 0 && direction == 'up') cobra[0].y = 16 * box


    criarBG();
    criarCobra();

    let cobrax = cobra[0].x 
    let cobray = cobra[0].y

    if(direction == 'right') cobrax += box
    if(direction == 'left') cobrax -= box
    if(direction == 'up') cobray -= box
    if(direction == 'down') cobray += box

    cobra.pop();

    let novaCabeca = {
        x: cobrax,
        y: cobray
    }

    cobra.unshift(novaCabeca);




}

let jogo = setInterval(inicarJogo, 100);

