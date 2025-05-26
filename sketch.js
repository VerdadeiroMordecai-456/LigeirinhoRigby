let xJogador = [550, 550];
let yJogador = [220, 280];
let jogador = ["🚗", "🚙"];
let teclas = ["a", "l"];
let mostrarMensagem = true;

let cidadeEmojis = [];
let campoEmojis = [];

function setup() {
  createCanvas(600, 400);

  // Gera emojis fixos para cidade (direita)
  for (let x = 400; x < width; x += 40) {
    cidadeEmojis.push(random(["🏙️", "🏢", "🏬"]));
  }

  // Gera emojis fixos para campo (esquerda)
  for (let x = 0; x < 200; x += 40) {
    campoEmojis.push(random(["🌾", "🌻", "🌲"]));
  }
}

function draw() {
  background("#98FB98");
  desenhaEstradas();
  desenhaCidade();
  desenhaCampo();
  desenhaJogadores();
  verificaVencedor();
  desenhaMensagem();
}

function desenhaEstradas() {
  fill("#2f2f2f");
  rect(300, 200, 300, 100);
  fill("yellow");
  for (let x = 310; x < width; x += 40) {
    rect(x, 248, 20, 4);
  }

  fill("#b58b4c");
  rect(0, 200, 300, 100);
  fill("#8b5a2b");
  for (let x = 10; x < 290; x += 50) {
    ellipse(x, 230, 8, 4);
    ellipse(x + 20, 270, 8, 4);
  }
}

function desenhaCidade() {
  textSize(30);
  textAlign(LEFT);
  for (let i = 0; i < cidadeEmojis.length; i++) {
    let x = 400 + i * 40;
    text(cidadeEmojis[i], x, 170);
  }
}

function desenhaCampo() {
  textSize(30);
  textAlign(LEFT);
  for (let i = 0; i < campoEmojis.length; i++) {
    let x = i * 40;
    text(campoEmojis[i], x, 320);
  }
}

function desenhaJogadores() {
  textSize(50);
  for (let i = 0; i < jogador.length; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function verificaVencedor() {
  for (let i = 0; i < jogador.length; i++) {
    if (xJogador[i] < 30) {
      fill("black");
      textSize(32);
      textAlign(CENTER);
      text(jogador[i] + " chegou ao campo", width / 2, 100);
      noLoop();
    }
  }
}

function desenhaMensagem() {
  if (mostrarMensagem) {
    fill("black");
    textSize(16);
    textAlign(CENTER);
    text("Pressione a tecla para acelerar:", width / 2, 40);
    text(`Jogador 1 (${jogador[0]}): tecla "${teclas[0].toUpperCase()}"`, width / 2, 65);
    text(`Jogador 2 (${jogador[1]}): tecla "${teclas[1].toUpperCase()}"`, width / 2, 90);
  }
}

function keyReleased() {
  mostrarMensagem = false;
  for (let i = 0; i < jogador.length; i++) {
    if (key.toLowerCase() === teclas[i]) {
      xJogador[i] -= random(15, 30);
    }
  }
}
