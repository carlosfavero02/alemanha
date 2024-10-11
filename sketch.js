let palavra;

function setup() {
  createCanvas(400, 400);//tela

  palavra = palavraAleatoria();//palavra aleatoria
  
}

function palavraAleatoria() {//palavra aleatoria
  
  let palavras = ["leo", "messi", "goat"];//palvra vriaveis
  
  return random(palavras);//aleatorio das palavras
}

function inicializaCores() {
  background("pink");//cor da tela
  fill("blue");//cor a letra
  textSize(64);//tamanho
  textAlign(CENTER, CENTER);//para ficar no centro
}

function palavraParcial(minimo, maximo) {//minimo e maximo
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);//autura e seguir o mauese
  let parcial = palavra.substring(0, quantidade);//parcial
  return parcial;
}

function draw() {//funcao
  
  inicializaCores();//colores

  let texto = palavraParcial(0, width);//largura
    
  text(texto, 200, 200);//tamanho ali da palavr
  
}

function modoNoturno(horario) {
  if (horario > 18) {//horario
    console.log("Você precisa ligar o modo escuro!");//se precisa o modo escuro
  } else {
    console.log("Modo noturno não é necessário neste momento.");//e nao precia o modo escuro
  }
}

modoNoturno(15);//modo noturno
modoNoturno(20);//modo noturno