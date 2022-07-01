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
var fazendeiro
var goblinParado
var goblinAndando
var goblinAtacando
var goblinLancaAndando
var goblinLancaParado
var goblinLancaAtacando
var homemBatendo
var armaduraBatendo
var moeda
var cabanaGoblin
var casaFazendeiro
var lanca
var flexa
var flexaDeFogo
var fazendeiroIMG
var flexaIMG
var flexaDeFogoIMG
var cabanaGoblinIMG
var casaFazendeiroIMG
var flexaDeFogo
var goblin
var goblinLanca
var inventario
var iconeInventario
var ataque = false
var grupoProjetilJogador
var coisaDoMapa
var voceMorreu
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
fazendeiroIMG = loadImage("fazendeiro.png")
goblinParado = loadAnimation("goblinParado1.png")
goblinAndando = loadAnimation("goblinParado1.png","goblinAnando1.png","goblonAndano2.png")
goblinAndando = loadAnimation("goblinBatendo1.png","goblinBatendo2.png","goblinBatendo3.png","goblinBatendo4.png","goblinBatendo6.png","goblinBatendo7.png","goblinBatendo8.png")
goblinLancaParado =loadAnimation("goblinLança1.png")
goblinLancaAndando = loadAnimation("goblinLança1.png", "goblinLançaAndando1.png","goblinLançaAndando2.png")
goblinLancaAtacando = ("goblinLança1.png","goblinLança2.png","goblinLança3.png","goblinLança4.png","goblinLança5.png","goblinLança6.png")
armaduraBatendo = loadAnimation ("1ºarmaduraBatendo1.png","1ºarmaduraBatendo2.png","1ºarmaduraBatendo3.png","1ºarmaduraBatendo4.png","1ºarmaduraBatendo5.png","1ºarmaduraBatendo6.png","1ºarmaduraBatendo7.png",)
homemBatendo = loadAnimation("homenSocando1.png","homenSocando2.png","homenSocando3.png","homenSocando4.png","homenSocando5.png")
moedaIMG = loadImage("caban goblin.png")
casaFazendeiroIMG = loadImage("casa fazendeiro.png")
lancaIMG = loadImage("lança.png")
flexaIMG = loadImage("flexa.png")
flexaDeFogoIMG = loadImage("flexaDeFogo.png")
cabanaGoblinIMG = loadImage("caban goblin.png")
inventario = loadImage("inventario.png")
iconeInventario = loadImage("icone inventario.png")
voceMorreuIMG = loadImage("voceMorreu.png")

}

function setup() {
 createCanvas(700, 500)

 voceMorreu = createSprite(10, 480)
 voceMorreu.addImage(voceMorreuIMG)
 voceMorreu.scale = 10
 voceMorreu.visible = false
 cenario = createSprite(300, 250)
 cenario.addImage(cenarioIMG)
 cenario.scale = 5
 casaFazendeiro = createSprite(2500,250)
 casaFazendeiro.addImage(casaFazendeiroIMG)
 casaFazendeiro.scale = 3
 cabanaGoblin = createSprite(3200,250)
 cabanaGoblin.addImage(cabanaGoblinIMG)
 cabanaGoblin.scale = 3
 fazendeiro=createSprite(1500,250)
 fazendeiro.addImage(fazendeiroIMG)
 homem = createSprite(10, 480)
 coisaDoMapa = new Group()
coisaDoMapa.add(cabanaGoblin)
coisaDoMapa.add(casaFazendeiro)
coisaDoMapa.add(cenario)
 homem.addAnimation("parado", homemeParado);
 homem.addAnimation("normal", homemAndando);
homem.addAnimation("pulano", homemPulando);
homem.addAnimation("abaixado", homemAbaixado);
homem.addAnimation("atacando",homemBatendo)
homem.addAnimation("armadura1",homemArmadura)
homem.addAnimation("armadura1Pulando",armaduraPulando)
homem.addAnimation("armadura1parado",armaduraParado)
homem.addAnimation("armadura1abaixado",armaduraAbaixado)
grupoProjetilJogador = new Group()
inimigos = new Group()


}

function draw() {
    background(0);
    camera.position.x = homem.x
    camera.position.y = homem.y
    
    homem.changeAnimation("parado", homemeParado);
    
    
    gerarGoblins()
    
    grupoProjetilJogador.overlap(inimigos, function(atirador, atirado){
        atirador.remove()
atirado.remove()
    })

    
    
    
    if ((keyDown("SPACE")) ) {
    homem.changeAnimation("pulo", homemPulando)
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
            if (keyIsDown(UP_ARROW)) {
                homem.y -= 5;
                homem.changeAnimation("normal", homemAndando);
                }
                if (keyIsDown(DOWN_ARROW)) {
                    homem.y += 5;
                    homem.changeAnimation("normal", homemAndando);
                    }
                    if (keyIsDown(CONTROL) && keyIsDown(RIGHT_ARROW)){
                        homem.x += 7;
                        homem.changeAnimation("normal", homemAndando);
                        }
                        if (keyIsDown(CONTROL) && keyIsDown(LEFT_ARROW)){
                            homem.x -= 7;
                            homem.changeAnimation("normal", homemAndando);
                            }
                            if (keyIsDown(CONTROL) && keyIsDown(UP_ARROW)){
                                homem.y -= 7;
                                homem.changeAnimation("normal", homemAndando);
                                }
                                if (keyIsDown(CONTROL) && keyIsDown(DOWN_ARROW)){
                                    homem.y += 7;
                                    homem.changeAnimation("normal", homemAndando);
                                    }
                                    if ((keyDown("SPACE")) ) {
   
                                        voceMorreu.velocityY = -10;
                                           
                                        }
                                        if (keyIsDown(RIGHT_ARROW)) {
                                            voceMorreu.x += 5;
                                            
                                            }
                                            if (keyIsDown(LEFT_ARROW)) {
                                                voceMorreu.x -= 5;
                                               
                                                }
                                                if (keyIsDown(UP_ARROW)) {
                                                    voceMorreu.y -= 5;
                                                
                                                    }
                                                    if (keyIsDown(DOWN_ARROW)) {
                                                        voceMorreu.y += 5;
                                                        
                                                        }
                                                        if (keyIsDown(CONTROL) && keyIsDown(RIGHT_ARROW)){
                                                            voceMorreu.x += 7;
                                                            
                                                            }
                                                            if (keyIsDown(CONTROL) && keyIsDown(LEFT_ARROW)){
                                                                voceMorreu.x -= 7;
                                                                
                                                                }
                                                                if (keyIsDown(CONTROL) && keyIsDown(UP_ARROW)){
                                                                    voceMorreu.y -= 7;
                                                                    
                                                                    }
                                                                    if (keyIsDown(CONTROL) && keyIsDown(DOWN_ARROW)){
                                                                        voceMorreu.y += 7;
                                                                        
                                                                        }



if(homem.isTouching(inimigos)){
    homem.destroy()
    inimigos.destroyEach()
    coisaDoMapa.destroyEach()

    voceMorreu.visible =true
}                                    

 drawSprites()
}

cabanaGoblinDestruida = false;

function gerarGoblins(){
if(cabanaGoblinDestruida==false && frameCount%350==0){
goblin = createSprite(random(3200,3500), random(100,400))

goblinLanca = createSprite(random(3200,3500), random(100,400)

);
goblin.addAnimation("goblinParado",goblinParado)
goblin.addAnimation("goblinAndando",goblinAndando)
goblin.addAnimation("goblinAtacando",goblinAtacando)
goblinLanca.addAnimation("goblinLancaParado",goblinLancaParado)
goblinLanca.addAnimation("goblinLancaAndando",goblinLancaAndando)
goblinLanca.addAnimation("goblinLancaAtacando",goblinLancaAtacando)
inimigos.add(goblin)
inimigos.add(goblinLanca)
}
}

function keyPressed(){
    if(keyCode == 82){
        flexa = createSprite(homem.x,homem.y)
        flexa.addImage(flexaIMG)
        flexa.velocityX = 30
        grupoProjetilJogador.add(flexa)
    }
}







