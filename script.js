// 1. Checklist interativo dos computadores compartilhados
const itensCheck = document.querySelectorAll('.item-check');
const textoCheck = document.getElementById('texto-checklist');

itensCheck.forEach(item => {
  item.addEventListener('change', () => {
    const marcados = document.querySelectorAll('.item-check:checked').length;
    if (marcados === itensCheck.length) {
      textoCheck.textContent = 'Show! Você seguiu todos os cuidados de segurança.';
      textoCheck.style.color = '#22c55e';
    } else {
      textoCheck.textContent = `Você marcou ${marcados} de ${itensCheck.length} cuidados.`;
      textoCheck.style.color = '#38bdf8';
    }
  });
});

// 2. Simulador de mensagem falsa (Funcionalidade extra)
function testarGolpe(acertou) {
  const caixa = document.getElementById('resposta-simulador');
  caixa.style.display = 'block';

  if (acertou) {
    caixa.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
    caixa.style.color = '#4ade80';
    caixa.textContent = 'Acertou! Esse link termina em ".xyz" e promete jogo de graça — sinal clássico de roubo de conta.';
  } else {
    caixa.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
    caixa.style.color = '#f87171';
    caixa.textContent = 'Ops, você caiu no golpe! Esse site falso ia roubar seu login e senha da Steam.';
  }
}

// 3. Quiz obrigatório de 5 perguntas
function corrigirQuiz() {
  const gabarito = {
    p1: 'b',
    p2: 'a',
    p3: 'b',
    p4: 'c',
    p5: 'a'
  };

  let acertos = 0;
  let respondidas = 0;

  for (let questao in gabarito) {
    const escolhida = document.querySelector(`input[name="${questao}"]:checked`);
    if (escolhida) {
      respondidas++;
      if (escolhida.value === gabarito[questao]) {
        acertos++;
      }
    }
  }

  const resultado = document.getElementById('resultado-quiz');
  resultado.style.display = 'block';

  if (respondidas < 5) {
    resultado.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
    resultado.style.color = '#f87171';
    resultado.textContent = 'Responda todas as 5 perguntas antes de ver o resultado!';
    return;
  }

  resultado.style.backgroundColor = 'rgba(56, 189, 248, 0.2)';
  resultado.style.color = '#38bdf8';
  resultado.innerHTML = `Você acertou <strong>${acertos} de 5</strong> perguntas! <br>Respostas certas: 1-B | 2-A | 3-B | 4-C | 5-A.`;
}