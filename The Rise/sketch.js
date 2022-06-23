var cenarioIMG
var golemP
var homem
var homemArmadura
var homemAndando
var homemeParado
var homemPulando
var homemAbaixado
var armaduraPulando
var armaduraParado
var armaduraAbaixado
function preload(){
cenarioIMG = loadImage("teste de cenario.png")
golemP = loadImage("pixil-frame-0 (10).png")
homem = loadImage("parado.png")
homemAndando = loadAnimation("parado.png", "andando1.png", "andando2.png")
homemArmadura = loadAnimation("1ºarmaduraParado.png", "1ºarmaduraAndando1.png", "1ºarmaduraAndando2.png")
homemeParado = loadAnimation("parado.png")
homemPulando = loadAnimation("pulando.png")
homemAbaixado = loadAnimation("abaixado.png")
armaduraAbaixado = loadAnimation("1ºarmaduraAbaixada.png")
armaduraParado = loadAnimation("1ºarmaduraParado.png")
armaduraPulando = loadAnimation("1ºarmaduraPulando.png")
}

function setup() {
 createCanvas(700, 500)

 homem = createSprite(10, 480)

 homem.addAnimation("parado", homemeParado);
 homem.addAnimation("normal", homemAndando);
homem.addAnimation("pulano", homemPulando);
homem.addAnimation("abaixado", homemAbaixado);
}

function draw() {
    background(cenarioIMG);
    homem.changeAnimation("parado", homemeParado);
    if ((keyDown("SPACE")) ) {
    
        homem.velocityY = -10;
       
    }
    if (keyIsDown(RIGHT_ARROW)) {
        homem.x += 5;
        homem.changeAnimation("normal", homemAndando);
        }
        if (keyIsDown(LEFT_ARROW)) {
            homem.x -= 5;
            homem.changeAnimation("normal", homemAndando);
            }
    
    if(keyDown("A")){
    homem.addAnimation("armadura", homemArmadura);
    }

 drawSprites()
}
