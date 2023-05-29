const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  const chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiUmValorValido(chute);

  if (chuteForInvalido(chute)) {
    if (chute.toUpperCase() === 'GAME OVER') {
      document.body.innerHTML = `
        <h2>Acabou!</h2>
        <h3>Pressione o botão para jogar novamente</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
      `;
      document.body.style.backgroundColor = 'black';
    } else {
      elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }
  }
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
  `;
}

function chuteForInvalido(chute) {
  // Implemente a lógica da verificação de chute inválido aqui
  // Retorne true se o chute for inválido, caso contrário, retorne false
}

recognition.addEventListener('end', () => recognition.start());
